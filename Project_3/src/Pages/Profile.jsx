import React, { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
    if (storedUser) {
      setFormData({
        name: storedUser.name || "",
        email: storedUser.email || "",
      });
    }

    // Set a random avatar once
    const gender = Math.random() > 0.5 ? "men" : "women";
    const id = Math.floor(Math.random() * 100); // max 99 for randomuser.me
    setAvatarUrl(`https://randomuser.me/api/portraits/${gender}/${id}.jpg`);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    const updatedUser = { ...user, ...formData };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setEditMode(false);
  };

  if (!user) {
    return (
      <div className="container mt-5">
        <div className="alert alert-warning">Please log in to view your profile.</div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="card shadow-sm p-4">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              src={avatarUrl}
              alt="Profile"
              className="rounded-circle img-fluid mb-3 border border-secondary"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8">
            {editMode ? (
              <>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <button className="btn btn-success me-2" onClick={handleSave}>
                  Save
                </button>
                <button className="btn btn-secondary" onClick={() => setEditMode(false)}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h3 className="mb-1">{user.name || "User Name"}</h3>
                <p className="mb-1"><strong>Email:</strong> {user.email || "N/A"}</p>
                <p className="mb-3"><strong>Role:</strong> {user.role || "user"}</p>
                <button className="btn btn-outline-primary" onClick={() => setEditMode(true)}>
                  Edit Profile
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

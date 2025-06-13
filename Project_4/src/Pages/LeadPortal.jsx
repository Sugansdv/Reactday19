import ReactDOM from "react-dom";

export default function LeadPortal({ lead, onClose }) {
  return ReactDOM.createPortal(
    <div className="position-fixed top-0 end-0 p-3 bg-white shadow rounded" style={{ width: "300px", height: "100%", zIndex: 1050 }}>
      <h5>{lead.name}</h5>
      <p>Email: {lead.email}</p>
      <button className="btn btn-danger btn-sm" onClick={onClose}>Close</button>
    </div>,
    document.body
  );
}

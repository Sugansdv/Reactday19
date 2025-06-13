
import React, { useEffect, useState } from 'react';
import { fetchCourses } from '../api';
import { Link } from 'react-router-dom';


export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses().then(setCourses);
  }, []);

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-primary">Available Courses</h2>

      {courses.length === 0 ? (
        <p className="text-muted">No courses available.</p>
      ) : (
        <div className="list-group">
          {courses.map((course) => (
            <Link
              key={course.id}
              to={`/courses/${course.id}`}
              className="list-group-item list-group-item-action"
            >
              {course.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

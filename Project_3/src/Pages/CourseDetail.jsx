import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCourseDetail } from "../api";
import VideoModal from "../Components/VideoModal";
import QuizModal from "../Components/QuizModal";

export default function CourseDetail() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);

  useEffect(() => {
    fetchCourseDetail(courseId).then((data) => {
      setCourse(data);
      localStorage.setItem("user", JSON.stringify({ role: data.role }));
    });
  }, [courseId]);

  if (!course) return <p className="text-center mt-5">Loading…</p>;

  // Sample quiz data (can be per lesson)
  const quizData = {
    question: "What is React primarily used for?",
    options: [
      "Game development",
      "Mobile app design",
      "Building user interfaces",
      "Database management",
    ],
    correctAnswer: "Building user interfaces",
  };

  return (
    <div className="container py-4">
      <header className="mb-4">
        <h2 className="fw-bold">{course.title}</h2>
        <span className="badge bg-secondary">Role: {course.role}</span>
      </header>

      <section>
        <h4 className="mb-3">Lessons</h4>
        <ul className="list-group">
          {course.lessons.map((lesson, idx) => (
            <li
              key={idx}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{lesson}</span>
              <div>
                <button
                  className="btn btn-sm btn-outline-primary me-2"
                  onClick={() => setShowModal(true)}
                >
                  Watch
                </button>
                <button
                  className="btn btn-sm btn-outline-success"
                  onClick={() => {
                    setSelectedLesson(lesson);
                    setShowQuiz(true);
                  }}
                >
                  Take Quiz
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Modals */}
      {showModal && <VideoModal onClose={() => setShowModal(false)} />}
      {showQuiz && (
        <QuizModal
          onClose={() => setShowQuiz(false)}
          question={quizData.question}
          options={quizData.options}
          correctAnswer={quizData.correctAnswer}
        />
      )}
    </div>
  );
}

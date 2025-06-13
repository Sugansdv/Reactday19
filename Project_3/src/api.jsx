export const fetchCourses = () =>
  Promise.resolve([
    { id: 'react', title: 'React Full Course' },
    { id: 'html-css', title: 'HTML & CSS Mastery' }
  ]);

export const fetchCourseDetail = (id) =>
  Promise.resolve({
    id,
    title: id === 'react' ? 'React Full Course' : 'HTML & CSS Mastery',
    lessons: id === 'react' 
      ? ['Intro to React', 'JSX & Components', 'Hooks & State'] 
      : ['HTML Basics', 'CSS Styling', 'Responsive Design'],
    role: id === 'react' || id === 'html-css' ? 'student' : 'instructor'
  });
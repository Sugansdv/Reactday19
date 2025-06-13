import React from 'react';
import withTitleUpdate from '../hoc/withTitleUpdate';

const Task12 = () => {
  return (
    <div>
      <h2>Task 12. Update the document title with the component name whenever it renders.</h2>
      <p>Check the browser tab — the title should be "Task12".</p>
    </div>
  );
};

Task12.displayName = 'Task12';

export default withTitleUpdate(Task12);

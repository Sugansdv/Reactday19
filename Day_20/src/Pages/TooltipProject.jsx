import React from 'react';
import Tooltip from '../Components/ToolTip';

const TooltipProject = () => (
  <div className="container mt-5 text-center">
    <h4>Mini Project 2: Tooltip Component</h4>
    <p className="mt-4">
      Hover over this{' '}
      <Tooltip text="This is extra information shown on hover.">
        <strong>important text</strong>
      </Tooltip>{' '}
      to see the tooltip.
    </p>
  </div>
);

export default TooltipProject;

import React, { useEffect } from 'react';

const withTitleUpdate = (WrappedComponent) => {
  const WithTitle = (props) => {
    useEffect(() => {
      const title = WrappedComponent.displayName || WrappedComponent.name || 'Component';
      document.title = title;
    }, []);

    return <WrappedComponent {...props} />;
  };

  WithTitle.displayName = `WithTitleUpdate(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithTitle;
};

export default withTitleUpdate;

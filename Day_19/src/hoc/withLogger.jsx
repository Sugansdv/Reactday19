import React, { useEffect } from 'react';

const withLogger = (WrappedComponent) => {
  const WithLogger = (props) => {
    useEffect(() => {
      console.log(`Component Rendered: ${WrappedComponent.displayName || WrappedComponent.name || 'Component'}`);
    }, []);

    return <WrappedComponent {...props} />;
  };

  WithLogger.displayName = `WithLogger(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithLogger;
};

export default withLogger;

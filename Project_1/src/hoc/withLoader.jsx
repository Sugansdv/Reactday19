import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const withLoader = (WrappedComponent, fetchData) => {
  return (props) => {
    const params = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      setLoading(true);
      setError(null);

      fetchData(params)
        .then((res) => {
          setData(res);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Fetch error:", err); // 🔍 Add debug log
          setError(err.message || 'Failed to load data.');
          setLoading(false);
        });
    }, [params]);

    if (loading) return <div className="text-center mt-5">⏳ Loading...</div>;
    if (error) return <div className="text-danger text-center mt-5">❌ {error}</div>;

    return <WrappedComponent data={data} {...props} />;
  };
};

export default withLoader;

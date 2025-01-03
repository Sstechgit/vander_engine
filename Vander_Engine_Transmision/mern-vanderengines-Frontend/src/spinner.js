// LoadingProvider.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "./components/Loader/LoadingSpinner"; // Import the spinner

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div>
      {loading && <LoadingSpinner />}
      {children}
    </div>
  );
};

export default LoadingProvider;

import { useState, useEffect } from "react";

export const useFetchProducts = (url) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const formattedData = [];
        Object.entries(data).forEach(([year, makes]) => {
          Object.entries(makes).forEach(([make, models]) => {
            Object.entries(models).forEach(([model, variants]) => {
              Object.entries(variants).forEach(([variant, details]) => {
                formattedData.push({
                  year,
                  make,
                  model,
                  variant,
                  ...details,
                });
              });
            });
          });
        });
        setProducts(formattedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [url]);

  return { products, isLoading, error };
};

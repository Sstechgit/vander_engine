import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

export default function Cardsection1({ showproduct, handleAddToCart }) {
  const navigate = useNavigate();
  const [engines, setEngines] = useState([]);
  const [transmissions, setTransmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadedProducts, setLoadedProducts] = useState(5); // Track loaded products

  const formatData = (data) => {
    const formattedProducts = [];
    Object.keys(data).forEach((year) => {
      const makes = data[year];
      Object.keys(makes).forEach((make) => {
        const models = makes[make];
        Object.keys(models).forEach((model) => {
          const variants = models[model];
          Object.keys(variants).forEach((variant) => {
            const product = variants[variant];

            // Create the id using stock
            const id = product.Stock
              ? `${product.Stock}-${make}-${model}-${variant}`
              : `${make}-${model}-${variant}`;

            // Push each product with all necessary fields
            formattedProducts.push({
              id: id, // Create a unique ID using stock
              name: product.name || "Unknown Product", // Handle missing name
              variant: variant || "Unknown Variant", // Extract variant
              price: product.pricing, // Clean price and convert to number
              year: year,
              model: model,
              image: product.image || "default_image.jpg", // Fallback image if missing
              description: product.description || "No description available", // Handle missing description
              stock: product.Stock || "Unknown Stock", // Handle missing stock
              warranty: product.warranty || "No warranty information", // Handle missing warranty
              miles: product.miles || "Unknown miles", // Handle missing miles
            });
          });
        });
      });
    });

    return formattedProducts;
  };

  const fetchEnginesData = async () => {
    try {
      const response = await fetch(
        "https://backend.vanderengines.com/api/engines"
      );
      const data = await response.json();

      if (data && typeof data === "object") {
        setEngines(formatData(data)); // Format the data before setting it
      } else {
        console.error("Invalid engines data format", data);
      }
    } catch (error) {
      console.error("Error fetching engine data:", error);
    } finally {
      setLoading(false); // Set loading to false after data has been fetched
    }
  };

  const fetchTransmissionsData = async () => {
    try {
      const response = await fetch(
        "https://backend.vanderengines.com/api/transmission"
      );
      const data = await response.json();

      if (data && typeof data === "object") {
        setTransmissions(formatData(data)); // Format the data before setting it
      } else {
        console.error("Invalid transmissions data format", data);
      }
    } catch (error) {
      console.error("Error fetching transmission data:", error);
    } finally {
      setLoading(false); // Set loading to false after data has been fetched
    }
  };

  useEffect(() => {
    fetchEnginesData();
    fetchTransmissionsData();
  }, []);

  // Combine engines and transmissions data into a single product array
  const products = [...engines, ...transmissions];

  // Load more products when user scrolls to the end of the slider
  const handleAfterChange = (current) => {
    if (current + 1 === loadedProducts) {
      setLoadedProducts(loadedProducts + 1); // Load 1 more product
    }
  };

  // Slick carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    afterChange: handleAfterChange, // Trigger to load more products when slider moves
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  // Ensure that products have been loaded before rendering
  if (loading || engines.length === 0 || transmissions.length === 0) {
    return <div>Loading...</div>; // Show loading text until data is fetched
  }

  return (
    <div className="cardsection1 my-5" style={{ overflow: "hidden" }}>
      <div className="container-fluid">
        <Slider {...settings}>
          {products.slice(0, loadedProducts).map((product) => (
            <div key={product.id}>
              <div className="card cardPro mx-2 " style={{ height: "25em" }}>
                <img
                  src={product.image}
                  className="d-block img-fluid"
                  alt={product.name}
                  style={{ width: "100%", height: "150px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p id="HeadPro" className="fw-bold">
                    {product.year} <span> </span>
                    {product.name} {/* Display cleaned model name */}
                  </p>
                  <p id="variant">Variant: {product.variant}</p>
                  <p id="pricePro">{product.price}</p>
                  <p id="stock">Stock: {product.stock}</p>
                  <div className="starArea">
                    {[...Array(5)].map((_, index) => (
                      <i key={index} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <div className="btnPrice">
                    <button
                      className="theme-btn btn card-btn"
                      type="submit"
                      onClick={() => {
                        handleAddToCart({
                          id: product.Stock,
                          name: `${product.year} ${product.name}`,
                          price: product.price,
                          stockNumber: product.stock,
                          model: product.model,
                          year: product.year,
                          variant: product.variant,
                          imageURL: product.image,
                          quantity: 1,
                        });
                        navigate("/addtocart");
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
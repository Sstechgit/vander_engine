import React from "react";
import { motion } from "framer-motion";
import "./Banner.css";

const PricingBanner = () => {
  return (
    <div className="new-banner-container">
      {/* Background Layers for 3D Effect */}
      <div className="background-layer layer-1"></div>
      <div className="background-layer layer-2"></div>
      <div className="background-layer layer-3"></div>

      <motion.div
        className="banner-content"
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="banner-title">
          Unlock Your Growth <span>With Flexible Pricing</span>
        </h1>
        <p className="banner-description">
          Transparent plans tailored to meet your needs. Start growing your business today.
        </p>

        <motion.button
          className="banner-button"
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Plans
        </motion.button>
      </motion.div>
    </div>
  );
};

export default PricingBanner;

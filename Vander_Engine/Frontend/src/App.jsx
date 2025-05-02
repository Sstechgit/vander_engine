import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GeneralHeader from "./Includes/GeneralHeader";
import Header from "./Includes/Header";
import Footer from "./Includes/Footer";
import Cart from "./Form/Cart";
import Home from "./Home/Home";
import Engine from "./Engine/Engine";
import Transmission from "./Transmission/Transmission";
import Search from "./SearchCP/Search"
import About from "./AboutUs/About";
import Financing from "./Financing/Financing";
import ShippingPolicy from "./Policy/ShippingPolicy";
import ReturnPolicy from "./Policy/ReturnPolicy";
import WarrantyPolicy from "./Policy/WarrantyPolicy";
import TermsOfServices from "./Policy/TermsOfServices";
import PrivacyPolicy from "./Policy/PrivacyPolicy";
import Contact from "./Contact/Contact";
import ThankYou from "./Includes/ThankYou";
import Wishlist from "./Form/Wishlist";
import ProductPage from "./Form/ProductPage";
import ScrollToTop from "./Includes/ScrollToTop";
import EngineForm from "./Transmission/Transmissionform";
import Update_Product from "./Includes/Update_Product";
import BlogPosts from "./Blog/BlogPosts";
import BlogPost from "./Blog/BlogPost";
import Policies from "./Policy/Policies";

// Layout component that includes Header and Footer
function LayoutWithHeaderFooter({ children }) {
  return (
    <>
      <GeneralHeader />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(
        (item) => item.stockNumber === product.stockNumber
      );
      return existingItem
        ? prevCartItems.map((item) =>
            item.stockNumber === product.stockNumber
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prevCartItems, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (stockNumber) => {
    setCartItems((prevCartItems) =>
      prevCartItems
        .map((item) =>
          item.stockNumber === stockNumber
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  //--------------------------------ShowProduct---------------------------------
  const [productItems, setProductItems] = useState(() => {
    const savedCart = sessionStorage.getItem("productItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    if (productItems.length === 0) {
      sessionStorage.removeItem("productItems");
    } else {
      sessionStorage.setItem("productItems", JSON.stringify(productItems));
    }
  }, [productItems]);

  const showproduct = (product) => {
    setProductItems([product]);
  };

  //------------------------------------------Wishlist Code----------------------------------------
  const initialWishlistItems =
    JSON.parse(localStorage.getItem("wishlistItems")) || [];
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);
  const handleSaveForLater = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    setWishlistItems([...wishlistItems, item]);
  };

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const handleRemoveFromWishlist = (itemId) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== itemId));
  };

  const handleMoveToCart = (item) => {
    setWishlistItems(wishlistItems.filter((wishItem) => wishItem.id !== item.id));
    setCartItems([...cartItems, item]);
  };

  return (
    <>
      <Router>
       
        <Routes>
          {/* Routes with Header and Footer */}
          <Route
            path="/"
            element={
              <LayoutWithHeaderFooter>
                 <ScrollToTop />
                <Home handleAddToCart={handleAddToCart} />
              </LayoutWithHeaderFooter>
            }
          />
          <Route
            path="/engine/:year/:make/:model"
            element={
              <LayoutWithHeaderFooter>
                <Engine handleAddToCart={handleAddToCart} showproduct={showproduct} />
              </LayoutWithHeaderFooter>
            }
          />
          <Route
            path="engine"
            element={
              <LayoutWithHeaderFooter>
                <Engine handleAddToCart={handleAddToCart} showproduct={showproduct} />
              </LayoutWithHeaderFooter>
            }
          />
          <Route
            path="/transmission/:year/:make/:model"
            element={
              <LayoutWithHeaderFooter>
                <Transmission handleAddToCart={handleAddToCart} showproduct={showproduct} />
              </LayoutWithHeaderFooter>
            }
          />
          <Route
            path="transmission"
            element={
              <LayoutWithHeaderFooter>
                <Transmission handleAddToCart={handleAddToCart} showproduct={showproduct} />
              </LayoutWithHeaderFooter>
            }
          />
          <Route
            path="search-car-parts"
            element={
              <LayoutWithHeaderFooter>
                <Search handleAddToCart={handleAddToCart} showproduct={showproduct} />
              </LayoutWithHeaderFooter>
            }
          />
          <Route path="about" element={<LayoutWithHeaderFooter> <ScrollToTop /> <About /></LayoutWithHeaderFooter>} />
          
          {/* Routes without Header and Footer */}
          <Route path="blog/" element={<BlogPosts />} />
          <Route path="blog/:postId" element={<BlogPost />} />
          
          {/* Other routes with Header and Footer */}
          <Route path="financing" element={<LayoutWithHeaderFooter>  <ScrollToTop /><Financing /></LayoutWithHeaderFooter>} />
          <Route path="contact" element={<LayoutWithHeaderFooter>  <ScrollToTop /><Contact /></LayoutWithHeaderFooter>} />

          <Route path="/Privacy_Policies" element={<LayoutWithHeaderFooter>  <ScrollToTop /><Policies /></LayoutWithHeaderFooter>} />

          <Route path="shipping" element={<LayoutWithHeaderFooter>  <ScrollToTop /><ShippingPolicy /></LayoutWithHeaderFooter>} />
          <Route path="return" element={<LayoutWithHeaderFooter>  <ScrollToTop /><ReturnPolicy /></LayoutWithHeaderFooter>} />
          <Route path="warranty" element={<LayoutWithHeaderFooter>  <ScrollToTop /><WarrantyPolicy /></LayoutWithHeaderFooter>} />
          <Route path="termsofservice" element={<LayoutWithHeaderFooter> <ScrollToTop /><TermsOfServices /></LayoutWithHeaderFooter>} />
          <Route path="/privacy" element={<LayoutWithHeaderFooter> <ScrollToTop /><PrivacyPolicy /></LayoutWithHeaderFooter>} />
          <Route path="/thankyou" element={<LayoutWithHeaderFooter> <ScrollToTop /><ThankYou /></LayoutWithHeaderFooter>} />
          <Route
            path="/addtocart"
            element={
              <LayoutWithHeaderFooter>
                 <ScrollToTop />
                <Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} handleSaveForLater={handleSaveForLater} />
              </LayoutWithHeaderFooter>
            }
          />
          <Route
            path="/wishlist"
            element={
              <LayoutWithHeaderFooter>
                 <ScrollToTop />
                <Wishlist wishlistItems={wishlistItems} handleRemoveFromWishlist={handleRemoveFromWishlist} handleMoveToCart={handleMoveToCart} />
              </LayoutWithHeaderFooter>
            }
          />
          <Route
            path="/product"
            element={
              <LayoutWithHeaderFooter>
                 <ScrollToTop />
                <ProductPage productItems={productItems} handleAddToCart={handleAddToCart} />
              </LayoutWithHeaderFooter>
            }
          />
          <Route
            path="/engine/:year?/:make?/:model?/:variant?"
            element={<LayoutWithHeaderFooter> <ScrollToTop /><EngineForm /></LayoutWithHeaderFooter>}
          />
          <Route
            path="updateproduct"
            element={<LayoutWithHeaderFooter>  <ScrollToTop /><Update_Product /></LayoutWithHeaderFooter>}
          />
        </Routes>
      </Router>
    </>
  );
}

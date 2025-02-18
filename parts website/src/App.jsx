import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import GeneralHeader from "./Component/Includes/GeneralHeader";
import Header from "./Component/Includes/Header";
import Home from "./Component/Home/Home";
import Footer from "./Component/Includes/Footer";
import OnlineCatalog from "./Component/OnlineCatalog/OnlineCatalog";
import Brands from "./Component/Brands/Brands";
import ShopByMake from "./Component/ShopByMake/ShopByMake";
import Customer_Service from "./Component/Customer_Service/Customer_Service";
import Retrive_Quote from "./Component/Retrive_Quote/Retrive_Quote";
import Track_Order from "./Component/Track Order/Track_Order";
import View_Cart from "./Component/View Cart/View_Cart";
import ScrollToTop from "./Component/Includes/ScrollToTop";
import Seller_parts from "./Component/Child Components/Seller_parts";
import Engine from "./Component/Engine/Engine";
import Transmission from "./Component/Transmission/Transmission";
import ShippingPolicy from "./Component/Policy/ShippingPolicy";
import ReturnPolicy from "./Component/Policy/ReturnPolicy";
import WarrantyPolicy from "./Component/Policy/WarrantyPolicy";
import TermsOfServices from "./Component/Policy/TermsOfServices";
import PrivacyPolicy from "./Component/Policy/PrivacyPolicy";

function App() {
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
      <BrowserRouter>
        <ScrollToTop />
        <GeneralHeader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/engine" element={<Engine handleAddToCart={handleAddToCart} showproduct={showproduct} />} />
          <Route path="/transmission" element={<Transmission handleAddToCart={handleAddToCart} showproduct={showproduct}  />} />
          <Route path="/onlinecatalog" element={<OnlineCatalog />} />
          <Route path="/brand" element={<Brands />} />
          <Route path="/shopbymake" element={<ShopByMake />} />
          <Route path="/customer_service" element={<Customer_Service />} />
          <Route path="/retrive_quote" element={<Retrive_Quote />} />
          <Route path="/track_order" element={<Track_Order />} />
          <Route path="/view_cart" element={<View_Cart />} />
          <Route path="/sellerParts" element={<Seller_parts />} />
          <Route path="/shipping" element={<ShippingPolicy />} />
          <Route path="/return" element={<ReturnPolicy />} />
          <Route path="/warranty" element={<WarrantyPolicy />} />
          <Route path="/termsofservice" element={<TermsOfServices />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

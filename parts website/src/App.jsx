import React from "react";
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

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <GeneralHeader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onlinecatalog" element={<OnlineCatalog />} />
          <Route path="/brand" element={<Brands />} />
          <Route path="/shopbymake" element={<ShopByMake />} />
          <Route path="/customer_service" element={<Customer_Service />} />
          <Route path="/retrive_quote" element={<Retrive_Quote />} />
          <Route path="/track_order" element={<Track_Order />} />
          <Route path="/view_cart" element={<View_Cart />} />
          <Route path="/sellerParts" element={<Seller_parts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

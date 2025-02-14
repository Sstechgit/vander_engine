import React, { useEffect } from "react";
import "./Home.css";
import Speciality from "./Speciality";
import BuyAutoParts from "./BuyAutoParts";
import AllPArts from "./AllPArts";
import ShowParts from "./ShowParts";
import DiscountParts from "./DiscountParts";
import ShopMake from "./ShopMake";
import ShopModels from "./ShopModels";
import FeaturedBrands from "./FeaturedBrands";
import PopularProducts from "./PopularProducts";
import Satisfied_customer from "./Satisfied_customer";
import CustomerReview from "./CustomerReview";
import HomeHeader from "./HomeHeader";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);
  return (
    <>
      <div className="home">
        <HomeHeader />
      </div>
      <Speciality />
      <BuyAutoParts />
      <AllPArts />
      <ShowParts />
      <DiscountParts />
      <ShopMake />
      <ShopModels />
      <FeaturedBrands />
      <PopularProducts />
      <Satisfied_customer />
      <CustomerReview />
    </>
  );
}

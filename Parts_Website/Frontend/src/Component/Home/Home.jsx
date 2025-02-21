import React from "react";
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
import HomeBottomForm from "./HomeBottomForm";
import HomeCards from "./HomeCards";

export default function Home( ) {
  return (
    <>
      <div className="home">
        <HomeHeader />
      </div>
      <Speciality />
      <BuyAutoParts />
      <HomeCards/>
      <AllPArts />
      <ShowParts />
      <DiscountParts />
      <ShopMake />
      <ShopModels />
      {/* <FeaturedBrands /> */}
      {/* <PopularProducts /> */}
      <Satisfied_customer />
      <HomeBottomForm />
      <CustomerReview />
    </>
  );
}

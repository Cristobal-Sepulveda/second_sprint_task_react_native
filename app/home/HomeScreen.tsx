import React from "react";
import Hero from "./components/Hero/Hero";
import CustomCarousel from "./components/Carousel/CustomCarousel";
import citiesData from "../utils/citiesData";

export default function Index() {
  return (
    <>
      <Hero title="MyTinerary" subtitle="Find your perfect travel itinerary" />
      <CustomCarousel cities={citiesData} />
    </>
  );
}

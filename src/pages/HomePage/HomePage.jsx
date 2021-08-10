import React from "react";
import HomePageHeader from "../../components/HomePageHeader/HomePageHeader";
import DailyDoseCarousel from "../../components/DailyDoseCarousel/DailyDoseCarousel";
import RecentBlogItem from "../../components/RecentBlogItem/RecentBlogItem";
import ArrivalItem from "../../components/ArrivalItem/ArrivalItem";
const HomePage = () => {
  return (
    <div>
      <HomePageHeader />
      <ArrivalItem />
      <DailyDoseCarousel />
      <RecentBlogItem />
    </div>
  );
};

export default HomePage;

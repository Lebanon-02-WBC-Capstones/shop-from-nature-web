import React from "react";
import HomePageHeader from "../../components/HomePageHeader/HomePageHeader";
import DailyDoseCarousel from "../../components/DailyDoseCarousel/DailyDoseCarousel";
import RecentBlogItem from "../../components/RecentBlogItem/RecentBlogItem";
import ArrivalItem from "../../components/ArrivalItem/ArrivalItem";
import Newsletter from "../../components/Newsletter/Newsletter";

const HomePage = () => {
  return (
    <div className="bg-mainbg">
      <HomePageHeader />
      <ArrivalItem />
      <DailyDoseCarousel />
      <RecentBlogItem />
      <Newsletter />
    </div>
  );
};

export default HomePage;

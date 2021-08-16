import React from "react";
import BlogCardList from "../../components/BlogCard/BlogCardList";
import { LanguageContext } from "../../App";
const blogPage = () => {
  const { t } = React.useContext(LanguageContext);
  return (
    <div>
      <div className="max-w-md ml-5 mt-5">
        <p className="text-red text-2xl font-medium">
          {t("Home is behind, the world ahead")}
          {t("and there are many paths to tread through shadows to the edge.")}
        </p>
      </div>
      <div className="flex justify-center">
        <BlogCardList />
      </div>
    </div>
  );
};

export default blogPage;

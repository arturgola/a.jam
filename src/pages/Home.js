import React from "react";
import Skeleton from "../components/Skeleton";
import PageNotFound from "../components/PageNotFound";
// import ComingSoon from "../components/ComingSoon";

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <PageNotFound>
        Oops! This website is currently under development. Please check back
        later.
        <p className="mt-6 text-sm text-gray-500">Last updated: 2/2025</p>
        <div className="gap-4 mt-8 flex-grow">
          <Skeleton />
        </div>
      </PageNotFound>
    </div>
  );
};

export default Home;

import React from "react";
import Marquee from "react-fast-marquee";

const LeatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-2.5">
      <p className="text-base-100 bg-secondary px-3 py-2">leatest</p>
      <Marquee className="flex gap-2.5" pauseOnHover={true} speed={50}>
        <p className="font-semibold">
          Now the milestone tradegy is going to upperhand on the talk of the
          town for any quires of everyone shouldn't overwhelming this issues.
        </p>
        <p className="font-semibold">
          Now the milestone tradegy is going to upperhand on the talk of the
          town for any quires of everyone shouldn't overwhelming this issues.
        </p>
        <p className="font-semibold">
          Now the milestone tradegy is going to upperhand on the talk of the
          town for any quires of everyone shouldn't overwhelming this issues
        </p>
      </Marquee>
    </div>
  );
};

export default LeatestNews;

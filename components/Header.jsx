import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 pt-2">
      <img className="w-[350px]" src="../src/assets/logo.png" alt="" />
      <p className="text-gray-400">
        Journalism wihout a fear and all about favour
      </p>
    </div>
  );
};

export default Header;

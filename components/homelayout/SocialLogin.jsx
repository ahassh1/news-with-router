import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold">Login with</h2>
      <div className="space-y-2 md:space-y-3">
        <button className="btn btn-outline w-full btn-secondary">
          {" "}
          <FcGoogle size={24} /> Login with google
        </button>
        <button className="btn btn-outline btn-primary w-full">
          <FaGithub size={24} /> Login with github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

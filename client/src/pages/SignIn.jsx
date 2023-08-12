import React from "react";
import { FormAndImage, AuthProviders } from "../components";
import { signin } from "../assets";

const SignIn = () => {
  return (
    <FormAndImage image={signin} imageDesc="Sign In Image">
      <div className="w-full my-2 max-w-lg mx-auto flex flex-col items-center">
        <h1 className="head_text text-gradient mt-8 mb-2">Hi there!</h1>
        <p className="desc max-w-md mb-6">Welcome to Prompt Wizard</p>
        <AuthProviders />
      </div>
    </FormAndImage>
  );
};

export default SignIn;

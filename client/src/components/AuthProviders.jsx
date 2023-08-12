"use client";

import React, { useState } from "react";
import GitHub from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import { errors, regex } from "../constants";
import FormField from "./FormField";

const AuthProviders = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (updatedEmail) => {
    setEmail(updatedEmail);
    setEmailError("");
  };

  const handlePasswordChange = (updatedPassword) => {
    setPassword(updatedPassword);
    setPasswordError("");
  };

  const handleSignIn = async (providerId) => {
    const callbackUrl = localStorage.getItem("callbackUrl") || "/";
    // await signIn(providerId, { callbackUrl });
  };

  const handleFormSubmit = async (e, providerId) => {
    e.preventDefault();

    const callbackUrl = localStorage.getItem("callbackUrl") || "/";

    if (validateForm()) {
      // setIsLoading(true);
      // const response = await signIn(providerId, {
      //   email,
      //   password,
      //   redirect: false,
      // });
      // setIsLoading(false);
      //   if (!response?.error) {
      //     router.replace(callbackUrl);
      //   } else if (response?.error === "Email does not exist.") {
      //     setEmailError(response.error);
      //   } else if (response?.error === "Incorrect Username or Password.") {
      //     setPasswordError(response.error);
      //   }
    }
  };

  const validateForm = () => {
    let isValidForm = true;
    if (!regex.email.test(email)) {
      setEmailError(errors.email);
      isValidForm = false;
    }

    if (!regex.password.test(password)) {
      setPasswordError(errors.password);
      isValidForm = false;
    }
    return isValidForm;
  };

  return (
    <div className="w-full flex flex-col">
      <form
        onSubmit={(e) => handleFormSubmit(e, 1)}
        className="flex flex-col w-full gap-7 glassmorphism"
      >
        <FormField
          title="Email"
          state={email}
          placeholder="explore@mountains.com"
          setState={handleEmailChange}
          errorMessage={emailError}
          isRequired
        />

        <FormField
          title="Password"
          state={password}
          placeholder="no0neCanGuessIt"
          setState={handlePasswordChange}
          errorMessage={passwordError}
          isRequired
          type="password"
        />
        <div className="flex justify-end">
          <Link className="text-blue-600 font-bold" to="/forgotpassword">
            Forgot Password?
          </Link>
        </div>

        <button className="form-button my-4" type="submit" disabled={isLoading}>
          {isLoading ? (
            <div className="h-6 flex items-center justify-center">
              <span className="loader bottom-3"></span>
            </div>
          ) : (
            "Sign In"
          )}
        </button>
      </form>

      <p className="flex justify-center">
        Don&apos;t have an account?&nbsp;
        <Link className="text-blue-600 font-bold" to="/signup">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default AuthProviders;

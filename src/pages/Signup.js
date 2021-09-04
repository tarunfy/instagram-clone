import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { firebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";
export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(firebaseContext);

  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid =
    password === "" ||
    emailAddress === "" ||
    username === "" ||
    fullName === "";
  const handleSignUp = async (e) => {
    e.preventDefault();
    //try {
    //} catch (error) {}
  };

  useEffect(() => {
    document.title = "Sign Up - Instagram";
  }, []);

  return (
    <div className="container flex justify-center mx-auto max-w-screen-md items-center h-screen">
      <div className="flex flex-col w-2/5 justify-center items-center">
        <div className="flex flex-col items-center bg-white p-8 border rounded border-gray-primary mb-4">
          <div className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="Instagram"
              className="mt-2 w-10/12 mb-4 h-16"
            />
          </div>

          <h1 className="font-bold text-lg text-gray-customText mb-5 text-center mt-3">
            Sign up to see photos and videos from your friends.
          </h1>

          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

          <form onSubmit={handleSignUp} method="POST">
            <input
              value={username}
              required
              aria-label="Enter your username"
              type="text"
              placeholder="Username"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setUsername(target.value)}
            />
            <input
              value={fullName}
              required
              aria-label="Enter your full name"
              type="text"
              placeholder="Full Name"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setFullName(target.value)}
            />
            <input
              value={emailAddress}
              required
              aria-label="Enter your email address"
              type="text"
              placeholder="Email address"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <input
              value={password}
              required
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${
                isInvalid && `opacity-50`
              }`}
            >
              Sign Up
            </button>
            <h6 className="font text-xs text-gray-base mb-4 text-center mt-4">
              By signing up, you agree to our Terms, Data Policy and Cookie
              Policy.
            </h6>
          </form>
        </div>
        <div className="flex justify-center flex-col w-full items-center bg-white p-4 border border-gray-primary rounded">
          <p className="text-sm">
            Have an account?{" "}
            <Link to="/login" className="font-normal  text-blue-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import { firebaseContext } from "../context/firebase";
import { UserContext } from "../context/user";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";

function Header() {
  const { firebase } = useContext(firebaseContext);
  const { user } = useContext(UserContext);

  console.log(user);

  return (
    <header className="h-16 bg-white border-b border-gray-primary mb-8">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="text-gray-700 text-center flex items-center align-middle cursor-pointer">
            <h1 className="flex justify-center w=full">
              <Link to={ROUTES.DASHBOARD}>
                <img
                  src="/images/logo.png"
                  alt="Instagram"
                  className="mt-2 w-6/12"
                />
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

import React, { useContext } from "react";
import { useHistory } from "react-router";
import { firebaseContext } from "../context/firebase";

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(firebaseContext);

  return <h1>Login page</h1>;
}

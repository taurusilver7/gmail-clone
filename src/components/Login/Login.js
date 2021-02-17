import React from "react";
import "./Login.css";

import { auth, provider } from "../../firebase";
import { Button } from "@material-ui/core";
import { login } from "../../features/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            email: user?.email,
            displayName: user?.displayName,
            photoUrl: user?.photoURL,
          })
        );
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.gizmochina.com/wp-content/uploads/2020/10/Screenshot-145.png"
          alt="logo"
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;

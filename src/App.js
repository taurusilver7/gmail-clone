import React, { useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Mail from "./components/Mail/Mail";
import EmailList from "./components/EmailList/EmailList";
import SendMail from "./components/SendMail/SendMail";
import Login from "./components/Login/Login";

import { selectSendMsgOpen } from "./features/mailSlice";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const sendMsgOpen = useSelector(selectSendMsgOpen);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // the user is logged in
        dispatch(
          login({
            email: user?.email,
            displayName: user?.displayName,
            photoUrl: user?.photoURL,
          })
        );
      } else {
        // the user is logged out
      }
    });
  }, []);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />

          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>
          {sendMsgOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;

import { useState } from "react";

import "./Main.css"

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function Main() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default Main;
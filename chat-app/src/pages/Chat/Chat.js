import React, { useState, useContext } from "react";
import { Redirect, useLocation} from "react-router-dom";

import Messages from "./components/Messages";
import MessageInput from "./components/MessageInput";
import SearchInput from "./components/SearchInput";
import Settings from "./components/Settings";
import UserHeader from "./components/UserHeader";
import UserList from "./components/UserList";

import "./Chat.css";
import { UserContext } from "../../context/login";
// import { UserContext } from "../../context/login";

function Chat() {
  const userNameFromStorage = localStorage.getItem("username");
  const {pathname} = useLocation();
  const {user} = useContext(UserContext);
  const [search, setSearch] = useState("");

  if(!user) return <Redirect to="/login" />

  if(!userNameFromStorage && pathname ==="/chat") return <Redirect to="/login" />

  return (
   <div className="chat-container">
     <div className="left-side">
       <SearchInput searchText={search} handleOnChange={setSearch} />
       <UserList searchText={search} />
       <Settings />
     </div>
     <div className="right-side">
       <UserHeader />
       <Messages />
       <MessageInput />
     </div>
   </div>
   )
};

export default Chat;
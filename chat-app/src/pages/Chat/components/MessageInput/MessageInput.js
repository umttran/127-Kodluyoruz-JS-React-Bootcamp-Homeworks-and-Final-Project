import React, {useState, useContext } from "react";
import { UserContext } from "../../../../context/login";

import "./MessageInput.css";

function MessageInput () {
  const { handleSendMessages} = useContext(UserContext);

  const [message, setMessage] = useState("");

  return (
    <div className="message-input">
      <input value={message}
        className="message-input-text" placeholder="Type"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button className="message-input-button" type="submit"
        onClick={() => {
          handleSendMessages(message);
          setMessage("");
        }}> Send</button>
    </div>
  )
}

export default  MessageInput;
import React, { useContext } from "react";
import { UserContext } from "../../../../context/login";

import "./Messages.css"

function Messages () {
  const {selectedUser, user} = useContext(UserContext);

  if(!selectedUser) return (  
    <div className="messages">
    </div>
  )

 return (
    <div className="messages">
      {selectedUser
        ? selectedUser.messages.map((message, index) => {
            return (
              <div className={`${message.sender === user.id ? "messages-outgoing":"messages-incoming" }`} key={index}>
                <p>{message.text}</p>
              </div>
            );
          })
        : null}
    </div>
  );

}

export default  Messages;


import React from "react";
import { UserContext } from "../../../../context/login";

import "./UserHeader.css"

function UserHeader() {
  const {selectedUser} = React.useContext(UserContext);

  if(!selectedUser) return (
    <div className="user-header">
      <div className="user-header-pp"></div>
      <div className="user-header-name">
        <h3></h3>
      </div>
      <div className="user-header-options">
      </div>
    </div>
  );

  return (
    <div className="user-header">
      <div className="user-header-pp"></div>
      <div className="user-header-name">
        <h3>
          {selectedUser.first_name} {selectedUser.last_name}
        </h3>
      </div>
      <div className="user-header-options">
      </div>
    </div>
  );
}

export default UserHeader;
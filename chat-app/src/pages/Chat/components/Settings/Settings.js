import React, { useContext } from "react";
import { UserContext } from "../../../../context/login";

import "./Settings.css"

function Settings() {
  const {logout} = useContext(UserContext);

  return (
    <div className="settings">
      <div className="settings-content">
        <div className="dark-mode">
          <div className="dark-mode-icon"></div>
        </div>
        <div className="log-out" onClick={logout}>
          <div className="log-out-icon"></div>
        </div>
      </div>
    </div>
  )
}

export default Settings;
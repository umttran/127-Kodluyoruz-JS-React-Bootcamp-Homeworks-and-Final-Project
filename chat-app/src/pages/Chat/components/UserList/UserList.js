import React, {useContext} from "react";
import { UserContext } from "../../../../context/login";

import "./UserList.css"

function UserList({searchText}) {
  // const { userList, selectUser } = React.useContext(UserContext);
  // console.log(searchText);

  const {userList, setSelectedUser} = useContext(UserContext);

  const filterUserList = userList.filter((user) =>
    ` ${user.user_name}
      ${user.first_name}
      ${user.last_name}`.toLowerCase().includes(searchText.toLowerCase()))

  return (
    <div className="user-list">
      {filterUserList.map((item, index) => {
        return (
          <div className="user-list-content" key={index}
              onClick={ () => {
                  setSelectedUser(item.id)
                }
              }
          >
            <div className="user-pp">
            </div>
            <div className="user-info">
              <h4>{item.first_name} {item.last_name}</h4>
              <p>Eğitimler nasıl gidiyor???</p>
            </div>
          </div>
        )
      })}

      {/* <div className="user-list-content">
        <div className="user-pp">
        </div>
        <div className="user-info">
          <h4>John Doe</h4>
          <p>Eğitimler nasıl gidiyor?</p>
        </div>
      </div> */}
    </div>
  )
}



export default UserList;
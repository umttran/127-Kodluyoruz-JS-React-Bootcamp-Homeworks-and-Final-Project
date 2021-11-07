import React, {useState, useEffect} from 'react';
import Routes from './routes';
import { UserContext } from './context/login';

import mockUsers from "../src/mock-users.json";

import './App.css';



function App() {
  const [user, setUser] = useState(null);

  const [selectedUser, setSelectedUser] = useState((null));

  const [userList, setUserList] = useState(mockUsers.users);
  


  const login = (user) => {
    setUser(user);
    localStorage.setItem("username", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("username");
  };

  const handleSetSelectedUser = (userId) => {
    const user = userList.find((u) => u.id === userId);
    if(user) setSelectedUser(user);
  }

  const handleSendMessages = (messageText) => {
    const newSelectedUser = {
      ...selectedUser,
      messages: [
        ...selectedUser.messages,
        {
          id: Math.random(),
          text: messageText,
          sender: user.id,
        },
      ],
    }
    setSelectedUser(newSelectedUser);
    const newUserList = userList.map((item) => {
      if(item.id === selectedUser.id) 
        return newSelectedUser;
      else
        return item;
    });
    setUserList(newUserList);
  }
  

  useEffect(() => {
    const userNameFromStorage = localStorage.getItem("username");

    if(userNameFromStorage) {
      const userObject = JSON.parse(userNameFromStorage);
      setUser(userObject);
    }
  }, []);


  return (
    <UserContext.Provider
      value={{
        user,
        selectedUser,
        setSelectedUser: handleSetSelectedUser, 
        userList,
        login,
        logout,
        handleSendMessages,
        // selectUser,
      
      }}
    >
    <Routes />
    </UserContext.Provider>
  );
}

export default App;

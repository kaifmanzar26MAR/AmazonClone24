// GlobalComponent.js
import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }) => {
  const [login_user, setLogin_user] = useState('abc');

  const updateLoginUser = (newuser) => {
    setLogin_user(newuser);
  };

  const contextValue = {
    login_user,
    updateLoginUser,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

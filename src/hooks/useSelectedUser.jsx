import React, { createContext, useState, useContext } from 'react';

const SelectedUserContext = createContext();

export const SelectedUserProvider = ({ children }) => {
  const [selectedUserId, setSelectedUserId] = useState(0);

  return (
    <SelectedUserContext.Provider value={{ selectedUserId, setSelectedUserId }}>
      {children}
    </SelectedUserContext.Provider>
  );
};

export const useSelectedUser = () => useContext(SelectedUserContext);

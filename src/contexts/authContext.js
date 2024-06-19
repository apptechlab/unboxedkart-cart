import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');

  const handleSetToken = (newToken) => {
    setToken(newToken);
    console.log(`AuthProvider: ${newToken}`)
  };
  console.log(`AuthProvider: ${token}`)

  return (
    <AuthContext.Provider value={{ token, setToken: handleSetToken, }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

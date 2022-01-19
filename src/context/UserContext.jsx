import { createContext, useContext, useEffect, useState } from 'react';
import { getMe } from '../services/auth';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function get() {
      const result = await getMe();
      setUser(result);
    }
    get();
  }, []);

  return user ? (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  ) : (
    <></>
  );
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserContext Provider');
  }

  return context;
};

export { UserProvider, useUser };

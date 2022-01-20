import { createContext, useContext, useEffect, useState } from 'react';
import { getMe } from '../services/auth';
import { getUserNotes } from '../services/notes';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState(null);
  const [tree, setTree] = useState(null);

  useEffect(() => {
    async function get() {
      const result = await getMe();
      setUser(result);
    }
    get();
  }, []);

  useEffect(() => {
    async function getNotes() {
      const result = await getUserNotes({
        userId: user.id,
        query: { type: 'favorite' },
      });
      setNotes(result);
    }
    if (user && user.id) getNotes();
  }, [user]);

  return user && notes ? (
    <UserContext.Provider
      value={{ user, setUser, notes, setNotes, tree, setTree }}
    >
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

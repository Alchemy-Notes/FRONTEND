import { createContext, useContext, useEffect, useState } from 'react';
import { getUserNotes } from '../services/notes';
import { useUser } from './UserContext';

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    async function get() {
      const result = await getUserNotes({
        userId: user.id,
        query: { type: 'favorite' },
      });
      setNotes(result);
    }
    if (user && user.id) get();
  }, []);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {children}
    </NoteContext.Provider>
  );
};

const useNotes = () => {
  const context = useContext(NoteContext);

  if (context === undefined) {
    throw new Error('useNotes must be used within a NoteContext Provider');
  }

  return context;
};

export { NoteProvider, useNotes };

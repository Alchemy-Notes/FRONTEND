import { createContext, useContext, useState } from 'react';

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

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

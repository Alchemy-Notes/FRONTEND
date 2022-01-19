import EditNote from '../../components/Notes/EditNote/EditNote';
import Search from '../../components/Search/Search';
import ViewNote from '../../components/Notes/ViewNote/ViewNote';
import { useState, useEffect } from 'react';
import { useUser } from '../../context/UserContext';
import { useNotes } from '../../context/NoteContext';
import styles from './Notes.css';

// search bar up top and submit button
// some number of recent notes load initially (useEffect gets most recent notes by default)
// state or context called SearchResults

// IF SEARCHING WHILE IN EDIT MODE:
// warn about unsaved changes

export default function Notes({ children }) {
  const { notes, setNotes } = useNotes();
  const { user } = useUser();

  return user.id ? (
    <section className={styles.container}>
      <Search setNotes={setNotes} userId={user.id} />
      {children}
      {/* is there a note in context or state? if not render a list view */}

      {/* have a prop isEditing, if editing grab the note contents and load them into the inputs */}
      {/* <EditNote /> */}
      {/* <ViewNote /> */}
    </section>
  ) : (
    <></>
  );
}

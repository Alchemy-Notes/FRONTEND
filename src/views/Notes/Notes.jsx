import EditNote from '../../components/Notes/EditNote/EditNote';
import Search from '../../components/Search/Search';
import ViewNote from '../../components/Notes/ViewNote/ViewNote';
import { useState, useEffect } from 'react';
import { useUser } from '../../context/UserContext';

// search bar up top and submit button
// some number of recent notes load initially (useEffect gets most recent notes by default)
// state or context called SearchResults

// IF SEARCHING WHILE IN EDIT MODE:
// warn about unsaved changes

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [userId, setUserId] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    if (user.id) {
      localStorage.setItem('NOTED_USER_ID', user.id);
      setUserId(user.id);
    } else {
      setUserId(localStorage.getItem('NOTED_USER_ID'));
    }
  }, [userId]);

  return userId ? (
    <section>
      <Search setNotes={setNotes} userId={userId} />
      {/* is there a note in context or state? if not render a list view */}

      {/* have a prop isEditing, if editing grab the note contents and load them into the inputs */}
      {/* <EditNote /> */}
      <ViewNote />
    </section>
  ) : (
    <></>
  );
}

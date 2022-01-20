import styles from './EditNote.css';
import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import AddTags from '../AddTags/AddTags';
import { useUser } from '../../../context/UserContext';
import { addNote, updateNote } from '../../../services/notes';
import Button from '../../Button/Button';

export default function EditNote({ isEditing = false }) {
  const history = useHistory();
  const { noteId } = useParams();
  const { notes, setNotes, user } = useUser();
  const { title, body, prevTags } = notes.filter((note) => note.id === noteId);
  const noteData = isEditing ? { title, body } : { title: '', body: '' };
  const [formState, setFormState] = useState(noteData);
  const [tags, setTags] = useState(prevTags || []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    if (isEditing) {
      response = await updateNote(
        { ...formState, tags, userId: user.id },
        noteId
      );
    } else {
      response = await addNote({ ...formState, tags, userId: user.id });
    }
    setNotes((prevState) => [...prevState, response]);
    history.replace(`/notes/${response.id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleTagChange = (e) => {
    setTags((prevState) => [...prevState, e.target.value]);
  };

  return (
    <>
      <h1>Edit a note here</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          id="title"
          name="title"
          type="text"
          value={formState.title}
          onChange={handleChange}
        />
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          name="body"
          rows={6}
          cols={80}
          value={formState.body}
          onChange={handleChange}
        />
        {/* probably need tags to be it's own form */}

        <Button buttonText="Submit" />
      </form>
      <AddTags />
    </>
  );
}

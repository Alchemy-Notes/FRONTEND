import styles from './EditNote.css';
import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import AddTags from '../AddTags/AddTags';
import { useUser } from '../../../context/UserContext';
import { addNote, updateNote } from '../../../services/notes';
import Button from '../../Button/Button';
import { getResults } from '../../../utils/searchTree/searchTree';
import MarkdownGuide from './MarkdownGuide';

export default function EditNote({ isEditing = false }) {
  const history = useHistory();
  const { noteId } = useParams();
  const { notes, setNotes, user, tree, setTree } = useUser();
  const currentNote = notes.filter((note) => note.id === noteId)[0];
  const noteData = isEditing
    ? {
        title: currentNote.title,
        body: currentNote.body,
        favorite: currentNote.favorite,
      }
    : { title: '', body: '', favorite: false };
  const [formState, setFormState] = useState(noteData);
  const [tags, setTags] = useState(isEditing ? currentNote.tags : []);
  const [toggle, setToggle] = useState(toggleGuide);

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
    let newTree = tree;
    tags.forEach((tag) => {
      if (getResults(newTree, tag)[0] !== tag) newTree.insertWord(tag);
    });
    setTree(newTree);
    setNotes((prevState) => [
      ...prevState.filter((note) => note.id !== noteId),
      response,
    ]);
    history.replace(`/notes/${response.id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const toggleGuide = () => {
    setToggle(!toggle);
  };

  const handleFavorite = () => {
    setFormState((prevState) => ({
      ...prevState,
      favorite: !prevState.favorite,
    }));
  };

  return (
    <div className={styles.markdownGuideWrapper}>
      <MarkdownGuide toggle={toggle} />
      <div className={styles.editNoteWrapper}>
        {isEditing ? <h1>Edit Your Note</h1> : <h1>Add New Note</h1>}
        <form className={styles.form} onSubmit={handleSubmit}>
          <section className={styles.input}>
            <label htmlFor="title">Title: </label>
            <input
              id="title"
              name="title"
              type="text"
              value={formState.title}
              onChange={handleChange}
            />
          </section>

          <section className={styles.input}>
            <label htmlFor="body">Body:</label>
            <textarea
              id="body"
              name="body"
              rows={10}
              cols={80}
              value={formState.body}
              onChange={handleChange}
            />
          </section>

          <section className={styles.input}>
            <label htmlFor="favorite">Favorite?</label>
            <input
              type="checkbox"
              id="favorite"
              name="favorite"
              checked={formState.favorite}
              onChange={handleFavorite}
            />
          </section>

          <Button type={'submit'} buttonText="Submit" />
        </form>
        <AddTags tags={tags} setTags={setTags} />
        <Button buttonText="View Markdown Guide" handleClick={toggleGuide} />
      </div>
    </div>
  );
}

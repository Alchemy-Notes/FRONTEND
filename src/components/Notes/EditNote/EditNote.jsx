import styles from './EditNote.css';
import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import AddTags from '../AddTags/AddTags';
import { useUser } from '../../../context/UserContext';
import { addNote, updateNote } from '../../../services/notes';
import Button from '../../Button/Button';
import { getResults } from '../../../utils/searchTree/searchTree';

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
      <div
        className={
          toggle ? styles.markdownGuideOpen : styles.markdownGuideClosed
        }
      >
        <h3>Markdown Guide</h3>
        <table className={styles.markdownTab}>
          <thead>
            <tr>
              <th>Element</th>
              <th>Syntax</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>H1</td>
              <td># Text</td>
            </tr>
            <tr>
              <td>H2</td>
              <td>## Text</td>
            </tr>
            <tr>
              <td>H6</td>
              <td>###### Text</td>
            </tr>
            <tr>
              <td>Italic</td>
              <td>*Text*</td>
            </tr>
            <tr>
              <td>Bold</td>
              <td>**Text**</td>
            </tr>
            <tr>
              <td>Strikethrough</td>
              <td>~~Text~~</td>
            </tr>
            <tr>
              <td>Subscript</td>
              <td>Text~sub</td>
            </tr>
            <tr>
              <td>Superscript</td>
              <td>Text^super</td>
            </tr>
            <tr>
              <td>Blockquote</td>
              <td>&gt; Text</td>
            </tr>
            <tr>
              <td>Unordered List</td>
              <td>
                - Item 1 <p />- Item 2
              </td>
            </tr>
            <tr>
              <td>Ordered List</td>
              <td>
                1. Item 1 <p />
                2. Item 2
              </td>
            </tr>
            <tr>
              <td>Code</td>
              <td>`Text`</td>
            </tr>
            <tr>
              <td>Horizontal Rule</td>
              <td>---</td>
            </tr>
            <tr>
              <td>Link</td>
              <td>[text](www.text.com)</td>
            </tr>
            <tr>
              <td>Image</td>
              <td>![alt text](image.png)</td>
            </tr>
            <tr>
              <td>Table</td>
              <td>
                | Text | Text | <p />
                |--|--| <p />
                | Other | Text | <p />
                |More | Text |
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
              onClick={handleFavorite}
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

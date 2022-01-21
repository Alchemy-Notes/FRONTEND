import styles from './EditNote.css';
import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import AddTags from '../AddTags/AddTags';
import { useUser } from '../../../context/UserContext';
import { addNote, updateNote } from '../../../services/notes';
import Button from '../../Button/Button';
import { useTheme } from '../../../context/ThemeContext';

export default function EditNote({ isEditing = false }) {
  const history = useHistory();
  const { noteId } = useParams();
  const { notes, setNotes, user } = useUser();
  const { title, body, prevTags } = notes.filter((note) => note.id === noteId);
  const noteData = isEditing ? { title, body } : { title: '', body: '' };
  const [formState, setFormState] = useState(noteData);
  const [tags, setTags] = useState(prevTags || []);
  const { theme, setTheme } = useTheme();
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
    setNotes((prevState) => [...prevState, response]);
    history.replace(`/notes/${response.id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const toggleGuide = () => {
    setToggle(!toggle);
  };

  const handleTagChange = (e) => {
    setTags((prevState) => [...prevState, e.target.value]);
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
          <tr>
            <th>Element</th>
            <th>Syntax</th>
          </tr>
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
        </table>
      </div>
      <div className={styles.editNoteWrapper}>
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
        <Button buttonText="View Markdown Guide" handleClick={toggleGuide} />
      </div>
    </div>
  );
}

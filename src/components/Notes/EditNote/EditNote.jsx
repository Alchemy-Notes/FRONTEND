import styles from './EditNote.css';
import { useState } from 'react';

export default function EditNote({ title = '', body = '' }) {
  const [formState, setFormState] = useState({ title, body });
  const [tags, setTags] = useState([]);
  // handleSubmit goes here
  const handleSubmit = async (e) => {
    e.preventDefault();
    //pass in onSubmit from the note view component
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
        <label htmlFor="tags">Tags</label>
        <input
          id="tags"
          name="tags"
          type="text"
          // value={}
          // onChange={handleTagChange}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

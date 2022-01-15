import React, { useState } from 'react';

function AddTags() {
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setTags([...tags, tag]);
  };

  return (
    <section>
      <div>{tags}</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tags">Tags</label>
        <input
          id="tags"
          value={tag}
          onChange={(e) => {
            setTag(e.target.value);
          }}
        />
        <button type="submit">Add Tag</button>
      </form>
    </section>
  );
}

export default AddTags;

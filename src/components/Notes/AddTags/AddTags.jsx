import React, { useState } from 'react';

function AddTags() {
  const [tags, setTags] = useState([{ text: '' }]);
  const [tag, setTag] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setTags([...tags, { text: tag }]);
    setTag('');
  };

  return (
    <section>
      {/* make a card for each tag with an x to delete a tag from a note */}
      <div>{tags.map((tag) => tag.text + ' ')}</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tags">Tags </label>
        <input
          id="tags"
          value={tag}
          type="textbox"
          onChange={(e) => {
            setTag(e.target.value);
          }}
        />
        <button aria-label="tag-submit" type="submit">
          Add Tag
        </button>
      </form>
    </section>
  );
}

export default AddTags;

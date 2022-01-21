import React, { useState } from 'react';
import Button from '../../Button/Button';
import ViewTags from '../ViewTags/ViewTags';

function AddTags({ tags, setTags }) {
  const [tag, setTag] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setTags((prevState) => [...prevState, tag]);
    setTag('');
  };

  return (
    <section>
      <ViewTags tags={tags} />
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
        <Button type={'submit'} buttonText="Add Tag" />
      </form>
    </section>
  );
}

export default AddTags;

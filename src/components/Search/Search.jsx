// search will access SearchResults context

import { useState } from 'react';

export default function Search() {
  const [input, setInput] = useState('');
  const [tags, setTags] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <h1>Search component</h1>
      <label htmlFor="search">Search For Notes by Tags</label>
      <input
        id="search"
        name="search"
        type="text"
        value={input}
        onChange={handleChange}
      />
      <button>Add to Query</button>
      <span>{/* search queries go in here */}</span>
      {/* hover icon that shows instructions */}
    </>
  );

  // input field
  // when you type in the input field, it updates the search state
  // have a card with autocomplete results (tab or click to go with result)
}

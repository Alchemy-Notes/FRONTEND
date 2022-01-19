import { useState, useEffect } from 'react';
import { makeTree, getResults } from '../../utils/searchTree/searchTree';
import { getUserTags, getUserNotes } from '../../services/notes';
import { Redirect } from 'react-router-dom';
import styles from '../../App.css';


function Search({ setNotes, userId }) {
  const [input, setInput] = useState('');
  const [tree, setTree] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [selected, setSelected] = useState(0);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function getTags() {
      const res = await getUserTags(userId);
      const searchTree = makeTree(res.tags);
      setTree(searchTree);
    }
    getTags();
  }, []);

  async function handleSetNotes() {
    const notes = await getUserNotes({
      userId,
      query: {
        tags,
      },
    });
    setNotes(notes);
  }

  function handleChange(e) {
    setInput(e.target.value);
    setSuggestions(getResults(tree, e.target.value));
    setSelected(0);
  }

  function onKeyDown(e) {
    if (e.keyCode === 13) {
      // this is the Enter key
      if (!tags.includes(suggestions[selected])) {
        setTags((prev) => [...prev, suggestions[selected]]);
      }
      setInput('');
      setSuggestions([]);
      setSelected[0];
    }
    if (e.keyCode === 38) {
      // up arrow key
      if (selected !== 0) setSelected((prev) => prev - 1);
    }
    if (e.keyCode === 40) {
      // down arrow key
      if (selected !== suggestions.length - 1) setSelected((prev) => prev + 1);
    }
  }

  return tree ? (
    <div className={styles.lightContainer}>
      <input
        onKeyDown={(e) => onKeyDown(e)}
        autoComplete="off"
        type="text"
        id="input"
        name="input"
        value={input}
        onChange={(e) => handleChange(e)}
      />{' '}
      <span
        className={styles.lightHoverText}
        word-hover="This text should only show up on hover"
      >
        (i){' '}
      </span>
      {suggestions ? (
        <ul>
          {suggestions.map((word, i) => (
            <li
              key={word}
              style={selected === i ? { backgroundColor: 'lightgray' } : {}}
            >
              {word}
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
      <button onClick={handleSetNotes}>GO</button>
      <ul>
        {tags.map((tag) => {
          return <li key={tag}>{tag}</li>;
        })}
      </ul>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default Search;

import { useState, useEffect } from 'react';
import { makeTree, getResults } from '../../utils/searchTree/searchTree';
import { getUserTags, getUserNotes } from '../../services/notes';
import styles from '../../App.css';
import searchStyles from './Search.css';
import Button from '../Button/Button';
import { useHistory } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useUser } from '../../context/UserContext';
import ViewTags from '../Notes/ViewTags/ViewTags';

function Search({ setNotes, userId }) {
  const history = useHistory();
  const { tree, setTree } = useUser();
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selected, setSelected] = useState(0);
  const [tags, setTags] = useState([]);
  const { theme, setTheme } = useTheme();

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
        type: 'tags',
        tags,
      },
    });
    history.push('/notes');
    setNotes(notes);
    setTags([]);
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
      <section className={searchStyles.container}>
        <label htmlFor="input">Search </label>{' '}
        <input
          onKeyDown={(e) => onKeyDown(e)}
          autoComplete="off"
          type="text"
          id="input"
          name="input"
          value={input}
          onChange={(e) => handleChange(e)}
          className={searchStyles.searchBar}
        />{' '}
        <span
          className={theme ? styles.darkHoverText : styles.lightHoverText}
          word-hover="Search your notes by tags. Enter to add a tag. Go to search."
        >
          (i)
        </span>
        <Button buttonText={'Go'} handleClick={handleSetNotes} />
      </section>
      {suggestions ? (
        <ul className={styles.suggestions}>
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
      <ViewTags tags={tags} />
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default Search;

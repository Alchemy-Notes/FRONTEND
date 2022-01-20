import { Link } from 'react-router-dom';
import { useTheme } from '../../../context/ThemeContext';
import { useUser } from '../../../context/UserContext';
import styles from './NoteList.css';

export default function NoteList() {
  const { notes } = useUser();
  const { theme, setTheme } = useTheme();

  return (
    <ul className={styles.noteList}>
      {notes.map((note) => (
        <li
          key={note.id}
          className={theme ? styles.noteListDark : styles.noteListLight}
        >
          <Link
            to={`/notes/${note.id}`}
            className={
              theme ? styles.noteListLinkDark : styles.noteListLinkLight
            }
          >
            {note.title}
            <p />
            {note.body}
          </Link>
        </li>
      ))}
    </ul>
  );
}

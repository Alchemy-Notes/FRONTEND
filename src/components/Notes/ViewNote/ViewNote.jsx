import { useParams } from 'react-router-dom';
import { useUser } from '../../../context/UserContext';
import ViewTags from '../ViewTags/ViewTags';
import Markdown from './Markdown';
import styles from '../../../App.css';
import { useTheme } from '../../../context/ThemeContext';

export default function ViewNote() {
  const { notes } = useUser();
  const { noteId } = useParams();
  const { theme, setTheme } = useTheme();
  const { title, id, body, tags, dateModified } = notes.filter(
    (note) => note.id === noteId
  )[0];
  // useEffect to get the note from backend
  // destructure note
  return (
    <section className={theme ? styles.darkReadNotes : styles.lightReadNotes}>
      <h2>{title}</h2>
      {dateModified && <p>{Date(dateModified)}</p>}
      <div
        className={theme ? styles.darkReadNotesBody : styles.lightReadNotesBody}
      >
        <Markdown body={body} />
      </div>
      <ViewTags tags={tags} />
    </section>
  );
  // predefined sizes, title in top right corner with date modified
  // body will take up most of the screen
}

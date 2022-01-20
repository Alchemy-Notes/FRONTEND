import { useParams } from 'react-router-dom';
import { useUser } from '../../../context/UserContext';
import ViewTags from '../ViewTags/ViewTags';
import Markdown from './Markdown';
import Button from '../../Button/Button';
import { useHistory } from 'react-router-dom';
import styles from '../../../App.css';
import { useTheme } from '../../../context/ThemeContext';

export default function ViewNote() {
  const history = useHistory();
  const { notes } = useUser();
  const { noteId } = useParams();
  const { theme, setTheme } = useTheme();
  const { title, id, body, tags, dateModified } = notes.filter(
    (note) => note.id === noteId
  )[0];

  const handleClick = () => {
    history.push(`/notes/edit/${noteId}`);
  };

  return (
    <section className={theme ? styles.darkReadNotes : styles.lightReadNotes}>
      <Button handleClick={handleClick} buttonText={'Edit Note'} />
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
}

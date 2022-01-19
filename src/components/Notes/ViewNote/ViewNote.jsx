import { useParams } from 'react-router-dom';
import { useNotes } from '../../../context/NoteContext';
import ViewTags from '../ViewTags/ViewTags';
import Markdown from './Markdown';

export default function ViewNote() {
  const { notes } = useNotes();
  console.log(notes);
  const { noteId } = useParams();
  const { title, id, body, tags, dateModified } = notes.filter(
    (note) => note.id === noteId
  )[0];
  // useEffect to get the note from backend
  // destructure note
  return (
    <section>
      <h2>{title}</h2>
      {dateModified && <p>{Date(dateModified)}</p>}
      <Markdown body={body} />
      <ViewTags tags={tags} />
    </section>
  );
  // predefined sizes, title in top right corner with date modified
  // body will take up most of the screen
}

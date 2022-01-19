import { Link } from 'react-router-dom';
import { useNotes } from '../../../context/NoteContext';

export default function NoteList() {
  const { notes } = useNotes();
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id} style={{ border: 'solid', borderColor: 'black' }}>
          <Link to={`/notes/${note.id}`}>{note.title}</Link>
        </li>
      ))}
    </ul>
  );
}

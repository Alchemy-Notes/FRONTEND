import { Link } from 'react-router-dom';
import { useUser } from '../../../context/UserContext';

export default function NoteList() {
  const { notes } = useUser();
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

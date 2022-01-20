import { Link } from 'react-router-dom';
<<<<<<< HEAD

export default function NoteList({ notes }) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
=======
import { useUser } from '../../../context/UserContext';

export default function NoteList() {
  const { notes } = useUser();
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id} style={{ border: 'solid', borderColor: 'black' }}>
>>>>>>> 78b6f2d8551f6251b5e5cc4d6327ce0cd826009e
          <Link to={`/notes/${note.id}`}>{note.title}</Link>
        </li>
      ))}
    </ul>
  );
}

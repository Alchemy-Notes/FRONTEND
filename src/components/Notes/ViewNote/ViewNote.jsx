import { useParams } from 'react-router-dom';
import { useUser } from '../../../context/UserContext';
import ViewTags from '../ViewTags/ViewTags';
import Markdown from './Markdown';
import Button from '../../Button/Button';
import { useHistory } from 'react-router-dom';

export default function ViewNote() {
  const history = useHistory();
  const { notes } = useUser();
  const { noteId } = useParams();
  const { title, id, body, tags, dateModified } = notes.filter(
    (note) => note.id === noteId
  )[0];

  const handleClick = () => {
    history.push(`/notes/edit/${noteId}`);
  };

  return (
    <section>
      <Button handleClick={handleClick} buttonText={'Edit Note'} />
      <h2>{title}</h2>
      {dateModified && <p>{Date(dateModified)}</p>}
      <Markdown body={body} />
      <ViewTags tags={tags} />
    </section>
  );
}

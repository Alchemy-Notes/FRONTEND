import Search from '../../components/Search/Search';
import { useUser } from '../../context/UserContext';
import styles from './Notes.css';

export default function Notes({ children }) {
  const { user, setNotes } = useUser();

  return user.id ? (
    <section className={styles.container}>
      <Search setNotes={setNotes} userId={user.id} />
      {children}
    </section>
  ) : (
    <></>
  );
}

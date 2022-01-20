import { useTheme } from '../../../context/ThemeContext';
import styles from './ViewTags.css';

export default function ViewTags({ tags }) {
  const { theme, setTheme } = useTheme();

  return (
    <ul>
      {tags.map((tag) => (
        <li key={tag} className={theme ? styles.tagsDark : styles.tagsLight}>
          {tag}
        </li>
      ))}
    </ul>
  );
}

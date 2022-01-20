import { useUser } from '../../context/UserContext';
import { loginWithGitHub } from '../../services/auth';
import Button from '../Button/Button';

export default function GithubLogin({ className, label, setError }) {
  const { setUser } = useUser();

  const handleClick = async () => {
    try {
      loginWithGitHub();
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className={className}>
      <Button handleClick={handleClick} buttonText={label} />
    </div>
  );
}

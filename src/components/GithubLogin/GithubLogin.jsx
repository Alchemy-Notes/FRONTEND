import { useUser } from '../../context/UserContext';
import { loginWithGitHub } from '../../services/auth';
import LandingButton from '../Button/LandingButton';

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
      <LandingButton handleClick={handleClick} buttonText={label} />
    </div>
  );
}

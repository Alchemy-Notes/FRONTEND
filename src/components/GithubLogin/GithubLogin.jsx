import { useUser } from '../../context/UserContext';
import { loginWithGitHub } from '../../services/auth';
import Button from '../Button/Button';

export default function GithubLogin({ className, label }) {
  const { setUser } = useUser();
  const handleClick = async () => {
    try {
      const user = await loginWithGitHub();
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={className}>
      <Button handleClick={handleClick} buttonText={label} />
    </div>
  );
}

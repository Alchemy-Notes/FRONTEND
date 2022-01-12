import { useUser } from '../../context/UserContext';
import { loginWithGitHub } from '../../services/auth';

export default function GithubLogin({ label }) {
  const { setUser } = useUser();
  const handleClick = async () => {
    try {
      const user = await loginWithGitHub();
      setUser(user);
    } catch (error) {}
  };

  return (
    <>
      <button onClick={handleClick}>{label}</button>
    </>
  );
}

import { useUser } from '../../context/UserContext';
import { loginWithGitHub } from '../../services/auth';

export default function GithubLogin({ label }) {
  const { setUser } = useUser();
  // user clicks button
  // button calls login to github function
  // will redirect user to login to github
  // will bring them back to the app once logged in
  // will set the user in context
  const handleClick = async () => {
    // call login to github function save to variable
    const user = await loginWithGitHub();
    // set the user in context with returned variable
    setUser(user);
    // redirect???
  };

  return (
    <>
      <button onClick={handleClick}>{label}</button>
    </>
  );
}

import { Link } from 'react-router-dom';

export default function Hamburger() {
  return (
    <>
      {/* className={styles.hamburger} */}
      <header>
        <Link to="/">Home</Link>
        <Link to="/login"></Link>
        <Link to="/about">About Us</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/register">Log Out</Link>
        {/* -- this can redirect to /register and log someone out  */}
      </header>
    </>
  );
}

import linkdinbtn from '../../../public/assets/linkdinbtn.jpeg';
import GitHub_Logo from '../../../public/assets/GitHub_Logo.png';
import AliceTwitterButtonLong from '../../../public/assets/AliceTwitterButtonLong.jpeg';

export default function AboutUs() {
  return (
    // className={styles.aboutus}
    <>
      <section className="bio">
        <h4>Triana Cerda</h4>
        <div>
          {/* className={styles.linkdin} */}
          <a href="http://www.linkedin.com/in/triana-cerda/">
            <img src={linkdinbtn} alt="Visit my LinkedIn Profile" />
          </a>

          {/* className={styles.github-button} */}
          <a
            href="https://github.com/trianacerda"
            data-color-scheme="no-preference: dark; light: dark; dark: dark;"
            aria-label="Follow @trianacerda on GitHub"
          >
            <img src={GitHub_Logo} alt="github" />
          </a>
        </div>
      </section>

      <section className="bio">
        <h4>Pete Hamrick</h4>
        <div>
          {/* className={styles.linkdin} */}
          <a href="https://www.linkedin.com/in/petehamrick/">
            <img src={linkdinbtn} alt="Visit my LinkedIn Profile" />
          </a>

          {/* className={styles.github-button} */}
          <a
            href="https://github.com/pete-hamrick"
            data-color-scheme="no-preference: dark; light: dark; dark: dark;"
            aria-label="Follow @trianacerda on GitHub"
          >
            <img src={GitHub_Logo} alt="github" />
          </a>
        </div>
      </section>

      <section className="bio">
        <h4>Alice Retz</h4>
        <div>
          <a className="linkdin" href="http://www.linkedin.com/in/aliceretz/">
            <img src={linkdinbtn} alt="Visit my LinkedIn Profile" />
          </a>

          <a
            className="github-button"
            href="https://github.com/Alice-Retz"
            data-color-scheme="no-preference: dark; light: dark; dark: dark;"
            aria-label="Follow @Alice Retz(she/they) on GitHub"
          >
            <img src={GitHub_Logo} alt="github" />
          </a>

          <a className="twitter-button" href="https://twitter.com/AliceRetz">
            <img src={AliceTwitterButtonLong} alt="twitter" />
          </a>
        </div>
      </section>

      <section className="bio">
        <h4>Peaul Brubaker</h4>
        <div>
          {/* className={styles.linkdin} */}
          <a href="https://www.linkedin.com/in/paul-brubaker-a94597176/">
            <img src={linkdinbtn} alt="Visit my LinkedIn Profile" />
          </a>

          {/* className={styles.github-button} */}
          <a
            href="https://github.com/p-brubaker"
            data-color-scheme="no-preference: dark; light: dark; dark: dark;"
            aria-label="Follow @trianacerda on GitHub"
          >
            <img src={GitHub_Logo} alt="github" />
          </a>
        </div>
      </section>
    </>
  );
}

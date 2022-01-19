import linkdinbtn from '../../../public/assets/linkdinbtn.jpeg';
import GitHub_Logo from '../../../public/assets/GitHub_Logo.png';
import AliceTwitterButtonLong from '../../../public/assets/AliceTwitterButtonLong.jpeg';
import styles from '../../App.css';
import { useTheme } from '../../context/ThemeContext';

export default function AboutUs() {
  const { theme, setTheme } = useTheme();

  return (
    // className={styles.aboutus}
    <div div className={styles.wrapper}>
      <h1>Dev Notes</h1>
      <div className={styles.aboutComp}>
        <section className={theme ? styles.darkAbout : styles.lightAbout}>
          <h2>triana(Cerda)</h2>
          <div
            className={theme ? styles.darkAboutLinks : styles.lightAboutLinks}
          >
            contact(Me) =&#x3E; &#x7B;
            <p style={{ marginLeft: '20px' }}>
              <a href="http://www.linkedin.com/in/triana-cerda/">
                <img src={linkdinbtn} alt="Visit my LinkedIn Profile" />
              </a>
              ;
            </p>
            <p style={{ marginLeft: '20px' }}>
              <a
                href="https://github.com/trianacerda"
                data-color-scheme="no-preference: dark; light: dark; dark: dark;"
                aria-label="Follow @trianacerda on GitHub"
              >
                <img
                  src={GitHub_Logo}
                  alt="github"
                  className={
                    theme ? styles.darkGithubLogoImg : styles.lightGithubLogoImg
                  }
                />
              </a>
              ;
            </p>
            &#x7D;
          </div>
        </section>

        <section className={theme ? styles.darkAbout : styles.lightAbout}>
          <h2>Pete.Hamrick</h2>
          <div
            className={theme ? styles.darkAboutLinks : styles.lightAboutLinks}
          >
            &#x3C;h1&#x3E; Contact Me &#x3C;/h1&#x3E;
            <br />
            &#x3C;div&#x3E;
            <p style={{ marginLeft: '20px' }}>
              <a href="https://www.linkedin.com/in/petehamrick/">
                <img src={linkdinbtn} alt="Visit my LinkedIn Profile" />
              </a>
            </p>
            <p style={{ marginLeft: '20px' }}>&#x3C;p /&#x3E;</p>
            <p style={{ marginLeft: '20px' }}>
              <a
                href="https://github.com/pete-hamrick"
                data-color-scheme="no-preference: dark; light: dark; dark: dark;"
                aria-label="Follow @pete-hamrick on GitHub"
              >
                <img
                  src={GitHub_Logo}
                  alt="github"
                  className={
                    theme ? styles.darkGithubLogoImg : styles.lightGithubLogoImg
                  }
                />
              </a>
            </p>
            <br />
            &#x3C;/div&#x3E;
          </div>
        </section>
      </div>

      <div className={styles.aboutComp}>
        <section className={theme ? styles.darkAbout : styles.lightAbout}>
          <h2>Alice:Retz</h2>
          <div
            className={theme ? styles.darkAboutLinks : styles.lightAboutLinks}
          >
            .contactMe &#x7B;
            <p style={{ marginLeft: '20px' }}>
              <a
                className="linkdin"
                href="http://www.linkedin.com/in/aliceretz/"
              >
                <img src={linkdinbtn} alt="Visit my LinkedIn Profile" />
              </a>
            </p>
            <p style={{ marginLeft: '20px' }}>
              <a
                className="github-button"
                href="https://github.com/Alice-Retz"
                data-color-scheme="no-preference: dark; light: dark; dark: dark;"
                aria-label="Follow @Alice-Retz on GitHub"
              >
                <img
                  src={GitHub_Logo}
                  alt="github"
                  className={
                    theme ? styles.darkGithubLogoImg : styles.lightGithubLogoImg
                  }
                />
              </a>
            </p>
            <p style={{ marginLeft: '20px' }}>
              <a
                className="twitter-button"
                href="https://twitter.com/AliceRetz"
              >
                <img src={AliceTwitterButtonLong} alt="twitter" />
              </a>
            </p>
            <br /> &#x7D;
          </div>
        </section>

        <section className={theme ? styles.darkAbout : styles.lightAbout}>
          <h2>**Paul Brubaker**</h2>
          <div
            className={theme ? styles.darkAboutLinks : styles.lightAboutLinks}
          >
            <br />
            try &#x7B;
            <p style={{ marginLeft: '20px' }}>if (contactMe) &#x7B;</p>
            <p style={{ marginLeft: '40px' }}>
              <a
                className="linkdin"
                href="https://www.linkedin.com/in/paul-brubaker-a94597176/"
              >
                <img src={linkdinbtn} alt="Visit my LinkedIn Profile" />
              </a>
            </p>
            <p style={{ marginLeft: '20px' }}>&#x7D; else &#x7B;</p>
            <p style={{ marginLeft: '40px' }}>
              <a
                className="github-button"
                href="https://github.com/p-brubaker"
                data-color-scheme="no-preference: dark; light: dark; dark: dark;"
                aria-label="Follow @p-brubaker on GitHub"
              >
                <img
                  src={GitHub_Logo}
                  alt="github"
                  className={
                    theme ? styles.darkGithubLogoImg : styles.lightGithubLogoImg
                  }
                />
              </a>
            </p>
            <p style={{ marginLeft: '20px' }}>&#x7D;</p>
            <p>&#x7D;</p>
          </div>
        </section>
      </div>
    </div>
  );
}

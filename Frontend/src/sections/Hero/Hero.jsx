import styles from './HeroStyles.module.css';
import profileImg from '../../assets/hero-img.png';
import newProfile from '../../assets/newProfile.jpeg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import resume from '../../assets/resume1.pdf';
import {useTheme} from '../../common/ThemeContext';
const Hero = () => {
  const {theme,toggleTheme}=useTheme();

  const themeIcon = theme === 'light'?sun:moon;
  const twitterIcon = theme === 'light'?twitterLight:twitterDark;
  const githubIcon = theme === 'light'?githubLight:githubDark;
  const linkedinIcon = theme === 'light'?linkedinLight:linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.profile} src={newProfile} alt="Portfolio picture of Ganesh Maddu"/>
        <img className={styles.colorMode} src={themeIcon} alt="color changing icon" onClick={toggleTheme}/>
      </div>
      <div className={styles.info}>
        <h1>
         Ganesh
         <br/>
         Maddu
        </h1>
         
         <h2>Fronted Developer</h2>
         <span>
          <a href="https://x.com/GaneshG50550815/" target="_blank">
            <img className={styles.twitterLogo} src={twitterIcon} alt="twitter-logo"/>
          </a>
          <a href="https://github.com/" target="_blank">
            <img className={styles.githubLogo} src={githubIcon} alt="github-logo"/>
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <img className={styles.linkedinLogo} src={linkedinIcon} alt="Linkedin-logo"/>
          </a>
         </span>

         <p className={styles.desc}>
          with a passion for developing modern React web apps
          with seamless connectivity.
         </p>
         <a href={resume} download>
           <button className="hover">Resume</button>
         </a>
      </div>
    </section>
  );
}

export default Hero;

import styles from './ProjectsStyles.module.css';
import puzzleImg from '../../assets/puzzle.jpg';
import millionaireImg from '../../assets/quiz.jpg';
import blogImg from '../../assets/blog.jpg';
import calImg from '../../assets/calImg.png';
const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
        <a href="https://github.com/ganeshrigidorigin9/HTMl_CSS_FRONTED">
         <img className={styles.hover}src={puzzleImg} alt="PuzzleImg"/>
         <h3>GuessTheWord</h3>
         <p>word guessing designed 
          <br/>
          using html,css&js
         </p>
        </a>

        <a href="https://github.com/ganeshrigidorigin9/ReactFrontedEnd_Projects">
         <img className={styles.hover}src={millionaireImg } alt="millionaireImg"/>
         <h3>Millionaire</h3>
         <p>guessing correct answer and
          <br/>
           win cash built using react</p>
        </a>

        <a href="">
         <img className={styles.hover}src={blogImg} alt="BlogImg"/>
         <h3>Blog</h3>
         <p>Blog about posts</p>
        </a>

        <a href="https://github.com/ganeshrigidorigin9/Python_Project">
         <img className={styles.hover}src={calImg} alt="CalImg"/>
         <h3>Calculator</h3>
         <p>Calcultor using python<br/> 
          with simple Interface
         </p>
        </a>
        </div>
    </section>
  )
}

export default Projects
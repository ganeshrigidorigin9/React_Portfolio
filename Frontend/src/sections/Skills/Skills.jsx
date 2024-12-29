import styles from './SkillsStyles.module.css'
import checkMarkLight from '../../assets/checkmark-light.svg';
import checkMarkDark from '../../assets/checkmark-dark.svg'
import {useTheme} from '../../common/ThemeContext'
import SkillList from '../../common/SkillList';

const Skills = () => {
  const {theme,toggleTheme}=useTheme();
  const checkMarkIcon =theme === 'light'?checkMarkLight:checkMarkDark;
   
  return (
   <section id="skills" className={styles.container}>
   <h1 className="sectionTitle">Skills</h1>
   <div className={styles.skillList}>
    <SkillList src={checkMarkIcon} skill="HTML"/>
    <SkillList src={checkMarkIcon} skill="CSS"/>
    <SkillList src={checkMarkIcon} skill="JavaScript"/>
    <SkillList src={checkMarkIcon} skill="React"/>
    <SkillList src={checkMarkIcon} skill="Node.js"/>
    <SkillList src={checkMarkIcon} skill="Express.js"/>
    </div>
    <hr/>
    <div className={styles.skillList}>
    <SkillList src={checkMarkIcon} skill="Java"/>
    <SkillList src={checkMarkIcon} skill="Python"/>
    <SkillList src={checkMarkIcon} skill="Mysql"/>
    <SkillList src={checkMarkIcon} skill="oops"/>
    <SkillList src={checkMarkIcon} skill="Data Structures"/>
    </div>
    <hr/>
    <div className={styles.skillList}>
    <SkillList  src={checkMarkIcon} skill="Telugu"/>
    <SkillList src={checkMarkIcon} skill="English"/>
    </div>
   </section>
  );
}

export default Skills;
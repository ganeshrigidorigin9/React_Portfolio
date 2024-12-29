const SkillList = ({src,skill}) => {
  return (
     <span>
       <img src={src} alt="checkmarkicon"/>
       <p>{skill}</p>
     </span>
  )
}

export default SkillList
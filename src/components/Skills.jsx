import SectionTitle from './SectionTitle';
import SkillsCard from './SkillCard';
import {skills} from '../data'

const Skills = () => {
   return (
      <section id='skills' className='max-w-7xl mx-auto px-8'>
         <SectionTitle text="tech stack"/>
         <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {skills.map((skill) => {
               const {id, title, text, icon} = skill
               return <SkillsCard key={id} title={title} text={text} icon={icon}/>
            })}
         </div>
      </section>
   )
}

export default Skills;
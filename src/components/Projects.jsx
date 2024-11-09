import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import { projects } from "../data";


const Projects = () => {
   return (
      <section className="align-element" id='projects'>
         <SectionTitle text="web creation"/>
         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 my-20">
         {projects.map((project) => {
            return <ProjectCard key={project.id} {...project}/>
         })}
         </div>
         
      </section>
   )
}

export default Projects
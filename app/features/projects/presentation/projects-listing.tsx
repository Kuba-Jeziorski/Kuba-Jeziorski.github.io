import { projects } from "../data/projects";
import ProjectsItem from "./projects-item";

export default function ProjectsListing() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <ProjectsItem key={project.name} project={project} />
      ))}
    </div>
  );
}

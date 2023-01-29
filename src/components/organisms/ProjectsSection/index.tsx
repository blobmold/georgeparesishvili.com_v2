import ProjectsCard from "../../molecules/ProjectsCard"
import projectsData from "../../../data/projectsData"

const ProjectsSection = (): JSX.Element => {
    const title = projectsData.name;
    const projects = projectsData.data

    if (projects.length === 0) return <></>;

    return (<>
        <section className="gp-global_width space-y-8 mt-8">
            <h2 id="projects">
                <a href="#projects">
                    {title}
                </a>
            </h2>
            <ul className={"space-y-4"}>
                {
                    projects.map((project, i) => (
                        <li key={`project-${i}`}>
                            <ProjectsCard data={project} />
                        </li>
                    ))
                }
            </ul>
        </section>
    </>)
}

export default ProjectsSection
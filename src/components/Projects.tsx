import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
    return (
        <section id="projects">
            <h2>// PROJECTS_</h2>
            {projects.length > 0 ? (
                <div className={styles.projectGrid}>
                    {projects.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>
            ) : (
                <p>No projects to display yet. Stand by for new data...</p>
            )}
        </section>
    );
};

export default Projects;
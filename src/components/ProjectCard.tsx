import { Project } from '@/data/projects';
import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className={styles.projectCard}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className={styles.projectLinks}>
                {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live</a>}
                {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub</a>}
            </div>
        </div>
    );
};

export default ProjectCard;
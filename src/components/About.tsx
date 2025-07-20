/* eslint-disable react/jsx-no-comment-textnodes */
import styles from './About.module.css'

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <h2>// OPERATOR_INFO_</h2>
            <p>
                Full-stack developer with a passion for creating <span className={styles.highlight}>digital experiences</span>. 
                I specialize in modern web technologies and have a growing interest in game development through my upcoming company, PrimaMateria Games.
            </p>
            <p>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, 
                or working on creative side projects. Based somewhere sunny ☀️
            </p>
        </section>
    );
};

export default About;
/* eslint-disable react/jsx-no-comment-textnodes */
import styles from './Links.module.css'

const Links = () => {
    return (
        <section id="links">
            <h2>// COMMS_</h2>
            <div className={styles.socialLinks}>
                <a href="https://instagram.com/r.m3rcury" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://discord.com/users/202136049898487818" target="_blank" rel="noopener noreferrer">Discord</a>
                <a href="https://github.com/them3rcury" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </section>
    );
};

export default Links;
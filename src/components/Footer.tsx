import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} TheMercury.xyz /// All systems nominal.</p>
        </footer>
    );
};

export default Footer;
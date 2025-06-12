import Header from "@/components/Header";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Links from "@/components/Links";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />
        <About />
        <Projects />
        <Links />
        <Footer />
      </div>
    </main>
  );
}
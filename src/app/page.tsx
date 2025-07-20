import Header from "@/components/Header";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Links from "@/components/Links";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";
import ErrorBoundary from '@/components/ErrorBoundary';

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <ErrorBoundary>
        <main className={styles.main}>
          <div className={styles.container}>
            <Header />
            <FadeInSection>
              <About />
            </FadeInSection>
            <FadeInSection>
              <Projects />
            </FadeInSection>
            <FadeInSection>
              <Links />
            </FadeInSection>
            <Footer />
          </div>
        </main>
      </ErrorBoundary>
    </>
  );
}
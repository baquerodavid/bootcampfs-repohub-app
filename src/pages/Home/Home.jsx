import { useEffect, useState } from "react";
import RepoCard from "../../components/RepoCard/RepoCard";
import hero from "../../assets/project-break-3.png";
import styles from "./Home.module.css";

function Home() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  // const urlRepo = import.meta.env.VITE_APP_API_URL || 'http://localhost:3000/';
  const urlRepo = 'http://localhost:3000/';

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(urlRepo);

        if (!response.ok) {
          throw new Error('No se encuentra ningún repositorio');
        }

        const data = await response.json();
        setRepos(data);
        setLoading(false);
      } catch (error) {
        setRepos([]);
        setLoading(false);
        console.error(error);
      }
    };
    fetchRepos();
  }, []);

  return (
    <>
      <main>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>Mi evolución como desarrollador, en código</h1>
            <p>
              Una colección de proyectos y retos donde aplico lo aprendido en
              frontend, backend y bases de datos. Cada repositorio refleja un
              paso más en mi crecimiento
            </p>
          </div>
          <img src={hero} alt="Hero" className={styles.heroImg} />
        </section>
        <section className={styles.repoSection}>
          <h2>Listado de Repositorios</h2>
          <div className={styles.container}>
            {loading === true ? (
              <div className="warning">Cargando...</div>
            ) : (
              repos.map((repo) => <RepoCard key={repo._id} repo={repo} />)
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
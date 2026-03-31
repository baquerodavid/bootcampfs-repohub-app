import { useEffect, useState } from "react";
import { Link, useSearchParams } from 'react-router-dom';
import RepoCard from "../../components/RepoCard/RepoCard";
import hero from "../../assets/project-break-3.png";
import styles from "./Home.module.css";

function Home() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchRepo, setSearchRepo] = useState('');
  const urlRepo = import.meta.env.VITE_APP_API_URL || 'http://localhost:3000/bootcamp-repos';
  const urlQuery = '?type=';
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        let urlBase;

        if (!type) {
          urlBase = urlRepo;
        } else {
          urlBase = urlRepo + urlQuery + `${type}`;
        }

        const response = await fetch(urlBase);

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
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, [type, urlRepo]);

  const filteredRepos = repos.filter((repo) => {
    const { title, summary, description, tags, keyLearning, takeaways } = repo;
    const searchString = `${title.toLowerCase()} ${summary.toLowerCase()} ${description.toLowerCase()} ${tags.toString().toLowerCase()} ${keyLearning.toLowerCase()} ${takeaways.toString().toLowerCase()}}`;
    return searchString.includes(searchRepo.toLowerCase());
  })
  
  const handleChange = (e) => {
    setSearchRepo(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
        <section className={styles.searchBar}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={searchRepo}
              onChange={handleChange}
              placeholder="Busca repositorios del Bootcamp (ej. React, App, Node, API...)"
            />
          </form>
        </section>
        <div className="divider"></div>
        <section className={styles.repoSection}>
          <h2>Listado de Repositorios</h2>
          <div className={styles.anchorType}>
            <Link to="/" className={!type ? `${styles.active}` : ''}>
              Todos
            </Link>
            <Link
              to="/?type=project"
              className={type === 'project' ? `${styles.active}` : ''}
            >
              Proyecto
            </Link>
            <Link
              to="/?type=challenge"
              className={type === 'challenge' ? `${styles.active}` : ''}
            >
              Challenge
            </Link>
            <Link
              to="/?type=workout"
              className={type === 'workout' ? `${styles.active}` : ''}
            >
              Workout
            </Link>
            <Link
              to="/?type=extra-workout"
              className={type === 'extra-workout' ? `${styles.active}` : ''}
            >
              Extra-Workout
            </Link>
          </div>
          <div className={styles.container}>
            {loading === true ? (
              <div>
                <p className="warning">Cargando...</p>
                <p className="warning">
                  Ten paciencia 🙏 La primera vez son unos segundos hasta que se
                  ponga en marcha Render y su plan gratuito 😅.
                </p>
              </div>
            ) : filteredRepos.length > 0 ? (
              filteredRepos.map((repo) => (
                <RepoCard key={repo._id} repo={repo} />
              ))
            ) : (
              <div>
                <p className="warning">
                  Parece que no hay ningún repositorio con esa búsqueda.
                </p>
                <p className="warning">Prueba de nuevo con otro texto.</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
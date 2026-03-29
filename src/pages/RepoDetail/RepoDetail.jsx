import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import linkExt from "../../assets/linkExt_white.svg";
import styles from "./RepoDetail.module.css";

function RepoDetail() {
  const [repo, setRepo] = useState('');
  const urlRepo = 'http://localhost:3000/bootcamp-repos/';
  const { _id } = useParams();

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const response = await fetch(urlRepo + `${_id}`);
        
        if (!response.ok) {
          throw new Error('Repositorio no encontrado');
        }

        const data = await response.json();
        setRepo(data);
      } catch (error) {
        setRepo('');
        console.error(error);
      }
    };
    fetchRepo();
  }, [_id])

  return (
    <main className={styles.repoDetail}>
      <section className={`${styles.section} ${styles.repoDetailHeading}`}>
        <h1>{repo.title}</h1>
        <p>{repo.description}</p>
      </section>

      <section className={`${styles.section} ${styles.takeaways}`}>
        <h3>Takeaways</h3>
        <ul className={styles.takeawaysList}>
          {repo.takeaways?.map((takeaway, takeawayIndex) => (
            <li key={takeawayIndex}>{takeaway}</li>
          ))}
        </ul>
      </section>

      <section className={`${styles.section} ${styles.keyLearning}`}>
        <h3>Aprendizaje clave</h3>
        <p>{repo.keyLearning}</p>
      </section>

      <section className={`${styles.section} ${styles.techStack}`}>
        <h3>Tecnologías</h3>
        <div className={styles.containerChips}>
          {repo.tags?.map((tag, tagIndex) => (
            <span key={tagIndex} className={styles.chips}>
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.containerBtn}`}>
        <a href={repo.urlRepo} target="_blank" className={styles.btnPrimary}>
          Link Repo <img src={linkExt} alt="Link Externo" width={16} />
        </a>
        {repo.urlApp && (
          <a href={repo.urlApp} target="_blank" className={styles.btnPrimary}>
              Link App <img src={linkExt} alt="Link Externo" width={16} />
          </a>
        )}
      </section>
    </main>
  );
}

export default RepoDetail;
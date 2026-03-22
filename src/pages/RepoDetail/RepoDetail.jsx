import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./RepoDetail.module.css"

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
    <main>
      <section>
        <h1>{repo.title}</h1>
        <p>{repo.description}</p>
      </section>
      <div className="divider"></div>
      <section>
        <h3>Takeaways</h3>
        {repo.takeaways?.map((takeaway, takeawayIndex) => (
          <p key={takeawayIndex}>{takeaway}</p>
        ))}
      </section>
      <div className={styles.keyLearning}>
        <h3>Aprendizaje clave</h3>
        <p>{repo.keyLearning}</p>
      </div>
      <div className="divider"></div>
      <div className={styles.containerBtn}>
        <a href={repo.urlRepo} target="_blank">
          <button className={styles.btnPrimary}>Link Repo</button>
        </a>
        <a href={repo.urlApp} target="_blank">
          <button className={styles.btnPrimary}>Link App</button>
        </a>
      </div>
      <div className={styles.containerChips}>
        {repo.tags?.map((tag, tagIndex) => (
          <span key={tagIndex} className={styles.chips}>
            {tag}
          </span>
        ))}
      </div>
    </main>
  );
}

export default RepoDetail;
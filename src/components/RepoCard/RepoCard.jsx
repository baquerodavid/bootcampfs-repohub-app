import { Link } from "react-router-dom";
import styles from "./RepoCard.module.css";
import linkExt from "../../assets/linkExt_white.svg";

function RepoCard({repo}) {
  return (
    <article className={styles.repoCard}>
      <h3>{repo.title}</h3>
      <p>{repo.summary}</p>

      <div className="divider"></div>
      
      <div className={styles.keyLearning}>
        <h4>Aprendizaje clave</h4>
        <p>{repo.keyLearning}</p>
      </div>
      
      <div className="divider"></div>
      
      <div className={styles.containerChips}>
        {repo.tags?.map((tag, tagIndex) => (
          <span key={tagIndex} className={styles.chips}>
            {tag}
          </span>
        ))}
      </div>
      
      <div className={styles.containerBtn}>
        <a href={repo.urlRepo} target="_blank" className={styles.btnPrimary}>
          Link Repo <img src={linkExt} alt="" width={16} />
        </a>
        {repo.urlApp && (
          <a href={repo.urlApp} target="_blank" className={styles.btnPrimary}>
            Link App <img src={linkExt} alt="" width={16} />
          </a>
        )}
      </div>
      
      <Link to={'/bootcamp-repos/' + repo._id} className={styles.btnSecondary}>
        Ver más →
      </Link>
    </article>
  );
}

export default RepoCard;
import { Link } from "react-router-dom";
import styles from "./RepoCard.module.css";
import linkExt from "../../assets/linkExt_white.svg";

function RepoCard({repo}) {
  return (
    <div className={styles.repoCard}>
      <h4>{repo.title}</h4>
      <p>{repo.summary}</p>
      <div className="divider"></div>
      <div className={styles.keyLearning}>
        <h5>Aprendizaje clave</h5>
        <p>{repo.keyLearning}</p>
      </div>
      <div className="divider"></div>
      <div className={styles.containerBtn}>
        <Link to={repo.urlRepo} target="_blank">
          <button className={styles.btnPrimary}>
            Link Repo <img src={linkExt} alt="Link Externo" width={16} />
          </button>
        </Link>
        <Link to={repo.urlApp} target="_blank">
          <button className={styles.btnPrimary}>
            Link App <img src={linkExt} alt="Link Externo" width={16} />
          </button>
        </Link>
      </div>
      <div className={styles.containerChips}>
        {repo.tags?.map((tag, tagIndex) => (
          <span key={tagIndex} className={styles.chips}>
            {tag}
          </span>
        ))}
      </div>
      <Link to={'/bootcamp-repos/' + repo._id}>
        <button className={styles.btnSecondary}>Ver más →</button>
      </Link>
    </div>
  );
}

export default RepoCard;
import { Link } from "react-router-dom";
import logo from "../../assets/Logo_DB_Light1_Icon_Rounded.svg";
import styles from "./Footer.module.css"

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.primaryFooter}>
          <Link to="/">
            <img src={logo} alt="Logo David Baquero" width={30} />
          </Link>
          <nav>
            <Link to="/">RepoHub</Link>
          </nav>
        </div>
        <div className={styles.secondaryFooter}>
          <p>
            Desarrollado por{' '}
            <a href="https://www.davidbaquero.com/" target="_blank">
              David Baquero
            </a>
          </p>
          <p>
            ‧ Project Break 3 · Bootcamp Desarrollo Web Full-Stack ·{' '}
            <a href="https://thebridge.tech" target="_blank">
              The Bridge
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
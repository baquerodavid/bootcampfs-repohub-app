import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/Logo_DB_Light1_Icon_Rounded.svg";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <img src={logo} alt="Logo David Baquero" width={48} />
        </Link>
        <nav>
          <Link to="/">RepoHub</Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
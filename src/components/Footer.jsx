import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <nav>
          <Link to="/">Home (soy el footer)</Link>
        </nav>
        <div>
          <p>
            Desarrollado por <Link to="https://www.davidbaquero.com/" target="_blank">David Baquero</Link>
          </p>
          <p>‧ Project Break 3 · Bootcamp Desarrollo Web Full-Stack · <Link to="https://thebridge.tech" target="_blank">The Bridge</Link></p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home (soy el header)</Link>
        </nav>
      </header>
    </>
  )
}

export default Header;
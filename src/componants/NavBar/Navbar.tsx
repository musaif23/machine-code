import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item nav-link">
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to={"/fileManager"}
              >
                File Manager
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to={"/pagination"}
              >
                Pagination
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to={"/crausal"}
              >
                Crausal
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to={"/passwordGenerator"}
              >
                Password Generator
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to={"/formValidation"}
              >
                Form Validation
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to={"/promise"}
              >
                Pending&Completed
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to={"/class"}
              >
                Class
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to={"/stopwatch"}
              >
                Stop-Watch
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to={"/watch"}
              >
                Watch
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

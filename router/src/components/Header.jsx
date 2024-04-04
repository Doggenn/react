import { Link, NavLink } from "react-router-dom";
import './Header.css'
export default function Header() {
  return (
      <div>
      <header>
              <nav>
                  <NavLink to="/" className={({isActive})=> isActive?"active":""}>Home</NavLink>
                  <Link to="/contact">Contact</Link>
                  <Link to="/users">Users</Link>
                  <Link to="/users/5">User 5</Link>
                  <Link to="/animes">Animes</Link>
                  <Link to="/animes/5">Animes 5</Link>
              </nav>
            </header></div>
  )
}

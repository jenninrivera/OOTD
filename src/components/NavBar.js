import {NavLink} from "react-router-dom";

function NavBar ()  {
    return (
        <nav className="navbar">
            <NavLink className="links" to="/posts">FYP</NavLink>
            <NavLink className="links" to="/events">Events</NavLink>
            <NavLink className="links" to="/hashtags">Trending Hashtags</NavLink>
            <NavLink className="links" to="/liked-posts">Liked</NavLink>
        </nav>
    )
}

export default NavBar;
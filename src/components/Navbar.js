import { Navitems } from "./styles";
import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <Navitems>
            <Link to="/">Home</Link>
            <Link to="/create-blog/">CreatePost</Link>
            <Link to= "/profile/:id">Profile</Link>
      </Navitems>
    )
}

export default Navbar;
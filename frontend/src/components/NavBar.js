import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="container">
            <nav className="bg-primary">
                <div className="container-fluid text-center p-2">
                    <Link className="nav-item text-light mx-3" to="/addApplication">Apply</Link>
                    <Link className="nav-item text-light mx-3" to="/viewApplication">View- Applicants</Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
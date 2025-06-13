import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul style={{
            color: "orange",
            display: "flex",
            justifyContent: "space-around"
        }}>

                <li>
                    <Link to="/Dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Sign In</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </nav>
    );
}
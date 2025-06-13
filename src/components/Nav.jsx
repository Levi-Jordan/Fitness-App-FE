import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav style={{
            position: "fixed",
            top: "0",
            width: "100%",
        }}>
            <ul style={{
            color: "pink",
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
                    <Link to="/login">Log in</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </nav>
    );
}
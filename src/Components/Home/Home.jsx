import { Link, Outlet } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="body">
                <h2>React Router Dom 6.4</h2>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    );
};

export default Home;

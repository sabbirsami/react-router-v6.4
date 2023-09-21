import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();
    return (
        <div className="users-section">
            {users.map((user, idx) => (
                <div key={idx} className="user">
                    <h1>{user.name}</h1>
                    <p>{user.catchPhrase}</p>
                    <p>{user.company.catchPhrase}</p>
                    <Link to={`/user/${user.id}`}>
                        <button>Details</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Users;

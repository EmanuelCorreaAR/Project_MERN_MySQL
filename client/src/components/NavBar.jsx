import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="bg-zinc-600 flex justify-between px-20 py-5">
            <Link to="/" className="text-white font-bold">
            <h1>React MySQL</h1>
            </Link>
            <ul className="flex gap-x-2">
                <li>
                    <Link to="/" className="text-white px-4 py-2">Home</Link>
                </li>
                <li>
                    <Link to="/new" className="bg-indigo-500 text-white px-4 py-2">Create Task</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;
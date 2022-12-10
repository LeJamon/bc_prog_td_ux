import { Link, Outlet } from "react-router-dom"; 

const Home = () => {
    return (
    <>
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            </ul>
        </nav>
    <Outlet />
    </>

    )
}; 
export default Home; 
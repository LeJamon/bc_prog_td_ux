import { Link, Outlet } from "react-router-dom"; 

const Layout = () => {
    return (
    <>
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/ChainInfo">ChainInfo</Link>
            </li>
            <li>
                <Link to="/FakeBayc">fakeBayc</Link>
            </li>
            <li>
                <Link to="/FakeBaycTokenInfo">fakeBaycTokenInfo</Link>
            </li>
            <li>
                <Link to="/FakeNefturians">Fake Nefturians</Link>
            </li>
            <li>
                <Link to="/FakeNefturiansUserInfo">Fake Nefturians User Info</Link>
            </li>
            <li>
                <Link to="/FakeMeebits">Fake Meebits</Link>
            </li>
            </ul>
        </nav>
    <Outlet />
    </>

    )
}; 
export default Layout; 
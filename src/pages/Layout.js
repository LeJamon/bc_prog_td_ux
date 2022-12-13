import { Link, Outlet } from "react-router-dom"; 

const Layout = () => {
    return (
    <>
        <nav className="navMenu">
            <ul>
            <li className="bout Home">
                <Link to="/">Home </Link>
            </li>
            <li className="bout ChainInfo">
                <Link to="/ChainInfo">_Chain_Info_</Link>
            </li>
            <li className="bout FakeBayc">
                <Link to="/FakeBayc">-/fake_Bayc/-___</Link>
            </li>
            <li className="bout FakeBaycInfo">
                <Link to="/FakeBaycTokenInfo">%fake_Bayc+ _Token_Info_</Link>
            </li>
            <li className="bout FakeNef">
                <Link to="/FakeNefturians">______-_/Fake_Nefturians__</Link>
            </li>
            <li className="bout FajeNefUserInfo">
                <Link to="/FakeNefturiansUserInfo">_Fake_Nefturians-User_Info</Link>
            </li>
            <li className="bout Meebits">
                <Link to="/FakeMeebits">Fake___ -- ___Meebits</Link>
            </li>
            </ul>
        </nav>
    <Outlet />
    </>

    )
}; 
export default Layout; 
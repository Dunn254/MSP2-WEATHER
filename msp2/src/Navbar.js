export default function Navbar(){

    return <nav className="nav">
        <a href="/" className="title">My Essentials</a>
        <ul>
            <li>
                <a href="/Weather">Weather</a>
            </li>
            <li>
                <a href="/News">News</a>
            </li>
            <li>
                <a href="/Stocks">Stocks</a>
            </li>
            <li>
                <a href="/Exchange">Exchange Rates</a>
            </li>
        </ul>

    </nav>

}
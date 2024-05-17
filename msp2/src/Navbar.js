export default function Navbar(){

    return <nav className="nav absolute w-full h-[1.3rem] py-4">
        <a href="/" className="title font-bold text-[1.5rem] ">My Travel Essentials</a>
        <ul>
            <li className="list font-bold text-[1.2rem]">
                <a href="/Weather">Weather</a>
            </li>
            <li className="list font-bold text-[1.2rem]">
                <a href="/News">News</a>
            </li>
            <li className="list font-bold text-[1.2rem]">
                <a href="/Stocks">Stocks</a>
            </li>
            <li className="list font-bold text-[1.2rem]">
                <a href="/Exchange">Exchange Rates</a>
            </li>
            <li className="list font-bold text-[1.2rem]">
                <a href="/Signup">My Profile</a>
            </li>
        </ul>

    </nav>

}
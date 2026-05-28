function Navbar() {
    return(
        <nav className="sticky top-0 z-50 flex flex-wrap justify-between items-center px-8 py-4 border-b border-black ">
            <h1 className="font-bold">Pratibha</h1>

            <ul className="flex gap-6">
                <li>
                    <a href="#About">About</a>
                </li>

                <li>
                    <a href="#Skills">Skills</a>
                </li>

                <li>
                    <a href="#Projects">Projects</a>
                </li>

                <li>
                    <a href="#Contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
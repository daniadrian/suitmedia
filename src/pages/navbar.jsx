import logo from "../assets/logo.png";

export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-4 px-6 bg-orange-500 text-white">
            <div className="flex items-center">
                <img src={logo} alt="Suitmedia Logo" className="h-12 mr-4" />
            </div>
            <ul className="flex space-x-4">
                <li><a href="https://suitmedia.com/work" className="hover:underline">Work</a></li>
                <li><a href="https://suitmedia.com/about" className="hover:underline">About</a></li>
                <li><a href="https://suitmedia.com/expertises" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Ideas</a></li>
                <li><a href="https://suitmedia.com/careers" className="hover:underline">Careers</a></li>
                <li><a href="https://suitmedia.com/contact" className="hover:underline">Contact</a></li>
            </ul>
        </nav>
    );
};

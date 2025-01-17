export const Navbar = () => {
    return (
    <nav className="flex justify-between items-center py-4 px-6 bg-orange-500 text-white">
    <div className="font-bold text-lg">Suitmedia</div>
    <ul className="flex space-x-4">
      <li><a href="#" className="hover:underline">Work</a></li>
      <li><a href="#" className="hover:underline">About</a></li>
      <li><a href="#" className="hover:underline">Services</a></li>
      <li><a href="#" className="hover:underline">Ideas</a></li>
      <li><a href="#" className="hover:underline">Careers</a></li>
      <li><a href="#" className="hover:underline">Contact</a></li>
    </ul>
  </nav>
    );
}

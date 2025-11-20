const Navbar = () => {
  return (
    <nav className="absolute z-1000 font-bebas flex items-center justify-between w-full px-26 py-12 tracking-wide">
        <a className="text-3xl" href="/">Martin Piskáček</a>
        <ul className="flex items-center justify-center gap-6 text-lg">
            <li><a href="/">home</a></li>
            <li><a href="#galleries">galleries</a></li>
            <li><a href="#about">about me</a></li>
            <li><a href="#contact">contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar;
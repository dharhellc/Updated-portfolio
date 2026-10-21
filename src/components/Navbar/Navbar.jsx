import "./Navbar.css"

export default function Navbar(){
    return (
        <nav className="navbar">
            <a className="navbar-logo" href="#home">Dharhell<span>.</span></a>

        <div className="navbar-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
        </div>
        </nav>
    );
}
import { useEffect } from "react";
import "./Header.css";

const asset = (path) => `${import.meta.env.BASE_URL}public/${path}`;

function Header() {
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const toggleTheme = () => {
        const current =
            document.documentElement.getAttribute("data-theme") || "light";

        const nextTheme = current === "dark" ? "light" : "dark";

        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("theme", nextTheme);
    };

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <header className="header">
            <a
                className="header-logo"
                href={window.location.href}
                aria-label="Home"
            >
                <img src={asset("logo.png")} alt="Logo" />
            </a>

            <nav className="header-nav">
                <button onClick={() => scrollToSection("cards")}>
                    Cards
                </button>

                <button onClick={() => scrollToSection("about-us")}>
                    About Us
                </button>

                <button onClick={() => scrollToSection("updates")}>
                    Updates
                </button>

                <button onClick={() => scrollToSection("design-document")}>
                    Document
                </button>

                <button onClick={() => scrollToSection("developers")}>
                    Developers
                </button>

                <a
                    className="download-button"
                    href={`${window.location.origin}/testing-react-static-wiki/steam`}
                >
                    Download Game
                </a>
            </nav>

            <div className="header-controls">
                <button
                    className="theme-button"
                    onClick={toggleTheme}
                    aria-label="Change theme"
                >
                    <svg
                        viewBox="0 0 24 24"
                        width="19"
                        height="19"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                    >
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2" />
                        <path d="M12 20v2" />
                        <path d="M2 12h2" />
                        <path d="M20 12h2" />
                        <path d="m4.9 4.9 1.4 1.4" />
                        <path d="m17.7 17.7 1.4 1.4" />
                        <path d="m19.1 4.9-1.4 1.4" />
                        <path d="m6.3 17.7-1.4 1.4" />
                    </svg>
                </button>
            </div>
        </header>
    );
}

export default Header;
import { Link, useLocation } from "react-router-dom";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (path) =>
    `font-body font-medium transition-all duration-300 ${
      location.pathname === path
        ? "text-primary drop-shadow-[0_0_8px_rgba(0,255,249,0.8)]"
        : "text-foreground/70 hover:text-primary"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/30 backdrop-blur-xl border-b border-primary/20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Globe className="w-8 h-8 text-primary animate-spin-slow" />
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse-glow" />
          </div>
          <h1 className="text-xl md:text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Exoplanet Classifier
          </h1>
        </div>

        {/* Menu Button for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary focus:outline-none"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Navigation Links */}
        <div
          className={`flex-col md:flex-row md:flex items-center gap-6 absolute md:static top-full left-0 right-0 bg-background/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-t md:border-none border-primary/20 transition-all duration-300 ease-in-out ${
            menuOpen ? "flex py-4" : "hidden md:flex"
          }`}
        >
          <Link to="/" onClick={() => setMenuOpen(false)} className={linkClass("/")}>
            Single Prediction
          </Link>
          <Link to="/bulk" onClick={() => setMenuOpen(false)} className={linkClass("/bulk")}>
            Bulk Prediction
          </Link>

          {/* Download Button */}
          <div className="relative group inline-block mt-3 md:mt-0 text-center">
            <a
              href="https://drive.google.com/uc?export=download&id=1nDS-aSzo-RPBnlu52ZNCE6Ok-7L2_gT5"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg text-white font-medium transition-colors"
            >
              Download Sample CSV
            </a>

            {/* Tooltip for desktop only */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 mt-3 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300 w-80 text-sm text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl px-4 py-3 shadow-xl">
              <p className="font-semibold">📊 Preprocessed Dataset</p>
              <p>
                A ready-to-use CSV file prepared for testing this application.
                Includes cleaned and normalized values for smooth predictions.
              </p>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rotate-45"></div>
            </div>

            {/* Always visible short text for mobile */}
            <p className="md:hidden mt-2 text-xs text-green-400">
              📊 Preprocessed dataset for testing.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

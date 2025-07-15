import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import logoLight from '../assets/images/Logotipo.png';
import logoDark from '../assets/images/logotipo-dark.png';
import { FaSun, FaMoon, FaGlobe, FaBars, FaTimes, FaUserShield } from 'react-icons/fa';

// 🚀 Deploy automático teste - $(date)

const Header: FC = () => {
  const { t, i18n } = useTranslation();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const languages = ['pt-BR', 'en', 'es'];
    const currentIndex = languages.indexOf(i18n.language);
    const nextIndex = (currentIndex + 1) % languages.length;
    i18n.changeLanguage(languages[nextIndex]);
  };

  const getLanguageLabel = () => {
    switch (i18n.language) {
      case 'pt-BR':
        return 'PT';
      case 'en':
        return 'EN';
      case 'es':
        return 'ES';
      default:
        return 'PT';
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#CFF350] dark:bg-letx-blue-dark py-3 transition-colors duration-300 relative">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={isDarkMode ? logoDark : logoLight}
            alt="LetxClub Logo"
            className="h-8 md:h-10 w-auto transition-all duration-300"
          />
        </a>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-letx-green-dark dark:text-white hover:text-letx-blue dark:hover:text-letx-neon transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-letx-green-dark dark:text-white hover:text-letx-blue dark:hover:text-letx-neon transition-colors"
          >
            {t('navigation.home')}
          </Link>
          <Link
            to="/calendario"
            className="text-letx-green-dark dark:text-white hover:text-letx-blue dark:hover:text-letx-neon transition-colors"
          >
            {t('navigation.calendar')}
          </Link>
          <Link
            to="/dicas"
            className="text-letx-green-dark dark:text-white hover:text-letx-blue dark:hover:text-letx-neon transition-colors"
          >
            {t('navigation.tips')}
          </Link>
          <Link
            to="/admin/login"
            className="flex items-center space-x-1 text-letx-green-dark dark:text-white hover:text-letx-blue dark:hover:text-letx-neon transition-colors"
          >
            <FaUserShield className="w-4 h-4" />
            <span>{t('navigation.admin')}</span>
          </Link>
        </nav>

        {/* Theme and Language Toggles (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-letx-blue/20 transition-colors"
            aria-label={t('buttons.darkMode')}
          >
            {isDarkMode ? (
              <FaSun className="text-letx-neon w-5 h-5" />
            ) : (
              <FaMoon className="text-letx-green-dark w-5 h-5" />
            )}
          </button>

          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-3 py-1.5 bg-letx-blue text-white font-bold rounded-full hover:bg-letx-blue-dark transition-colors duration-300"
            aria-label={t('buttons.language')}
          >
            <FaGlobe className="w-4 h-4" />
            <span>{getLanguageLabel()}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#CFF350] dark:bg-letx-blue-dark py-4 px-4 shadow-lg z-50">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-letx-green-dark dark:text-white hover:text-letx-blue dark:hover:text-letx-neon transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.home')}
              </Link>
              <Link
                to="/calendario"
                className="text-letx-green-dark dark:text-white hover:text-letx-blue dark:hover:text-letx-neon transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.calendar')}
              </Link>
              <Link
                to="/dicas"
                className="text-letx-green-dark dark:text-white hover:text-letx-blue dark:hover:text-letx-neon transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.tips')}
              </Link>
              <Link
                to="/admin/login"
                className="flex items-center space-x-2 text-letx-green-dark dark:text-white hover:text-letx-blue dark:hover:text-letx-neon transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaUserShield className="w-4 h-4" />
                <span>{t('navigation.admin')}</span>
              </Link>
              <div className="flex items-center justify-between pt-4 border-t border-letx-green-dark/20 dark:border-white/20">
                <button
                  onClick={() => {
                    toggleDarkMode();
                    setIsMenuOpen(false);
                  }}
                  className="p-2 rounded-full hover:bg-letx-blue/20 transition-colors"
                  aria-label={t('buttons.darkMode')}
                >
                  {isDarkMode ? (
                    <FaSun className="text-letx-neon w-5 h-5" />
                  ) : (
                    <FaMoon className="text-letx-green-dark w-5 h-5" />
                  )}
                </button>

                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 px-3 py-1.5 bg-letx-blue text-white font-bold rounded-full hover:bg-letx-blue-dark transition-colors duration-300"
                  aria-label={t('buttons.language')}
                >
                  <FaGlobe className="w-4 h-4" />
                  <span>{getLanguageLabel()}</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/LOGO LETXCLUBE.png';
import { FaSun, FaMoon, FaGlobe } from 'react-icons/fa';

const Header: FC = () => {
  const { t, i18n } = useTranslation();
  const { isDarkMode, toggleDarkMode } = useTheme();

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

  return (
    <header className="bg-letx-green-dark dark:bg-letx-blue-dark py-4 transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="LetxClub Logo" className="h-16 w-auto brightness-200 contrast-125" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-letx-neon transition-colors">
            {t('navigation.home')}
          </Link>
          <Link to="/calendario" className="text-white hover:text-letx-neon transition-colors">
            {t('navigation.calendar')}
          </Link>
          <Link to="/dicas" className="text-white hover:text-letx-neon transition-colors">
            {t('navigation.tips')}
          </Link>
        </nav>

        {/* Theme and Language Toggles */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-letx-blue/20 transition-colors"
            aria-label={t('buttons.darkMode')}
          >
            {isDarkMode ? (
              <FaSun className="text-letx-neon w-6 h-6" />
            ) : (
              <FaMoon className="text-white w-6 h-6" />
            )}
          </button>

          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-3 py-2 bg-letx-neon text-letx-green-dark dark:text-letx-blue-dark font-bold rounded-full hover:bg-letx-orange transition-colors duration-300"
            aria-label={t('buttons.language')}
          >
            <FaGlobe className="w-4 h-4" />
            <span>{getLanguageLabel()}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

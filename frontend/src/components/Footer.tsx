import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import logoLight from '../assets/images/Logotipo.png';
import logoDark from '../assets/images/logotipo-dark.png';

const Footer: FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className="bg-[#CFF350] dark:bg-letx-blue-dark py-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <Link to="/" className="mb-4 md:mb-0">
            <img
              src={isDarkMode ? logoDark : logoLight}
              alt="LetxClub Logo"
              className="h-8 md:h-10 w-auto transition-all duration-300"
            />
          </Link>

          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/letx.run/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-letx-green-dark dark:text-white hover:text-letx-blue dark:hover:text-letx-neon transition-colors p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5"
            >
              <FaInstagram className="w-8 h-8 md:w-10 md:h-10" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 
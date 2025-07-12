import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import logo from '../assets/images/LOGO LETXCLUBE.png';

const Footer: FC = () => {
  return (
    <footer className="bg-letx-green-dark dark:bg-letx-blue-dark py-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <Link to="/" className="mb-4 md:mb-0">
            <img
              src={logo}
              alt="LetxClub Logo"
              className="h-16 w-auto brightness-200 contrast-125"
            />
          </Link>

          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/letxclube"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-letx-neon transition-colors"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

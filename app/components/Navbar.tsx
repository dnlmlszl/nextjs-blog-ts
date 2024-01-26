'use client';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaLaptop, FaMoon, FaSun } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useContext } from 'react';
import MyProfilePic from './MyProfilePic';
import DarkThemeContext from '../store/DarkmodeContext';

const srcTw = 'https://twitter.com/dn1el_lszl0';
const srcGh = 'https://github.com/dnlmlszl';
const srcLn =
  'https://www.linkedin.com/in/l%C3%A1szl%C3%B3-d%C3%A1niel-a39a956b/';
const srcWeb = 'https://lmdcode.dev';

const Navbar = () => {
  const { isDarkTheme, toggleThemeHandler } = useContext(DarkThemeContext);

  const darkModeClasses = isDarkTheme
    ? 'bg-zinc-900 text-zinc-300 hover:text-zinc-200'
    : 'bg-zinc-200 text-zinc-600 hover:text-zinc-700';
  return (
    <nav className={`p-4 sticky top-0  z-10 ${darkModeClasses}`}>
      <div className="flex justify-between items-center flex-col sm:flex-row md:px-6 mx-auto">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold grid place-content-center mb-2 md:mb-0">
            <Link href="/" className="no-underline tracking-widest">
              LMD Blog
            </Link>
          </h1>
          <div className="block sm:hidden mb-2 sm:mb-0 order-last">
            {isDarkTheme ? (
              <FaSun
                className="text-yellow-500 text-xl cursor-pointer"
                onClick={toggleThemeHandler}
              />
            ) : (
              <FaMoon
                className="text-slate-700 text-xl cursor-pointer"
                onClick={toggleThemeHandler}
              />
            )}
          </div>
        </div>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle items-center gap-8 text-xl lg:text-2xl">
          <Link href={srcTw} className="hover:text-yellow-600">
            <FaXTwitter />
          </Link>
          <Link href={srcGh} className="hover:text-yellow-600">
            <FaGithub />
          </Link>
          <Link href={srcLn} className="hover:text-yellow-600">
            <FaLinkedin />
          </Link>
          <Link href={srcWeb} className="hover:text-yellow-600">
            <FaLaptop />
          </Link>
          <MyProfilePic />
        </div>
        <div className="hidden sm:block mb-2 sm:mb-0 order-first sm:order-last">
          {isDarkTheme ? (
            <FaSun
              className="text-yellow-500 text-xl cursor-pointer"
              onClick={toggleThemeHandler}
            />
          ) : (
            <FaMoon
              className="text-slate-700 text-xl cursor-pointer"
              onClick={toggleThemeHandler}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaLaptop } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import MyProfilePic from './MyProfilePic';

const srcTw = 'https://twitter.com/dn1el_lszl0';
const srcGh = 'https://github.com/dnlmlszl';
const srcLn =
  'https://www.linkedin.com/in/l%C3%A1szl%C3%B3-d%C3%A1niel-a39a956b/';
const srcWeb = 'https://lmdcode.dev';

const Navbar = () => {
  return (
    <nav className={'py-4 sticky top-0 z-10 bg-zinc-100 text-zinc-700'}>
      <div className="flex justify-evenly items-center flex-col sm:flex-row md:px-6 mx-auto">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold grid place-content-center mb-2 md:mb-0">
            <Link href="/" className="no-underline tracking-widest">
              LMD Blog
            </Link>
          </h1>
        </div>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle items-center gap-8 text-xl lg:text-2xl">
          <Link
            href={srcTw}
            className="hover:text-yellow-600"
            target="_blank"
            rel="noopener noreferrer "
          >
            <FaXTwitter />
          </Link>
          <Link
            href={srcGh}
            className="hover:text-yellow-600"
            target="_blank"
            rel="noopener noreferrer "
          >
            <FaGithub />
          </Link>
          <Link
            href={srcLn}
            className="hover:text-yellow-600"
            target="_blank"
            rel="noopener noreferrer "
          >
            <FaLinkedin />
          </Link>
          <Link
            href={srcWeb}
            className="hover:text-yellow-600"
            target="_blank"
            rel="noopener noreferrer "
          >
            <FaLaptop />
          </Link>
          <MyProfilePic width={40} height={40} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

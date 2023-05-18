import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedin, FaLaptop } from 'react-icons/fa';

const srcTw = 'https://twitter.com/dn1el_lszl0';
const srcGh = 'https://github.com/dnlmlszl';
const srcLn =
  'https://www.linkedin.com/in/l%C3%A1szl%C3%B3-d%C3%A1niel-a39a956b/';

const Navbar = () => {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="md:px-6 prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            M Daniels
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
          <Link className="text-white/90 hover:text-white" href={srcTw}>
            <FaTwitter />
          </Link>
          <Link className="text-white/90 hover:text-white" href={srcGh}>
            <FaGithub />
          </Link>
          <Link className="text-white/90 hover:text-white" href={srcLn}>
            <FaLinkedin />
          </Link>
          <Link className="text-white/90 hover:text-white" href={srcTw}>
            <FaLaptop />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

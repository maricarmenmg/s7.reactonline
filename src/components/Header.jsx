import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link className="block group" to="/" aria-label="logo">
            <svg width="60" height="60" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M107.69 171.295C68.2926 171.295 36.355 139.678 36.355 100.676C36.355 61.6754 68.2926 30.0586 107.69 30.0586H111.007C113.979 30.0586 116.389 32.4682 116.389 35.4408V59.1243C116.389 62.0967 113.979 64.5065 111.007 64.5065H107.69C87.5106 64.5065 71.1523 80.7005 71.1523 100.676C71.1523 120.653 87.5106 136.847 107.69 136.847H111.007C113.979 136.847 116.389 139.257 116.389 142.229V165.913C116.389 168.885 113.979 171.295 111.007 171.295H107.69Z" fill="#CBE358"/>
<path fillRule="evenodd" clipRule="evenodd" d="M163.468 165.913C163.468 168.885 161.059 171.295 158.086 171.295H133.541C130.569 171.295 128.159 168.885 128.159 165.913V141.368C128.159 138.395 130.569 135.986 133.541 135.986H158.086C161.059 135.986 163.468 138.395 163.468 141.368V165.913Z" fill="#0043FF"/>
<path fillRule="evenodd" clipRule="evenodd" d="M133.541 112.447C130.568 112.447 128.158 110.038 128.158 107.065V33.0873C128.158 30.1148 130.568 27.7051 133.541 27.7051H158.085C161.058 27.7051 163.468 30.1148 163.468 33.0873V107.065C163.468 110.038 161.058 112.447 158.085 112.447H133.541Z" fill="#CBE358"/>
</svg>


            </Link>
          </div>
          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center pl-10" >
            <li className="ml-3">
                <Link className="font-sora text-m text-black  w-full " to="/">
                 Inicio
                </Link>
              </li>
              <li className="ml-3">
                <Link className="font-inter text-m text-black  w-full " to="/projects">
                 Nuestros Proyectos
                </Link>
              </li>
              <li className="ml-3">
                <Link className="btn-sm font-sora text-project-400 bg-project-300 border border-project-300 hover:bg-project-100  hover:border-project-500 w-full " to="/">
                  ¿Trabajamos juntos?
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

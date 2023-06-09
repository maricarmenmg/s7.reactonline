import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    
 <footer className="p-4 bg-gray-100 md:p-5 lg:p-5 dark:bg-gray-800">
  <div className="mx-auto max-w-screen-xl text-center">
  {/* Logo */}
  <Link className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white" to="/" aria-label="logo">
     
  <svg width="60" height="60" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M107.69 171.295C68.2926 171.295 36.355 139.678 36.355 100.676C36.355 61.6754 68.2926 30.0586 107.69 30.0586H111.007C113.979 30.0586 116.389 32.4682 116.389 35.4408V59.1243C116.389 62.0967 113.979 64.5065 111.007 64.5065H107.69C87.5106 64.5065 71.1523 80.7005 71.1523 100.676C71.1523 120.653 87.5106 136.847 107.69 136.847H111.007C113.979 136.847 116.389 139.257 116.389 142.229V165.913C116.389 168.885 113.979 171.295 111.007 171.295H107.69Z" fill="#282828"/>
<path fillRule="evenodd" clipRule="evenodd" d="M163.468 165.913C163.468 168.885 161.059 171.295 158.086 171.295H133.541C130.569 171.295 128.159 168.885 128.159 165.913V141.368C128.159 138.395 130.569 135.986 133.541 135.986H158.086C161.059 135.986 163.468 138.395 163.468 141.368V165.913Z" fill="#282828"/>
<path fillRule="evenodd" clipRule="evenodd" d="M133.541 112.447C130.568 112.447 128.158 110.038 128.158 107.065V33.0873C128.158 30.1148 130.568 27.7051 133.541 27.7051H158.085C161.058 27.7051 163.468 30.1148 163.468 33.0873V107.065C163.468 110.038 161.058 112.447 158.085 112.447H133.541Z" fill="#282828"/>
</svg>
</Link>

      <p className="font-sora text-2xl text-center my-6 text-gray-900 dark:text-gray-400">"Nos apasiona crear soluciones innovadoras"</p>
      <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>

          </li>
          <li>
              <a href="/projects" className="mr-4 hover:underline md:mr-6">Proyectos</a>
          </li>
          <li>
              <a href="*" className="mr-4 hover:underline md:mr-6 ">Contacto</a>
          </li>
          <li>
              <a href="https://medium.com/" className="mr-4 hover:underline md:mr-6">Blog</a>
          </li>
  
      </ul>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://github.com/maricarmenmg/s7.reactonline" className="hover:underline">@mcarmenmg</a>.</span>
  </div>
</footer>
  );
}

export default Footer;

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
            <Link className="block group" to="/" aria-label="Cruip">
            <svg width="60" height="60" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M109.468 183C63.9221 183 27 146.449 27 101.36C27 56.2722 63.9221 19.721 109.468 19.721L113.303 19.721C116.739 19.721 119.525 22.5067 119.525 25.9432L119.525 53.3229C119.525 56.7593 116.739 59.5451 113.303 59.5451L109.468 59.5451C86.1395 59.5451 67.2282 78.2665 67.2282 101.36C67.2282 124.454 86.1395 143.176 109.468 143.176L113.303 143.176C116.739 143.176 119.525 145.962 119.525 149.398L119.525 176.778C119.525 180.214 116.739 183 113.303 183L109.468 183Z" fill="#CBE358"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M173.952 176.778C173.952 180.214 171.166 183 167.729 183L139.354 183C135.918 183 133.132 180.214 133.132 176.778L133.132 148.402C133.132 144.966 135.918 142.18 139.354 142.18L167.729 142.18C171.166 142.18 173.952 144.966 173.952 148.402L173.952 176.778Z" fill="#282828"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M139.354 114.967C135.917 114.967 133.131 112.182 133.131 108.745L133.131 23.2222C133.131 19.7858 135.917 17 139.354 17L167.729 17C171.165 17 173.951 19.7858 173.951 23.2222L173.951 108.745C173.951 112.182 171.165 114.967 167.729 114.967L139.354 114.967Z" fill="#CBE358"/>
</svg>


            </Link>
          </div>
          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  className="font-medium text-gray-600 decoration-blue-500 decoration-2 underline-offset-2 hover:underline px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  to="/signin"
                >
                  Sign in
                </Link>
              </li>
              <li className="ml-3">
                <Link className="btn-sm text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm" to="/signup">
                  Join The Community
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

import React, { useState } from 'react';
import Modal from './elements/Modal';
import { InformationCircleIcon, SwatchIcon, LanguageIcon } from "@heroicons/react/24/solid";


function Panel({ handlePageChange, handleLanguageChange, showPanel }) {
  const [pages, setPages] = useState(() => {
    const savedPages = localStorage.getItem('pages');
    return savedPages ? parseInt(savedPages, 10) : 1;
  });

  const [languages, setLanguages] = useState(() => {
    const savedLanguages = localStorage.getItem('languages');
    return savedLanguages ? parseInt(savedLanguages, 10) : 0;
  });

  const handlePagesChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setPages(value);
    handlePageChange(value);
  };

  const handleLanguagesChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setLanguages(value);
    handleLanguageChange(value);
  };

  const incrementPages = () => {
    setPages((prevPages) => {
      const newPages = prevPages + 1;
      handlePageChange(newPages);
      return newPages;
    });
  };

  const decrementPages = () => {
    if (pages > 0) {
      setPages((prevPages) => {
        const newPages = prevPages - 1;
        handlePageChange(newPages);
        return newPages;
      });
    }
  };

  const incrementLanguages = () => {
    setLanguages((prevLanguages) => {
      const newLanguages = prevLanguages + 1;
      handleLanguageChange(newLanguages);
      return newLanguages;
    });
  };

  const decrementLanguages = () => {
    if (languages > 0) {
      setLanguages((prevLanguages) => {
        const newLanguages = prevLanguages - 1;
        handleLanguageChange(newLanguages);
        return newLanguages;
      });
    }
  };

  const [showPagesModal, setShowPagesModal] = useState(false);
  const [showLanguagesModal, setShowLanguagesModal] = useState(false);

  const handleOpenPagesModal = () => {
    setShowPagesModal(true);
  };

  const handleClosePagesModal = () => {
    setShowPagesModal(false);
  };

  const handleOpenLanguagesModal = () => {
    setShowLanguagesModal(true);
  };

  const handleCloseLanguagesModal = () => {
    setShowLanguagesModal(false);
  };


  if (!showPanel) {
    return null;
  }

  return (
    <div className="mt-6 rounded-lg  p-5 bg-project-100">
      <div className="mb-4">
        <label
          htmlFor="pages"
          className="mr-2 pr-5 font-sora font-semibold text-base text-gray-900"
        >
          Número de páginas:
        </label>
        <button className='bg-project-100 border-4 border-project-700 font-sora font-bold text-gray-600 hover:text-gray-700 hover:bg-project-200 rounded-full h-9 w-9 cursor-pointer' onClick={incrementPages}>+</button>
        <input 
          type='number'
          id='pages'
          name='pages'
          min='0'
          value={pages}
          onChange={handlePagesChange}
          className='font-sora font-bold w-16 text-center bg-project-100 background-transparent border-transparent'
        />
        <button className='bg-project-100 border-4 border-project-700 font-sora font-bold text-gray-600 hover:text-gray-700 hover:bg-project-200 rounded-full h-9 w-9 cursor-pointer' onClick={decrementPages}>-</button>
        <button className='ml-5 text-project-500' onClick={handleOpenPagesModal}>
          <InformationCircleIcon className="h-6 w-6" />
        </button>
        <Modal
        isOpen={showPagesModal}
        onClose={handleClosePagesModal}
        icon={<SwatchIcon className="h-8 w-8 text-project-500" />}
        title="Número de páginas"
        content="Número de páginas que tendrá la web."
        selectedPages={pages}
        />
      </div>
      <div>
        <label
          htmlFor="languages"
          className="mr-2 pr-5 font-sora font-semibold text-base text-gray-900"
        >
          Número de idiomas:
        </label>
        <button className='bg-project-100 border-4 border-project-700 font-sora font-bold text-gray-600 hover:text-gray-700 hover:bg-project-200 rounded-full h-9 w-9 cursor-pointer' onClick={incrementLanguages}>+</button>
        <input 
          type='number'
          id='languages'
          name='languages'
          min='0'
          value={languages}
          onChange={handleLanguagesChange}
          className='font-sora font-bold w-16 text-center bg-project-100 background-transparent border-transparent'
        />
        <button className='bg-project-100 border-4 border-project-700 font-sora font-bold text-gray-600 hover:text-gray-700 hover:bg-project-200 rounded-full h-9 w-9 cursor-pointer' onClick={decrementLanguages}>-</button>
        <button className='ml-5 text-project-500' onClick={handleOpenLanguagesModal}>
          <InformationCircleIcon className="h-6 w-6" />
        </button>
        <Modal
          isOpen={showLanguagesModal}
          onClose={handleCloseLanguagesModal}
          icon={<LanguageIcon className="h-8 w-8 text-project-500" />}
          title="Número de idiomas"
          content= "Número de idiomas que tendrá la web"
          selectedLanguages={languages}
/>
      </div>
    </div>
  );
}

export default Panel;
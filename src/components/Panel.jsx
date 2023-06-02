import React, { useState } from 'react';

function Panel({ handlePageChange, handleLanguageChange, showPanel }) {
  const [pages, setPages] = useState(1);
  const [languages, setLanguages] = useState(0);

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
    setPages(pages + 1);
    handlePageChange(pages + 1);
  };

  const decrementPages = () => {
    if (pages > 0) {
      setPages(pages - 1);
      handlePageChange(pages - 1);
    }
  };

  const incrementLanguages = () => {
    setLanguages(languages + 1);
    handleLanguageChange(languages + 1);
  };

  const decrementLanguages = () => {
    if (languages > 0) {
      setLanguages(languages - 1);
      handleLanguageChange(languages - 1);
    }
  };

  if (!showPanel) {
    return null;
  }

  return (
    <div className="mt-6 rounded-lg  p-8 bg-project-100">
      <div className="mb-4">
        <label
          htmlFor="pages"
          className="mr-2 pr-10 font-sora font-semibold text-base text-gray-900"
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
          className='font-sora font-bold w-16 text-center bg-project-100 border-transparent'
        />
        
         <button className='bg-project-100 border-4 border-project-700 font-sora font-bold text-gray-600 hover:text-gray-700 hover:bg-project-200 rounded-full h-9 w-9 cursor-pointer' onClick={decrementPages}>-</button>
      </div>
      <div>
        <label
          htmlFor='languages'
          className='mr-2 pr-10 font-sora font-semibold text-base text-gray-900'
        >
          Número de idiomas:
        </label>
        <button className= 'bg-project-100 border-4 border-project-700 font-sora font-bold text-gray-600 hover:text-gray-700 hover:bg-project-200  rounded-full h-9 w-9 cursor-pointer' onClick={incrementLanguages}>+</button>
        <input
          type="number"
          id="languages"
          name="languages"
          min="0"
          value={languages}
          onChange={handleLanguagesChange}
          className='font-sora font-bold w-16 text-center bg-project-100 border-transparent'
        />
        
         <button className='bg-project-100 border-4 border-project-700 font-sora font-bold text-gray-600 hover:text-gray-700 hover:bg-project-200  rounded-full h-9 w-9 cursor-pointer' onClick={decrementLanguages}>-</button>
      </div>


      
</div>



  );
}

export default Panel;

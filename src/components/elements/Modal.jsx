import React, { useEffect, useRef } from 'react';

function Modal({ isOpen, onClose, icon, title, content, selectedPages, selectedLanguages }) {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-900 opacity-60"></div>
      <div className="bg-white rounded-lg shadow-lg p-6 relative" ref={modalRef}>
        <div className="flex items-center mb-4 mr-8">
          {icon}
          <h2 className="text-xl font-bold font-sora text-project-500">{title}</h2>
        </div>
        <p>
        {content}
        <span> {selectedPages && ` (${selectedPages})`}</span>
       {selectedLanguages && ` (${selectedLanguages})`}
        {" 🤖 "}
        Cada {selectedLanguages ? "nuevo idioma traducido" : "página"} cuesta 30 €.
      </p>
      </div>
    </div>
  );
}

export default Modal;
import React from 'react';
import { BarsArrowUpIcon, CalendarDaysIcon, ArrowPathIcon  } from '@heroicons/react/24/solid';

const SortAlphabeticallyButton = ({ onClick }) => {
  return (
    <button
      className="font-sora text-sm flex items-center space-x-1 px-3 py-2 border border-gray-300 rounded-full bg-white  text-gray-700 hover:bg-gray-100"
      onClick={onClick}
    >
      <BarsArrowUpIcon  className="h-5 w-5" />
      <span>Ordenar alfabéticamente</span>
    </button>
  );
};

const SortByDateButton = ({ onClick }) => {
  return (
    <button
      className="font-sora text-sm flex items-center space-x-1 px-3 py-2 border border-gray-300 rounded-full bg-white text-sm text-gray-700 hover:bg-gray-100"
      onClick={onClick}
    >
      <CalendarDaysIcon className="h-5 w-5" />
      <span>Ordenar por fecha</span>
    </button>
  );
};

const ResetOrderButton = ({ onClick }) => {
  return (
    <button
      className="font-sora text-sm flex items-center space-x-1 px-3 py-2 border border-gray-300 rounded-full bg-white text-sm text-gray-700 hover:bg-gray-100"
      onClick={onClick}
    >
      <ArrowPathIcon  className="h-5 w-5" />
      <span>Reiniciar orden</span>
    </button>
  );
};

export { SortAlphabeticallyButton, SortByDateButton, ResetOrderButton };
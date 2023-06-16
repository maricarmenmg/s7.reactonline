import React from 'react';
import { FunnelIcon , BarsArrowUpIcon, CalendarDaysIcon, ArrowPathIcon  } from '@heroicons/react/24/solid';

const SortAlphabeticallyButton = ({ onClick }) => {
  return (
    <button
      className="font-sora text-sm flex items-center space-x-1 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700 hover:bg-gray-100"
      onClick={onClick}
    >
      <BarsArrowUpIcon  className="h-4 w-4" />
      <span>Ordenar alfabéticamente</span>
    </button>
  );
};

const SortByDateButton = ({ onClick }) => {
  return (
    <button
      className="flex items-center space-x-1 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700 hover:bg-gray-100"
      onClick={onClick}
    >
      <CalendarDaysIcon className="h-4 w-4" />
      <span>Ordenar por fecha</span>
    </button>
  );
};

const ResetOrderButton = ({ onClick }) => {
  return (
    <button
      className="flex items-center space-x-1 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700 hover:bg-gray-100"
      onClick={onClick}
    >
      <ArrowPathIcon  className="h-4 w-4" />
      <span>Reiniciar orden</span>
    </button>
  );
};

export { SortAlphabeticallyButton, SortByDateButton, ResetOrderButton };
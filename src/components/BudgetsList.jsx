import React from 'react';
import { DocumentDuplicateIcon, CurrencyEuroIcon, UserIcon, CalendarDaysIcon, SwatchIcon,  LanguageIcon ,ExclamationTriangleIcon, ArrowSmallRightIcon   } from '@heroicons/react/24/solid';

function BudgetsList({ budgetList }) {

  return (

    <div className="mt-8">
      {budgetList.length > 0 && <h3 className="font-sora font-bold text-xl mt-12 mb-2">Listado de presupuestos:</h3>}
      {budgetList.length > 0 ? (
        
        <ul>
          {budgetList.map((budget, index) => (
            <li key={index} className=" text-m font-sora font-normal mr-8 py-8 border-b-2 border-gray-200">
              <p className='py-1 font-medium'><DocumentDuplicateIcon className=" inline h-7 w-7 text-gray-800 mr-2" aria-hidden="true" />Presupuesto: {budget.budgetName}</p> 
              <p className='py-1 font-medium'><UserIcon className=" inline h-7 w-7 text-gray-800 mr-2" aria-hidden="true" />Cliente:{budget.clientName}</p> 
              {budget.services.length > 0 ? (
                <>
                <p className='py-1 font-medium'> <SwatchIcon className=" inline h-7 w-7 text-gray-800 mr-2" aria-hidden="true" />Servicios: {budget.services.map(service => service.name).join(', ')}</p>
                  {budget.pages && (
                    <>
                <p className='py-1 font-medium'><ArrowSmallRightIcon  className="inline h-5 w-5 text-gray-800 mr-2" aria-hidden="true" />Número de páginas: {budget.pages}</p>
                    </>
                  )}
                  {budget.languages && (
                    <>
                    <p className='py-1 font-medium'><ArrowSmallRightIcon  className="inline h-5 w-5 text-gray-800 mr-2" aria-hidden="true" />Número de idiomas: {budget.languages}</p>
                    </>
                  )}
                </>
              ) : (
                <>
                <p className='py-1 font-medium'><ExclamationTriangleIcon  className=" inline h-7 w-7 text-red-500 mr-2" aria-hidden="true" />Servicios: No hay servicios seleccionados</p>
                </>
              )}
              <p className='py-1 font-medium'><CurrencyEuroIcon className=" inline h-7 w-7 text-gray-800 mr-2" aria-hidden="true" />Total: {budget.totalPrice} € </p>
              <p className='py-1 font-medium'><CalendarDaysIcon className=" inline h-7 w-7 text-gray-800 mr-2" aria-hidden="true" />Fecha: {budget.date.toString()}</p>
            </li>
          ))}
        </ul>
      ) : (
         <p>No hay presupuestos</p>
      )}
      
    </div>

  );
}

export default BudgetsList;
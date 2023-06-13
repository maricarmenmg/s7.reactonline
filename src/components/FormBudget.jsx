import React, { useState, useEffect } from 'react';
import services from '../data/services';
import TotalCalculator from './TotalCalculator';
import Panel from './Panel';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/useLocalStorage';
import { SwatchIcon, ChartBarIcon, MegaphoneIcon } from '@heroicons/react/24/solid';
import BudgetImage from '../images/budget/budget-image.png';


function renderIcon(iconName) {
  switch (iconName) {
    case 'SwatchIcon':
      return <SwatchIcon className="h-5 w-5 text-indigo-600" aria-hidden="true" />;
    case 'ChartBarIcon':
      return <ChartBarIcon className="h-5 w-5 text-indigo-600" aria-hidden="true" />;
    case 'MegaphoneIcon':
      return <MegaphoneIcon className="h-5 w-5 text-indigo-600" aria-hidden="true" />;
    default:
      return null;
  }
}

function BudgetForm() {

  const [servicesData, setServicesData] = useState(() => loadFromLocalStorage('servicesData', services));
  const [pages, setPages] = useState(() => loadFromLocalStorage('pages', 1));
  const [languages, setLanguages] = useState(() => loadFromLocalStorage('languages', 0));
  const [showPanel, setShowPanel] = useState(() => loadFromLocalStorage('showPanel', false));


  const handleCheckboxChange = (index) => {
    const updatedServicesData = [...servicesData];
    updatedServicesData[index].checked = !updatedServicesData[index].checked;
    setServicesData(updatedServicesData);

    if (updatedServicesData[index].name === 'Página web') {
      setShowPanel(updatedServicesData[index].checked);
    }
  };

  const handlePageChange = (value) => {
    setPages(value);
  };

  const handleLanguageChange = (value) => {
    setLanguages(value);
  };

  useEffect(() => {
    saveToLocalStorage('servicesData', servicesData);
  }, [servicesData]);
  
  useEffect(() => {
    saveToLocalStorage('pages', pages);
  }, [pages]);
  
  useEffect(() => {
    saveToLocalStorage('languages', languages);
  }, [languages]);
  
  useEffect(() => {
    saveToLocalStorage('showPanel', showPanel);
  }, [showPanel]);
  
  function openModal (name) {
    setTitleModal(name)
    setInfoModal(true)
  }

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h3 className="mt-2 h3 font-sora font-bold tracking-tight text-gray-900 sm:text-4xl">
                Solicita tu presupuesto
              </h3>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                No dudes en ponerte en contacto con nosotros hoy mismo para explorar cómo podemos ayudarte a llevar tu
                presencia online al siguiente nivel!
              </p>


              {/* Budget Form */}
              <div className="p-6 mt-10 max-w-xl space-y-8 text-xl leading-7 text-gray-600 lg:max-w-none bg-white border border-gray-200 rounded-lg shadow">
                {servicesData.map((service, index) => (
                  <div key={service.name} className="relative flex items-center">
                    <input
                      type="checkbox"
                      name={service.name}
                      checked={service.checked}
                      onChange={() => handleCheckboxChange(index)}
                      className="mr-4 font-sora"
                    />
                    {renderIcon(service.icon)}
                    <div className="inline font-semibold font-sora text-gray-900 ml-2">{service.name}</div>
                    <div className="inline text-gray-400 text-lg font-sora font-bold ml-1">{service.price} €</div>
                  </div>
                ))}

               {/* Budget Panel Pages - Languages */}
                <Panel
                 handlePageChange={handlePageChange}
                 handleLanguageChange={handleLanguageChange} 
                 showPanel={showPanel}
                 />

                {/* Budget Total */}
                <TotalCalculator servicesData={servicesData} pages={pages} languages={languages} />
              </div>
            </div>
          </div>
          <img src={BudgetImage} className="md:max-w-none" width="484" height="559" alt="Budget Images" />
        </div>
      </div>

    </div>
  );
}

export default BudgetForm;
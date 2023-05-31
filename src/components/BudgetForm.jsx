import React, { useState, useEffect } from 'react';
import { SwatchIcon, AcademicCapIcon, ServerStackIcon } from '@heroicons/react/24/solid';

import HeroImage from '../images/hero/hero-image.png';

const services = [
  {
    name: 'Página web',
    price: 500,
    icon: SwatchIcon,
    checked: false,
    numberOfPages: 'Número de páginas',
    numberOfLanguages: 'Número de idiomas',
  },
 
  {
    name: 'Campaña SEO',
    price: 300,
    icon: AcademicCapIcon,
    checked: false,
  },

  {
    name: 'Campaña de publicidad',
    price: 200,
    icon: ServerStackIcon,
    checked: false,
  },
];

function Panel({ handlePageChange, handleLanguageChange, showPanel }) {
  const [pages, setPages] = useState(0);
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

  if (!showPanel) {
    return null;
  }

  return (
    <div className="mt-6">
      <div className="mb-4">
        <label htmlFor="pages" className="mr-2 font-semibold text-gray-900">
          Número de páginas:
        </label>
        <input
          type="number"
          id="pages"
          name="pages"
          min="0"
          value={pages}
          onChange={handlePagesChange}
          className="w-16 px-2 py-1 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="languages" className="mr-2 font-semibold text-gray-900">
          Número de idiomas:
        </label>
        <input
          type="number"
          id="languages"
          name="languages"
          min="0"
          value={languages}
          onChange={handleLanguagesChange}
          className="w-16 px-2 py-1 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
}

function BudgetForm() {
  const [servicesData, setServicesData] = useState(services);
  const [totalPrice, setTotalPrice] = useState(0);
  const [pages, setPages] = useState(0);
  const [languages, setLanguages] = useState(0);
  const [showPanel, setShowPanel] = useState(false);

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
    let total = 0;

    servicesData.forEach((service) => {
      if (service.checked) {

        total += service.price;
  
        if (service.numberOfPages === 'Número de páginas') {
          total += pages * 30;
        }
  
        if (service.numberOfLanguages === 'Número de idiomas') {
          total += languages * 30;
        }
      }
    });
  
    setTotalPrice(total);
  }, [servicesData, pages, languages]);


  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Solicita tu presupuesto
              </p>
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
                      className="mr-4"
                    />
                    <service.icon className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                    <div className="inline font-semibold text-gray-900 ml-2">{service.name}</div>
                    <div className="inline font-bold ml-1">{service.price} €</div>
                  </div>
                ))}

               {/* Budget Panel Pages Languages */}
                <Panel
                 handlePageChange={handlePageChange}
                 handleLanguageChange={handleLanguageChange}
                 showPanel={showPanel}
                 />

                {/* Budget Total */}
                <div className="flex items-center justify-between border-t-2 border-gray-200 border-dotted pt-5">
                  <span className="text-2xl font-bold font-sora text-project-200 dark:text-white">
                    Total: {totalPrice} €{' '}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <img src={HeroImage} className="md:max-w-none" width="384" height="459" alt="Hero Images" />
        </div>
      </div>

    </div>
  );
}

export default BudgetForm;

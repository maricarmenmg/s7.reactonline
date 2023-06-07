import React, { useState, useEffect } from 'react';
import services from '../data/services';
import BudgetImage from '../images/budget/budget-image.png';
import Panel  from './Panel';

function BudgetForm() {
  const [servicesData, setServicesData] = useState(services);
  const [totalPrice, setTotalPrice] = useState(1);
  const [pages, setPages] = useState(1);
  const [languages, setLanguages] = useState(0);
  const [showPanel, setShowPanel] = useState(false);

  

  // Almacenar los datos en el localStorage cuando cambien los campos
  useEffect(() => {
    localStorage.setItem('pages', pages.toString());
    localStorage.setItem('languages', languages.toString());
  }, [pages, languages]);

// Cargar los datos del localStorage al iniciar el componente
  useEffect(() => {
    const savedPages = localStorage.getItem('pages');
    const savedLanguages = localStorage.getItem('languages');

    if (savedPages) {
      setPages(parseInt(savedPages, 10));
      console.log('Páginas Guardado en localStorage');
    }

    if (savedLanguages) {
      setLanguages(parseInt(savedLanguages, 10));
      console.log('Idiomas Guardado en localStorage');
    }
  }, []);


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
              <h3 className="mt-2 h3 font-bold tracking-tight text-gray-900 sm:text-4xl">
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
                    <service.icon className="h-5 w-5 text-indigo-600" aria-hidden="true" />
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
                <div className="flex items-center justify-between border-t-2 border-gray-200 border-dotted pt-5">
                  <span className="text-2xl font-bold font-sora text-project-400 dark:text-white">
                    Total: {totalPrice}  {' € '}
                  </span>
                </div>
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

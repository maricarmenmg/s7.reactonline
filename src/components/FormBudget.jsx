import React, { useState, useEffect } from 'react';
import services from '../data/services';
import TotalCalculator from './TotalCalculator';
import Panel from './Panel';
import BudgetsList from './BudgetsList';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/useLocalStorage';
import { SwatchIcon, ChartBarIcon, MegaphoneIcon, PlusCircleIcon  } from '@heroicons/react/24/solid';
import BudgetImage from '../images/budget/budget-image.png';

function renderIcon(iconName) {
  switch (iconName) {
    case 'SwatchIcon':
      return <SwatchIcon className="h-5 w-5 text-project-500" aria-hidden="true" />;
    case 'ChartBarIcon':
      return <ChartBarIcon className="h-5 w-5 text-project-500" aria-hidden="true" />;
    case 'MegaphoneIcon':
      return <MegaphoneIcon className="h-5 w-5 text-project-500" aria-hidden="true" />;
    case 'PlusCircleIcon':
      return <PlusCircleIcon className="h-5 w-5 text-project-500" aria-hidden="true" />;
    default:
      return null;
  }
}

function FormBudget() {
  const [servicesData, setServicesData] = useState(() => loadFromLocalStorage('servicesData', services));
  const [pages, setPages] = useState(() => loadFromLocalStorage('pages', 1));
  const [languages, setLanguages] = useState(() => loadFromLocalStorage('languages', 0));
  const [showPanel, setShowPanel] = useState(() => loadFromLocalStorage('showPanel', false));
  const [selectedServices, setSelectedServices] = useState([]);
  const [budgetList, setBudgetList] = useState([]);
  const [budgetName, setBudgetName] = useState('');
  const [clientName, setClientName] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [showImage, setShowImage] = useState(true);
 
  const handleCheckboxChange = (index) => {
    const updatedServicesData = [...servicesData];
    updatedServicesData[index].checked = !updatedServicesData[index].checked;
    setServicesData(updatedServicesData);

    if (updatedServicesData[index].name === 'Página web') {
      setShowPanel(updatedServicesData[index].checked);
    }

    const selectedServices = updatedServicesData.filter(service => service.checked);
    setSelectedServices(selectedServices);
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

  useEffect(() => {
    saveToLocalStorage('selectedServices', selectedServices);
  }, [selectedServices]);

  useEffect(() => {
    const selectedServices = servicesData.filter(service => service.checked);
    setSelectedServices(selectedServices);
  }, [servicesData]);


  const handleTotalPriceChange = (totalPrice) => {
    setTotalPrice(totalPrice);
  };
  
  const handleGenerateBudget = (budgetName, clientName, selectedServices, totalPrice) => {
    const fecha = new Date();
    const day = fecha.getDate();
    const month = fecha.getMonth() + 1; 
    const year = fecha.getFullYear();
    const budgetDate = `${day}/${month}/${year}`;

    const nuevoPresupuesto = {
      budgetName: budgetName,
      clientName: clientName,
      services: selectedServices,
      pages: pages,
      languages: languages,
      totalPrice: totalPrice,
      date: budgetDate,
    };
  
    setBudgetList((prevBudgets) => [...prevBudgets, nuevoPresupuesto]);
  
    setBudgetName('');
    setClientName('');
    setTotalPrice(0);
  
    setShowImage(false);
   };
  
  
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
                <TotalCalculator
                  servicesData={servicesData}
                  pages={pages}
                  languages={languages}
                  onTotalPriceChange={setTotalPrice}
                />
                {/* Budget Name */}
                <div>
                  <label htmlFor="budgetName" className="block text-lg font-sora font-semibold text-gray-900">
                    Nombre del presupuesto:
                  </label>
                  <input
                    id="budgetName"
                    type="text"
                    value={budgetName}
                    onChange={(e) => setBudgetName(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  />
                </div>

                {/* Client Name */}
                <div>
                  <label htmlFor="clientName" className="block text-lg font-sora font-semibold text-gray-900">
                    Nombre del cliente:
                  </label>
                  <input
                    id="clientName"
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  />
                </div>

                {/* Generate Budget Button */}
                <button
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium font-sora  rounded-full  text-white bg-project-500 hover:bg-project-900 hover:border border-3 border-project-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() =>
                    handleGenerateBudget(budgetName, clientName, selectedServices, totalPrice)
                  }
                >
                  <PlusCircleIcon className="h-5 w-5 text-gray-100  mr-3" aria-hidden="true" /> Guardar Presupuesto
                </button>
              </div>
            </div>
          </div>
          <div>
            {/* Show/hide the image */}
            {showImage && <img src={BudgetImage} className="md:max-w-none mt-60 ml-30 " width="484" height="559" alt="Budget Images" />}
            {/* Budget list */}
            {budgetList.length > 0 && <BudgetsList budgetList={budgetList} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormBudget;
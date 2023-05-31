import React, { useState, useEffect } from 'react';
import { SwatchIcon, AcademicCapIcon, ServerStackIcon, CurrencyEuroIcon} from '@heroicons/react/24/solid';





import HeroImage from '../images/hero/hero-image.png';

const services = [
  {
    name: 'Página web',
    price: 500,
    icon: SwatchIcon,
    checked: false,
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

function BudgetForm() {
  const [servicesData, setServicesData] = useState(services);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCheckboxChange = (index) => {
    const updatedServicesData = [...servicesData];
    updatedServicesData[index].checked = !updatedServicesData[index].checked;
    setServicesData(updatedServicesData);
  };

  useEffect(() => {
    let total = 0;

    servicesData.forEach((service) => {
      if (service.checked) {
        total += service.price;
      }
    });

    setTotalPrice(total);
  }, [servicesData]);

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Solicita tu presupuesto</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              No dudes en ponerte en contacto con nosotros hoy mismo para explorar cómo podemos ayudarte a llevar tu presencia online al siguiente nivel!
              </p>

            {/* Budget Form */}
              <dl className="p-6 mt-10 max-w-xl space-y-8 text-xl leading-7 text-gray-600 lg:max-w-none bg-white border border-gray-200 rounded-lg shadow">
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
                    <dt className="inline font-semibold text-gray-900 ml-2">
                      {service.name}
                    </dt>
                    <dd className="inline font-bold ml-1">{service.price} €</dd>
                  </div>

                ))}
  
         {/* Budget Total */}
              <div class="flex items-center justify-between border-t-2 border-gray-200 border-dotted pt-5">
              <span class="text-2xl font-bold font-sora text-project-200 dark:text-white">Total: {totalPrice} € </span>
             </div>
             </dl>


            </div>
          </div>
          <img src={HeroImage} className="md:max-w-none" width="384" height="459" alt="Hero Images" />
        </div>
      </div>
    </div>
  );
}

export default BudgetForm;

import React, { useEffect, useState } from 'react';

function TotalCalculator({ servicesData, pages, languages }) {
  const [totalPrice, setTotalPrice] = useState(0);

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
    <div className="flex items-center justify-between border-t-2 border-gray-200 border-dotted pt-5">
      <span className="text-2xl font-bold font-sora text-project-400 dark:text-white">
        Total: {totalPrice} €
      </span>
    </div>
  );
}

export default TotalCalculator;
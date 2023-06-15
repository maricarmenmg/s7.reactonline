import React, { useEffect, useState } from 'react';

function TotalCalculator({ servicesData, pages, languages, onTotalPriceChange }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let calculatedTotal = 0;

    servicesData.forEach((service) => {
      if (service.checked) {
        calculatedTotal += service.price;

        if (service.numberOfPages === 'Número de páginas') {
          calculatedTotal += pages * 30;
        }

        if (service.numberOfLanguages === 'Número de idiomas') {
          calculatedTotal += languages * 30;
        }
      }
    });

    setTotal(calculatedTotal);
    onTotalPriceChange(calculatedTotal);
  }, [servicesData, pages, languages, onTotalPriceChange]);

  return (
    <div className="flex items-center justify-between border-t-2 border-gray-200 border-dotted pt-5">
      <span className="text-2xl font-bold font-sora text-project-400 dark:text-white">
        Total: {total} €
      </span>
    </div>
  );
}

export default TotalCalculator;

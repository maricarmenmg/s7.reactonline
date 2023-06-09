import React from 'react';

import { SwatchIcon, ChartBarIcon, MegaphoneIcon } from '@heroicons/react/24/solid';

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
function Quantit

export default Quantity;

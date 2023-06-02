import React from 'react';

import { SwatchIcon,  ChartBarIcon , MegaphoneIcon} from '@heroicons/react/24/solid';

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
    icon: ChartBarIcon,
    checked: false,
  },

  {
    name: 'Campaña de publicidad',
    price: 200,
    icon: MegaphoneIcon ,
    checked: false,
  },
];

export default services;
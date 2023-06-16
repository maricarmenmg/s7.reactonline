import React from 'react';
import { Link } from 'react-router-dom';

import HeroImage from '../images/hero/hero-image.png';


  export default function Hero() {
    
  return (
    <section className="relative"> {/* Bg */}
      <div className="absolute inset-0 bg-project-100 pointer-events-none -z-10" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-60 md:pb-20 ">
          {/* Hero content */}
          <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row">
            {/* Content */}
            <div className="md:w-[640px]">
              {/* Copy */}
              <h1 className="h1 font-normal mb-6" data-aos="fade-right" data-aos-delay="100">
              ¿Listo para comenzar un proyecto.{' 🚀 '}

              </h1>
              <p className="text-xl text-gray-600 mb-10" data-aos="fade-right" data-aos-delay="200">
              Nuestro objetivo es ayudarte a construir una presencia digital efectiva para tu negocio.
              </p>
              {/* Buttons */}
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-20"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div>
                  <Link className="btn text-white bg-project-500 hover:bg-blue-600 w-full shadow-sm" to="/budget">
                    Solicita tu presupuesto
                  </Link>
                </div>
  
              </div>
   
              
            </div>
            {/* Image */}
            <div
              className="max-w-sm mx-auto md:max-w-none md:absolute md:left-[40rem] md:ml-16 lg:ml-32 xl:ml-32 mt-12 md:-mt-12"
            >
              <img src={HeroImage} className="md:max-w-none" width="384" height="459" alt="Hero Images" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



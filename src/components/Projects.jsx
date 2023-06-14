import React from 'react';

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://cdn.dribbble.com/userupload/6581071/file/original-88c9b4c84677b01065696bd40b8049ca.png?compress=1&resize=2048x1536',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },



]
export default function Projects() {

return (

  <section className="relative"> 
      <div className="max-w-6xl mx-auto px-4 sm:px-6 p-20 ">
      <div className="py-12 md:py-22 ">
        <div className="max-w-3xl mx-auto text-center  md:pb-10">
          <h2 className="h2 font-sora font-normal ">Nuestros Proyectos</h2>
          <h2 className="text-2xl font-normal  tracking-tight text-gray-900">Customers also purchased</h2>
        </div>
      
      </div>
      </div>
    </section>
  );
}

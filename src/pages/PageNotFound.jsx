import React from 'react';
import { Link } from 'react-router-dom';

import  Header  from '../components/Header';
import  Footer  from '../components/Footer';
import  NotFoundImage from '../images/dino.png';

function PageNotFound() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center">
                {/* Top image */}
                <div className="relative inline-flex flex-col mb-6" data-aos="fade-up">
                <img src={NotFoundImage} width="136" height="136" alt="Hero Images" />
                </div>
                {/* 404 content */}
                <h2 className="h2 mb-4 font-normal  font-sora leading-tight">Ups! <br/> parece que esta página <br/> ya no existe. </h2>
                <p className="font-sora text-2xl text-gray-600 text-center mt-10">Si quieres volver a la página de  <Link to="/" className="text-project-500 hover:text-gray-500 ">🏡 inicio</Link> que existe, o prueba a verificar la URL.</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default PageNotFound;
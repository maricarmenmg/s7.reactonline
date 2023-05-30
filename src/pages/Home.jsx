import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';


function Home() {
  return (

    
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <Hero />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
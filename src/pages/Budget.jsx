import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BudgetForm from '../components/BudgetForm';


function Budget() {

  
  return (

    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <BudgetForm/>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Budget;
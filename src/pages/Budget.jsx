// https://www.w3schools.com/react/default.asp

import  React from 'react';
import  Header  from '../components/Header';
import  Footer  from '../components/Footer';
import  FormBudget from '../components/FormBudget';

function Budget() {

  return (

    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <FormBudget />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Budget;
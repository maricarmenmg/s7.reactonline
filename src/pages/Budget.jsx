import React from 'react';
import { Link } from 'react-router-dom';


function Budget() {

  return (

    <div className="flex flex-col justify-center items-center min-h-full bg-green-400">
      <h1 className="text-xl2 text-gray-700 font-semibold mb-4 p-10">Hello Budget</h1>
      <Link to="/">Go back to Home</Link>
    </div>

  );

}

export default Budget;
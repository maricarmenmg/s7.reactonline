import React from 'react';

function Budgets({ presupuestos }) {
  return (
    <div className="mt-8">
      <h3 className="mt-2 h3 font-sora font-bold tracking-tight text-gray-900 sm:text-3xl">Listado de Presupuestos</h3>
      {presupuestos.length === 0 ? (
        <h2 className="mt-2 h3 font-sora font-bold tracking-tight text-gray-900 sm:text-2xl">No hay presupuestos generados.</h2>
      ) : (
        <ul className="space-y-4">
          {presupuestos.map((presupuesto, index) => (
            <li key={index}>
              <h3 className="text-lg font-bold">
                Presupuesto: {presupuesto.nombre} - Cliente: {presupuesto.cliente}
              </h3>
              <p>Servicio: {presupuesto.servicio}</p>
              <p>Precio Total: {presupuesto.precioTotal}€</p>
              <p>Fecha: {presupuesto.fecha.toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Budgets;
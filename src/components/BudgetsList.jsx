import React from 'react';

function BudgetsList({ budgetList }) {
  return (
    <div className="mt-8">
      <h3 className="font-sora font-bold text-xl mb-2">Listado de presupuestos:</h3>
      {budgetList.length > 0 ? (
        <ul>
          {budgetList.map((budget, index) => (
            <li key={index} className="mb-2">
              <strong>Presupuesto:</strong> {budget.budgetName}<br />
              <strong>Cliente:</strong> {budget.clientName}<br />
              <strong>Servicio:</strong> {budget.service}<br />
              <strong>Total:</strong> {budget.total} €<br />
              <strong>Fecha:</strong> {budget.date.toString()}<br />
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay presupuestos</p>
      )}
    </div>
  );
}

export default BudgetsList;
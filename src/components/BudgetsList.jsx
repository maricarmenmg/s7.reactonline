import React from 'react';

function BudgetsList({ budgetList }) {
  return (
    <div className="mt-8">
      {budgetList.length > 0 && <h3 className="font-sora font-bold text-xl mb-2">Listado de presupuestos:</h3>}
      {budgetList.length > 0 ? (
        <ul>
          {budgetList.map((budget, index) => (
            <li key={index} className="mb-2">
              <strong>Presupuesto:</strong> {budget.budgetName}<br />
              <strong>Cliente:</strong> {budget.clientName}<br />
              {budget.services.length > 0 ? (
                <>
                  <strong>Servicios:</strong> {budget.services.map(service => service.name).join(', ')}<br />
                  {budget.pages && (
                    <>
                      <strong>Número de páginas:</strong> {budget.pages}<br />
                    </>
                  )}
                  {budget.languages && (
                    <>
                      <strong>Número de idiomas:</strong> {budget.languages}<br />
                    </>
                  )}
                </>
              ) : (
                <>
                  <strong>Servicios: No hay servicios seleccionados</strong><br />
                </>
              )}
              <strong>Total:</strong> {budget.totalPrice} €<br />
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
import React from "react";
import './car_shop.css'

export const CarShop = ({ addProducts }) => {
  return (
    <div className="container-main">
      <h1 className="titulo">Productos elegidos</h1>
      <ul className="contain-imagen">
        {addProducts.length ? (
          addProducts.map((producto) => (
            <li key={producto.id}>
              <h2>{producto.name}</h2>
              <h2>{producto.description}</h2>
              <h2>{producto.price}</h2>
              <h2>{producto.color}</h2>
              <img src={producto.image_url} alt={producto.name} />
            </li>
          ))
        ) : (
          <div className="sin_productos">
            No hay productos en el carrito
            </div>
        )}
      </ul>
    </div>
  );
};
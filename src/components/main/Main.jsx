import { useEffect, useState } from "react";
import "./main.css";
import { CarShop } from "../car/CarShop";
import { Pedir_datos } from "../pedir_datos/Pedir_datos";

export const Main = ({ addProducts, setAddProducts}) => {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    
    Pedir_datos()
    .then((res)=>{
      setImagenes(res)
    })
  
    
  }, [])


  const handleAllProducts =(products)=>{
    setAddProducts([...addProducts, products])
    

  }
  console.log(addProducts)

  return (
    <div className="container-main">
      <h1 className="titulo">Productos de la Tienda</h1>
      <ul className="contain-imagen">
        {imagenes.map((products) => (
          <li key={products.id}>
            <h2>{products.name}</h2>
            <h2>{products.description}</h2>
            <h2>{products.price}</h2>
            <h2>{products.color}</h2>
            <img src={products.image_url} alt={products.name} />
            <button onClick={()=> handleAllProducts(products) }>agregar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

import productos from "../json/contenido.json";

export const Pedir_datos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(productos)
    }, 500)
  })
}

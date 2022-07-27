//1er paso. Crear contexto
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

//si o si necesito tener un componente, para crear un estado. No puedo crear un estado suelto.

//2do paso. Creo mi componente como una capa de abstraccion y llamamos a los children en app.js para poder visualizar nuevamente en pantalla los componentes
const Provider = (props) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  //aca abajo entre () recibo los parametros que envio desde addtocart en ItemDetail, con los nombres que yo quiera

  const addToCart = (item, cantidad) => {
    let newCart;
    let product = cart.find((product) => product.id === item.id);
    if (isInCart(item.id)) {
      product.cantidad += cantidad;
      newCart = [...cart];
    } else {
      product = { ...item, cantidad };
      newCart = [...cart, product];
    }
    setCart(newCart);
  };

  // const addToCart = (item, cantidad) => {
  //   if (isInCart(item.id)) {
  //sumo la cantidad

  //   alert("El producto ya esta en el carrito");
  // } else {
  //   setCart([...cart, { ...item, cantidad }]);
  //agrego al carrito
  // }

  //console.log({ ...item, cantidad });

  // console.log("agregando al carrito");
  // };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  //si en value paso solo una prop, van {}, si paso 2 o mas va {{}}
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
//a traves del value voy a poder pasar parametros a mis hijos

//el provider va a ser el que envuelva toda la aplicacion
export default Provider;

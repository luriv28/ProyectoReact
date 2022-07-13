import { useState } from "react";
import { useEffect } from "react";
import products from "../mock/products";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const handleClick = () => {
    alert("Proximamente podras visualizar todas nuestras novedades");
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    //aca dentro hago la promesa
    const traerProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
    //la informacion de lo que se resuelve en la promesa me llega por parametro, y le pongo el nombre que quiera -info-
    traerProductos.then((info) => {
      setItems(info);
    });
  }, []);

  return (
    <>
      <div>
        <a href="/" className="contenedorItemList">
          <h3 onClick={() => handleClick()}>{greeting}</h3>
        </a>
        <h3 className="container-titulo">Vibes</h3>
        <ItemList items={items} />
      </div>
    </>
  );
};
export default ItemListContainer;

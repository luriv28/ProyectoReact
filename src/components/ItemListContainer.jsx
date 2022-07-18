import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../mock/products";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const handleClick = () => {
    alert("Proximamente podras visualizar todas nuestras novedades");
  };

  const [items, setItems] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    //aca dentro hago la promesa
    const traerProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          category
            ? products.filter((obj) => obj.category === category)
            : products
        );
      }, 500);
    });
    //la informacion de lo que se resuelve en la promesa me llega por parametro, y le pongo el nombre que quiera -info-
    traerProductos.then((info) => {
      setItems(info);
    });
  }, [category]);

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

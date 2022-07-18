import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import products from "../mock/products";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  console.log(useState());
  const { id } = useParams;
  const TraerItemPorId = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((obj) => obj.id === id));
      }, 1000);
    });
  };

  useEffect(() => {
    TraerItemPorId().then((response) => {
      setItem(response);
    });
  }, []);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;

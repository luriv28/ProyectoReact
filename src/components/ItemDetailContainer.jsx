import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import products from "../mock/products";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const { id } = useParams();

  const TraerItemPorId = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((obj) => obj.id == id));
      }, 500);
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

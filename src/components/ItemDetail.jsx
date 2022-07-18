import products from "../mock/products";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const onAdd = (cantidad) => {
    console.log("seleccionaste ", cantidad, " items");
  };

  return (
    <div className="itemDetail">
      <div className="img-detail-cont">
        <img src={item.img} className="img-detail" />
      </div>
      <div className="text-container">
        <div className="titulo-container">
          <h4>{item.name}</h4>

          <h3 style={{ color: "red" }}>${item.price}</h3>
          <p>{item.description}</p>
          {/* <ItemCount stock={item.stock} precio={item.price} onAdd={onAdd} /> */}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

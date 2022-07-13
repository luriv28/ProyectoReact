import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
// import ItemCount from "./ItemCount";
const Item = ({ item, id }) => {
  // const onAdd = () => {
  //   console.log("click");
  // };

  //este componente se va a encargar de renderizar en el dom
  return (
    <div className="item">
      <Card style={{ width: "18rem" }}>
        <Card.Img className="item-img" variant="top" src={item.img} />

        <Card.Body>
          <Card.Title className="item-title">{item.name}</Card.Title>
          <Card.Text className="item-description">{item.price}</Card.Text>
          <Card.Text className="item-description">{item.description}</Card.Text>
          <Card.Text className="item-description">{item.stock}</Card.Text>
          <Button variant="danger">Go somewhere</Button>
        </Card.Body>
        {/* <ItemCount stock={item.stock} initial={1} onAdd={onAdd} /> */}
      </Card>
    </div>
  );
};

export default Item;

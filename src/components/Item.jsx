import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";

const Item = ({ item, id }) => {
  //este componente se va a encargar de renderizar en el dom
  return (
    <div className="container-fluid">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="./img/cuadro1.jpg" />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="danger">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;

import Card from "react-bootstrap/Card";
import { Link } from "react-router";

const CardRopa = ({ ropa }) => {
  return (
    <>
      <Card className="card-ropa">
        <Link>
          <Card.Img variant="top" src={ropa.imagen} />
        </Link>
        <Card.Body>
          <Link className="text-decoration-none text-dark Montserrat">
            <Card.Title className="Montserrat">{ropa.nombreProducto}</Card.Title>
            <Card.Text className="Montserrat">{ropa.descripcion}</Card.Text>
            <Card.Text>${ropa.precio}</Card.Text>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardRopa;

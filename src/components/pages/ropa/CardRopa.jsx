import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
const CardRopa = () => {
  return (
    <Col className="mb-3 card-ropa">
      <Card className="m-3 h-100" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://equusio.vtexassets.com/arquivos/ids/290550-500-auto?v=638912968771200000&width=500&height=auto&aspect=true"
        />
        <Card.Body>
          <Card.Title className="Montserrat">
            Camisa regular 100% algodón OSAKA
          </Card.Title>
          <Card.Text className="Montserrat">$74.000</Card.Text>
        </Card.Body>
      </Card>

    </Col>
  );
};

export default CardRopa;

import { Accordion, Table, Button } from "react-bootstrap";

const Administrador = () => {
  return (
    <section className="container">
      <h3 className="mt-5 Montserrat">ADMINISTRADOR</h3>
      <article className="my-4">
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="Montserrat">
              Productos
            </Accordion.Header>
            <Accordion.Body className="row">
              <div className="col-12 col-md-10">
                <Table
                responsive
                  striped
                  bordered
                  hover
                  className="Montserrat"
                >
                  <thead>
                    <tr className="text-center">
                      <th>Nombre</th>
                      <th>Categoría</th>
                      <th>Talle</th>
                      <th>Color</th>
                      <th>Precio</th>
                      <th>Cantidad stock</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </Table>
              </div>
              <div className="col-12 col-md-2 text-end order-first order-md-last my-3 my-md-0">
                <Button className="btn btn-success">
                  <i className="bi bi-file-earmark-plus"></i>
                </Button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </article>
    </section>
  );
};

export default Administrador;

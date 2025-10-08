import { Card } from "react-bootstrap";
import Perfil from '../../assets/sobreNosotros/imagenPerfil.webp'
import React from "react";

const SobreNosotros = () => {
  return (
    <>
    <div className="py-3 colorNavbarFooter text-light ">
      <h1 className="text-center Montserrat">
        🧍‍♂️Sobre Nosotros
      </h1>

    </div>
      <section className="container-fluid my-2 text-center">
        <article className="contenedorCard my-3 d-flex justify-content-center">
          <Card className="sobre-nosotros-card fade-in-right container">
            <h2 className="Montserrat">Cuatro desarrolladores. Una visión.</h2>
            <p>
              En <strong>Lannister</strong>, combinamos tecnología y estilo para
              crear una tienda pensada para el hombre moderno. Somos cuatro devs
              apasionados por el diseño, la moda y la experiencia digital. Lo
              que empezó como un proyecto entre colegas, hoy es una marca que
              busca redefinir cómo se ve y se siente la ropa masculina.
            </p>
          </Card>
        </article>
        <article className="contenedorCard container my-3">
          <Card className="sobre-nosotros-card fade-in-right">
            <h2 className="Montserrat">Más que prendas, actitud</h2>
            <p>
              Cada prenda que ofrecemos está pensada para hombres que valoran la
              elegancia, la comodidad y los detalles. En{" "}
              <strong>Lannister</strong>, no seguimos tendencias pasajeras:
              apostamos por un estilo atemporal, versátil y auténtico. Nuestra
              ropa acompaña al hombre en su día a día, desde una reunión
              importante hasta una salida casual.
            </p>
          </Card>
        </article>
        <article className="contenedorCard my-3 container">
          <Card className="sobre-nosotros-card fade-in-right">
            <h2 className="Montserrat">Tecnología + Estilo</h2>
            <p>
              Como desarrolladores, cuidamos cada aspecto de la experiencia
              digital. Queremos que comprar ropa sea tan intuitivo como vestirse
              bien. Por eso, trabajamos en una plataforma rápida, segura y
              pensada para que encuentres lo que buscás sin perder tiempo.
            </p>
          </Card>
        </article>
        <article className="contenedorCard container">
          <Card className="sobre-nosotros-card fade-in-right">
            <h2 className="Montserrat">¿Por qué confiar en Lannister?</h2>
            <ul className="list-unstyled">
              <li>⚫Porque somos usuarios antes que vendedores.</li>
              <li>⚫Porque creemos en la calidad antes que en la cantidad.</li>
              <li>
                ⚫Porque cada prenda que ves fue seleccionada con criterio y
                propósito.
              </li>
            </ul>
            <p>
              Gracias por formar parte de esta comunidad. Estamos acá para
              ayudarte a vestir mejor, sentirte mejor y mostrar tu mejor
              versión.
            </p>
          </Card>
        </article>
      </section>
      <section className="equipo-section">
        <div className="color-box">
          <div className="equipo-card fade-in-up">
           <h2 className="Bodoni">Lannister</h2>
            <div className="equipo-info">
              <h2 className="Montserrat">Conocé al equipo detrás de Lannister</h2>
              <div className="devs-grid">
                <div className="dev-card">
                  <h3>Figueroa Lucas</h3>
                  <img src={Perfil} className="img-fluid" alt="Imagen de Perfil" />
                  <p>Full Stack Developer</p>
                </div>
                <div className="dev-card">
                  <h3>Ortiz Hernan</h3>
                  <img src={Perfil} className="img-fluid" alt="Imagen de Perfil" />
                  <p>UX/UI Designer</p>
                </div>
                <div className="dev-card">
                  <h3>Blanco Juan</h3>
                  <img src={Perfil} className="img-fluid" alt="Imagen de Perfil" />
                  <p>Backend Specialist</p>
                </div>
                <div className="dev-card">
                  <h3>Barrojo Ignacio</h3>
                  <img src={Perfil} className="img-fluid" alt="Imagen de Perfil" />
                  <p>Frontend Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SobreNosotros;

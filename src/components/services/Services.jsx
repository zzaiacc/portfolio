import React from "react";
import "./services.css";
import { SlRocket } from "react-icons/sl";

const Services = () => {
  return (
    <section id="services">
      <h5> O que ofereço </h5>
      <h2> Serviços </h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3> Design UI/UX </h3>
          </div>

          <ul className="service__list">
            <li>
              <SlRocket className="service__list-icon" />
              <p> Design Responsivo </p>
            </li>
            <li>
              <SlRocket className="service__list-icon" />
              <p> Arquitetura da Informação </p>
            </li>
            <li>
              <SlRocket className="service__list-icon" />
              <p> Wireframing e Prototipagem </p>
            </li>
            <li>
              <SlRocket className="service__list-icon" />
              <p> Testes de Usabilidade </p>
            </li>
            <li>
              <SlRocket className="service__list-icon" />
              <p> Microinterações </p>
            </li>
            <li>
              <SlRocket className="service__list-icon" />
              <p> Acessibilidade </p>
            </li>
          </ul>
        </article>

        {/* FIM DO UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3> Desenvolvimento Web </h3>
          </div>
          <ul className="service__list">
            <li>
              <SlRocket className="service__list-icon" />
              <p> HTML (HyperText Markup Language) </p>
            </li>
            <li>
              <SlRocket className="service__list-icon" />
              <p> CSS (Cascading Style Sheets) </p>
            </li>
            <li>
              <SlRocket className="service__list-icon" />
              <p> JavaScript </p>
            </li>
            <li>
              <SlRocket className="service__list-icon" />
              <p> Responsive Web Design (RWD) </p>
            </li>
            <li>
              <SlRocket className="service__list-icon" />
              <p> Frameworks e Bibliotecas Front-End </p>
            </li>
            <li>
              <SlRocket className="service__list-icon" />
              <p> Integração de APIs</p>
            </li>
            {/* <li>
              <SlRocket className="service__list-icon" />
              <p> Bancos de Dados e SQL </p>
            </li> */}
          </ul>
        </article>

        {/* FIM DO DESENVOLVIMENTO WEB*/}

        {/* <article className="service">
          <div className="service__head">
            <h3> Ainda não sei o que colocar aqui </h3>
          </div>

          <ul className="service__list">
            <li>
              <SlRocket className="service__list-icon" />
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                sunt!{" "}
              </p>
            </li>
            <li>
              <SlRocket className="service__list-icon" />
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                sunt!{" "}
              </p>
            </li>
            <li>
              <SlRocket className="service__list-icon" />
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                sunt!{" "}
              </p>
            </li>
            <li>
              <SlRocket className="service__list-icon" />
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                sunt!{" "}
              </p>
            </li>
            <li>
              <SlRocket className="service__list-icon" />
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                sunt!{" "}
              </p>
            </li>
            <li>
              <SlRocket className="service__list-icon" />
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                sunt!{" "}
              </p>
            </li>
          </ul>
        </article> */}

        {/* FIM DE CRIAÇÃO DE CONTEUDO */}
      </div>
    </section>
  );
};

export default Services;

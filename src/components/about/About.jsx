import React from "react";
import "./about.css";
import ME from "../../assets/eu-about.jpg";
import { TbAward } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi";
import { AiOutlineFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5> Chega Mais </h5>
      <h2> Sobre Mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Sobre Mim Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbAward className="about__icon" />
              <h5> Experiência </h5>
              <small> 1+ Ano de Experiência </small>
            </article>

            <article className="about__card">
              <HiOutlineUsers className="about__icon" />
              <h5> Clientes </h5>
              <small> 3 clientes </small>
            </article>

            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5> Projetos </h5>
              <small> 10+ Completos </small>
            </article>
          </div>

          <p>
            Olá, Mundo! Como já viram logo acima, meu nome é Kauan, é um prazer
            ter você aqui! Sou apaixonado muito por cinema, jogos e codar. Desde
            pequeno tenho uma fascinação em criar coisas, desde jogos para uma
            diversão entre amigos, ou criar até mesmo soluções simples porém
            criativas para problemas do cotidiano.
          </p>

          <a href="#contact" className="btn btn-primary">
            {" "}
            Fale Comigo{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

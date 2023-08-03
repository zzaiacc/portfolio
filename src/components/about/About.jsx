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
              <small> 0 mil clientes </small>
            </article>

            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5> Projetos </h5>
              <small> 10+ Completos </small>
            </article>
          </div>

          <p>
            Olá, Mundo! Como já viram logo acima, meu nome é Kauan, muito prazer em me conhecer! Sou apaixonado por cinema e jogos (sei que você também é). Tenho um objetivo desde pequeno, criar um jogo realmente bom, bom mesmo, mas até lá estou na busca de conhecimento em diversas áreas da programação, aprendendo sempre algo novo, muito obrigado pela atenção, um beijo e se cuida!
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

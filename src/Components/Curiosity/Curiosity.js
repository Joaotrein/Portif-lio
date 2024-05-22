import React from "react";
import {
  CuriosityText,
  Curiositys,
  Photo2,
  PhotoEffect2,
  PhotoWrapper2,
} from "./Style";
import Foto2 from "../../Assets/Foto2.webp";

const Curiosity = () => {
  return (
    <>
      <Curiositys>
        <PhotoWrapper2>
          <PhotoEffect2 />
          <Photo2 src={Foto2} alt="Foto João" />
        </PhotoWrapper2>

        <CuriosityText>
          <h2>Conheça mais sobre mim!</h2>
          <p>
            Sou um entusiasta da tecnologia, com uma paixão especial por machine
            learning e data science. Ao longo dos últimos três anos, venho
            aprimorando minhas habilidades de programação, sempre em busca de
            novos desafios e aprendizados. Atualmente, atuo como analista de
            SEO, onde aplico meu conhecimento técnico para otimizar e melhorar a
            visibilidade de sites.
          </p>
          <p>
            No entanto, meu objetivo é aprofundar ainda mais no campo da
            tecnologia, explorando as vastas possibilidades oferecidas por
            machine learning e data science. Estou constantemente estudando e
            praticando para me especializar nessas áreas e contribuir
            significativamente com soluções inovadoras.
          </p>
          <p>
            Acredito que a combinação da minha experiência em SEO e minhas
            habilidades em programação me permite ter uma visão única e
            abrangente sobre os dados, o que é essencial para uma carreira
            bem-sucedida em tecnologia.
          </p>
        </CuriosityText>
      </Curiositys>
    </>
  );
};

export default Curiosity;

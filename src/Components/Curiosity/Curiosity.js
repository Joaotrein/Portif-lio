import React from "react";
import {
  CuriosityText,
  Curiositys,
  Photo2,
  PhotoEffect2,
  PhotoWrapper2,
} from "./Style";
import Foto2 from "../../Assets/Foto2.webp";

const Curiosity = ({ id }) => {
  return (
    <>
      <Curiositys id={id}>
        <PhotoWrapper2>
          <PhotoEffect2 />
          <Photo2 src={Foto2} alt="Foto João" />
        </PhotoWrapper2>

        <CuriosityText>
          <h2>Learn more about me</h2>
          <p>
            I am a technology enthusiast with a special passion for machine
            learning and data science. Over the past three years, I have been
            honing my programming skills, always seeking new challenges and
            learning opportunities. Currently, I work as an SEO analyst, where I
            apply my technical knowledge to optimize and improve website
            visibility.
          </p>
          <p>
            However, my goal is to delve even deeper into the field of
            technology, exploring the vast possibilities offered by machine
            learning and data science. I am constantly studying and practicing
            to specialize in these areas and significantly contribute to
            innovative solutions.
          </p>
          <p>
            I believe that the combination of my experience in SEO and my
            programming skills allows me to have a unique and comprehensive
            perspective on data, which is essential for a successful career in
            technology.
          </p>
        </CuriosityText>
      </Curiositys>
    </>
  );
};

export default Curiosity;

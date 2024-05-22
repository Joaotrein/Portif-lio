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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            cursus leo eu dapibus cursus. Duis a metus vitae metus ultricies
            mattis eget in leo. Aliquam nec hendrerit ex. Nam vel enim et nunc
            ullamcorper pharetra et eleifend ante. Duis vitae dolor cursus,
            tempus ligula eget, sagittis mauris. Praesent placerat tincidunt
            lacus, et rutrum tellus vehicula interdum. Suspendisse orci leo,
            porttitor id leo nec, dapibus aliquam magna. Maecenas ultrices velit
            sed eleifend varius. Curabitur at sem urna. Duis ultricies sapien
            non ex ultrices, et tincidunt tellus maximus. Donec sagittis
            vestibulum est et tincidunt. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris vel risus commodo, tincidunt ex nec, dictum
            nisl. Nullam at nunc vel ex convallis mattis vel et mi. Sed sed
            gravida dui, quis bibendum ligula.
          </p>
          <p>
            rper pharetra et eleifend ante. Duis vitae dolor cursus, tempus
            ligula eget, sagittis mauris. Praesent placerat tincidunt lacus, et
            rutrum tellus vehicula interdum. Suspendisse orci leo, porttitor id
            leo nec, dapibus aliquam magna. Maecenas ultrices velit sed eleifend
            varius. Curabitur at sem urna. Duis ultricies sapien non ex
            ultrices, et tincidunt tellus maximus. Donec sagittis vestibulum est
            et tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Mauris vel risus commodo, tincidunt ex nec, dictum nisl.
            Nullam at nunc vel ex con
          </p>
          <p>
            rper pharetra et eleifend ante. Duis vitae dolor cursus, tempus
            ligula eget, sagittis mauris. Praesent placerat tincidunt lacus, et
            rutrum tellus vehicula interdum. Suspendisse orci leo, porttitor id
            leo nec, dapibus aliquam magna. Maecenas ultrices velit sed eleifend
            varius. Curabitur at sem urna. Duis ultricies sapien non ex
            ultrices, et tincidunt tellus maximus. Donec sagittis vestibulum est
            et tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Mauris vel risus commodo, tincidunt ex nec, dictum nisl.
            Nullam at nunc vel ex con
          </p>
        </CuriosityText>
      </Curiositys>
    </>
  );
};

export default Curiosity;

import styled from "styled-components";

export const AboutArea = styled.div`
  display: flex;
  flex-direction: row;
  height: 50vh;
  background-color: #030712;
  padding: 80px;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    padding: 40px 20px;
  }

  @media (min-width: 768px) {
    height: auto;
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45vw;
  color: white;
  line-height: 25px;

  h1 {
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    max-width: 100vw;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) {
    max-width: 50vw;
  }
`;

export const SocialMidia = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;

export const PhotoWrapper = styled.div`
  position: relative;
  justify-content: flex-end;
  margin-left: 15vw;

  @media (max-width: 768px) {
    align-items: center;
    margin-top: 50px;
    margin-left: 25vw;
  }

  @media (min-width: 768px) {
    margin-left: 10vw;
  }
`;

export const Photo = styled.img`
  width: 13vw;
  position: relative;
  z-index: 2;
  border: solid 10px #030712;

  @media (max-width: 768px) {
    width: 25vw;
  }

  @media (min-width: 768px) {
    width: 15vw;
  }
`;

export const PhotoEffect = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
  width: 13vw;
  height: 15vh;
  background-color: #374151;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  z-index: 1;

  @media (max-width: 768px) {
    top: 27%;
    left: 15%;
    width: 30%;
    height: 85%;
    transform: translate(-10%, -10%);
  }

  @media (min-width: 768px) {
    top: 15%;
    left: 5vh;
    width: 100%;
    height: 60%;
  }

  @media (min-width: 1024px) {
    top: 15%;
    left: 5vh;
    width: 100%;
    height: 90%;
  }
`;

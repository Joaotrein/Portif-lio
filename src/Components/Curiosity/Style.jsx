import styled from "styled-components";

export const Curiositys = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  background-color: #111827;
  padding: 80px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 40px 20px;
  }

  @media (min-width: 768px) {
    flex-direction: column-reverse;
    padding: 100px 160px;
  }

  @media (min-width: 1024px) {
    flex-direction: column-reverse;
    padding: 100px 160px;
  }
`;

export const PhotoWrapper2 = styled.div`
  position: relative;
  display: flex;
  justify-content: center; 
  align-items: center; 
  margin-top: 30px;
  margin-left: 0;

  @media (min-width: 1024px) {
    justify-content: center;
    margin-top: 30px;
  }
`;

export const Photo2 = styled.img`
  width: 20vw;
  position: relative;
  z-index: 2;
  border: solid 10px #141826;

  @media (max-width: 768px) {
    width: 40vw;
  }

  @media (min-width: 768px) {
    width: 30vw;
  }

  @media (min-width: 1024px) {
    width: 20vw;
  }
`;

export const PhotoEffect2 = styled.div`
  position: absolute;
  top: 50%; 
  left: 50%; 
  width: 20vw;
  height: 22vh;
  background-color: #374151;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  z-index: 1;

  @media (max-width: 768px) {
    top: 25%;
    left: 40%;
    width: 40%;
    height: 80%;
  }

  @media (min-width: 768px) {
    top: 20%;
    left: 33%;
    width: 45%;
    height: 85%;
  }

  @media (min-width: 1024px) {
    top: 20%;
    left: 45%;
    width: 25%;
    height: 85%;
  }
`;

export const CuriosityText = styled.div`
  margin-right: 5vw;
  margin-left: 5vw;
  flex: 1;

  h2 {
    color: white;
    margin-bottom: 20px;
  }

  p {
    text-align: justify;
    color: white;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }

  @media (min-width: 1024px) {
    margin-left: 5vw;
    margin-right: 5vw;
  }
`;

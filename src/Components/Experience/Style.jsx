import styled from "styled-components";

export const ExperienceArea = styled.div`
  display: flex;
  padding: 80px;
  flex-direction: column;
  align-items: center;
  background-color: #111827;
  color: white;
  height: auto;

  h2 {
    text-align: center;
    padding-bottom: 50px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  background-color: #1f2937;
  padding: 30px;
  border-radius: 9px;
  width: 50vw;
  margin-bottom: 30px;

  h3 {
    padding-bottom: 10px;
  }

  img {
    width: 100%;
    height: auto;
    max-width: 100px;
    max-height: 100px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 90vw;
    padding: 20px;

    h3 {
      text-align: center;
      margin: 10px 0;
    }

    img {
      margin-bottom: 20px;
    }
  }
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;

  li {
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

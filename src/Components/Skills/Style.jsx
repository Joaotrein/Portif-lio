import styled from "styled-components";

export const SkillsArea = styled.div`
  height: auto;
  background-color: #030712;
  padding: 80px;
  color: white;

  h2 {
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const Skill = styled.ul`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 50px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% / 6);

    @media (max-width: 1200px) {
      width: calc(100% / 6);
    }

    @media (max-width: 992px) {
      width: calc(100% / 4);
    }

    @media (max-width: 768px) {
      width: calc(100% / 3);
      padding: 30px 0 0 0;
    }

    @media (max-width: 576px) {
      width: calc(100% / 2);
      padding: 20px 0 0 0;
    }
  }

  span {
    padding-top: 10px;
  }
`;

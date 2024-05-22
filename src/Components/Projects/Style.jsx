import styled from "styled-components";

export const ProjectsArea = styled.div`
  flex-direction: column;
  display: flex;
  height: auto;
  background-color: #030712;
  padding: 80px;
  align-items: center;
  color: white;

  h2 {
    text-align: center;
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
    margin-bottom: 100px;
  }
`;

export const ProjectsCard = styled.div`
  justify-content: center;
  height: auto;
  display: flex;
  width: 70vw;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90vw;
    margin-bottom: 20px;
  }
`;

export const ProjectCardText = styled.div`
  border-radius: 10px 0px 0px 10px;
  padding: 30px;
  width: 50%;
  background: #1f2937;

  h3 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 10px;
  }

  a {
    color: white;
    margin-top: 10px;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    border-radius: 10px 10px 0px 0px;
    width: 100%;
    padding: 20px;
  }
`;

export const TagsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 0;
  margin: 0;
  list-style: none;
  margin-bottom: 20px;
`;

export const Tag = styled.li`
  background-color: #374151;
  color: white;
  padding: 8px 15px;
  border-radius: 12px;
  font-size: 12px;
`;

export const ProjectImage = styled.div`
  display: flex;
  border-radius: 0px 10px 10px 0px;
  background: #374151;
  width: 50%;
  padding: 50px;
  justify-content: center;

  img {
    border-radius: 9px;
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    border-radius: 0px 0px 10px 10px;
    width: 100%;
    padding: 20px;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

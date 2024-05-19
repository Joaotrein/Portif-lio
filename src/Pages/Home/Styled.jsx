import styled from "styled-components";

export const AboutArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  background-color: #030712;
  padding: 80px;
`;

export const AboutText = styled.div`
  max-width: 45vw;
  color: white;
  line-height: 25px;

  h1 {
    margin-bottom: 15px;
  }
`;

export const SocialMidia = styled.div`
  display: flex; 
  gap: 20px;
  margin-top: 30px;
`;

export const Photo = styled.div`
     display: flex;
     justify-content: flex-end;
     margin-right: 15vw;
     
     img{
          width: 10vw;
     }
`


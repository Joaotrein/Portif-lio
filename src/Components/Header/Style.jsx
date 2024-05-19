import styled from "styled-components";

export const HeadContainer = styled.header`
  width: auto;
  background-color: #030712;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 8vh;
  padding-right: 80px;

  a {
    color: #18272f;
    position: relative;
    text-decoration: none;
  }

  a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background-color: #005481;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  a:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  nav {
    display: flex;
    gap: 1rem;
  }

  nav a {
    color: white;
    text-decoration: none;
  }

  span{
    color: white;
  }

  button{
    padding: 5px;
    border: none;
    background-color: #005481;
    border-radius: 5px;
    color: white;
    transition:  0.2s ease-in-out;

  }

  button:hover{
    background-color: white;
    color: #005481;
    transition:  0.2s ease-in-out;
    cursor: pointer;
    transform: scale(1.1)
  }
`;

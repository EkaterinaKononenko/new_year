import styled from 'styled-components';

export const SantaWrap = styled.div`
  width: 1200px;
`;

export const SantaList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 30px;
`;

export const Santa = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border: 2px solid transparent;
  object-fit: cover;
  padding-bottom: 0;
`;

export const ButtonWishes = styled.button`
  text-decoration: none;
  display: inline-block;
  padding: 10px 15px;
  margin: 5px 5px;
  border-radius: 10px;
  box-shadow: 0 0 30px 30px #ff0000 inset, 0 0 0 0 #ff0000;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  color: white;
  transition: 0.15s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px 0 #ff0000 inset, 0 0 10px 4px #ff0000;
    color: #ff0000;
  }
`;

export const ButtonPrediction = styled.button`
  text-decoration: none;
  display: inline-block;
  padding: 10px 15px;
  margin: 5px 5px;
  border-radius: 10px;
  box-shadow: 0 0 30px 30px #24a319 inset, 0 0 0 0 #24a319;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  color: white;
  transition: 0.15s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px 0 #24a319 inset, 0 0 10px 4px #24a319;
    color: #24a319;
  }
`;

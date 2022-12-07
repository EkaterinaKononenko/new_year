import React from 'react';
import {
  SantaWrap,
  SantaList,
  Santa,
  ButtonWishes,
  ButtonPrediction,
} from './Santalist.styled';

export const SantasList = ({ items }) => {
  return (
    <SantaWrap>
      <SantaList>
        {items.map(item => (
          <Santa key={item.id}>
            <img src={item.img} alt={item.label} width="200px"></img>
            <ButtonWishes type="button">wishes</ButtonWishes>
            <ButtonPrediction type="button">prediction</ButtonPrediction>
          </Santa>
        ))}
      </SantaList>
    </SantaWrap>
  );
};

import React, { Component } from 'react';
import santas from '../data/santas.json';
import { SantasList } from './Santaslist/SantasList';
//import { SantaItem } from './Modal/Modal';
import { WrapNewYear, TitleNewYear } from './App.styled';

export class App extends Component {
  state = {
    santas: [],
  };
  render() {
    //const { santas } = this.state;
    return (
      <WrapNewYear>
        <TitleNewYear>
          Happy New Year! Let's make choice. Take Santa and you will get wishes
          and prediction for the next Year.
        </TitleNewYear>
        <SantasList items={santas} />
      </WrapNewYear>
    );
  }
}

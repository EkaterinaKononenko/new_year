import React, { Component } from 'react';
import Modal from 'react-modal';
import {
  SantaWrap,
  SantaList,
  Santa,
  ButtonWishes,
  ButtonPrediction,
} from './Santalist.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export class SantasList extends Component {
  state = {
    openedModal: null,
  };

  openModal = type => {
    this.setState({ openedModal: type });
  };

  closeModal = () => {
    this.setState({ openedModal: null });
  };

  render() {
    const { openedModal } = this.state;
    const { items } = this.props;

    return (
      <SantaWrap>
        <SantaList>
          {items.map(item => (
            <Santa key={item.id}>
              <img src={item.img} alt={item.label} width="200px"></img>
              <ButtonWishes
                type="button"
                onClick={() => this.openModal('wishes')}
              >
                wishes
              </ButtonWishes>
              <ButtonPrediction
                type="button"
                onClick={() => this.openModal('prediction')}
              >
                prediction
              </ButtonPrediction>
            </Santa>
          ))}
        </SantaList>
        <Modal
          isOpen={openedModal === 'wishes'}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <button onClick={this.closeModal}>Close</button>
          <div>Wishes modal</div>
        </Modal>

        <Modal
          isOpen={openedModal === 'prediction'}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <button onClick={this.closeModal}>Close</button>
          <div>Prediction modal</div>
        </Modal>
      </SantaWrap>
    );
  }
}

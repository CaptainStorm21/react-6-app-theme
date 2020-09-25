import React, { Component } from 'react';
import Modal from './components/Modal';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  showModal = (e) => {
    this.setState(prevState => ({
        showModal: !prevState.showModal 
    }));
  }

  render() {
    return (
      <div className="container-fluid">
      <div className = "col-md-4">
        <p>
          Quis mollit eiusmod nulla ad enim eu laboris excepteur enim aliquip amet. Eu anim cillum do adipisicing mollit in ad magna velit et voluptate labore deserunt. Laboris dolore ex ut Lorem cupidatat in dolore fugiat et ea ipsum magna duis aute. In labore magna nulla proident.
        </p>
      </div>
        <button className = "btn btn-primary" onClick={this.showModal}>
          Click here
        </button>

        {this.state.showModal && 
          <Modal
            onCloseModal={this.showModal} 
          />
        }

      </div>
    );
  }
}

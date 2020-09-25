import React, { Component } from "react";


class Modal extends Component {
  closeCustomModal = (e) => {
    this.props.onCloseModal(e);
  };
  render() {
    return (
      <div id="myModal" >
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={this.closeCustomModal}>
              &times;
            </span>
            <h4>Modal Header</h4>
          </div>

          <div className="container-fluid">
            <p>
              Ea et ad cillum incididunt ex occaecat consectetur fugiat cillum.
              Magna enim voluptate minim id ullamco nisi veniam pariatur tempor
              ea exercitation ea. Elit irure magna ipsum ad aute esse mollit ea
              officia incididunt nulla velit ullamco. Exercitation laborum id
              enim Lorem laborum esse adipisicing nisi ipsum nulla anim est
              cupidatat id. Incididunt nulla do adipisicing reprehenderit.
            </p>
            <p>
              Ea et ad cillum incididunt ex occaecat consectetur fugiat cillum.
              Magna enim voluptate minim id ullamco nisi veniam pariatur tempor
              ea exercitation ea. Elit irure magna ipsum ad aute esse mollit ea
              officia incididunt nulla velit ullamco. Exercitation laborum id
              enim Lorem laborum esse adipisicing nisi ipsum nulla anim est
              cupidatat id. Incididunt nulla do adipisicing reprehenderit.
            </p>
            <p>
              Ea et ad cillum incididunt ex occaecat consectetur fugiat cillum.
              Magna enim voluptate minim id ullamco nisi veniam pariatur tempor
              ea exercitation ea. Elit irure magna ipsum ad aute esse mollit ea
              officia incididunt nulla velit ullamco. Exercitation laborum id
              enim Lorem laborum esse adipisicing nisi ipsum nulla anim est
              cupidatat id. Incididunt nulla do adipisicing reprehenderit.
            </p>
          </div>

          <div className="modal-footer">
            <h3>Modal Footer</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;



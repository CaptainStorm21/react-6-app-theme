import React, { useState } from "react";
import "./App.css";
import { Button, Modal } from "react-bootstrap";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container">
      <div className="header fixed-top bg-dark">
        <h2 className="text-warning">React Modal</h2>
      </div>
      <div className="jumbotron mt-5">
        <h1>React Modal</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
          facilisis lorem. Nam ornare vel nibh et mollis. Vivamus dolor sem,
          rhoncus sit amet tellus in, facilisis malesuada nisi. Donec non
          rhoncus sem, in auctor ante. Nam ut nisi viverra, vehicula leo eget,
          ornare odio. Ut ultricies consequat lectus at consectetur. Aliquam in
          tincidunt purus, ut molestie purus. Fusce sagittis ante sed tortor
          semper, at pharetra urna convallis. Maecenas eros odio, tincidunt ac
          porttitor ac, suscipit eu massa. Nullam at gravida nunc, in hendrerit
          erat. Quisque sodales ultrices finibus. Etiam molestie, felis quis
          interdum molestie, odio ipsum porttitor nulla, eget blandit ante est
          ac mauris.
        </p>
      </div>
      <div class="container">
        <div class="row">
          <div className="col-md-6 col-lg-6">
            <p>
              Elit et voluptate esse et pariatur aute id ipsum aliquip magna.
              Velit exercitation irure magna pariatur eu do in ea. Aliquip id
              duis reprehenderit minim voluptate sint non ex commodo commodo eu
              adipisicing. Elit et voluptate esse et pariatur aute id ipsum
              aliquip magna. Velit exercitation irure magna pariatur eu do in
              ea. Aliquip id duis reprehenderit minim voluptate sint non ex
              commodo commodo eu adipisicing.
            </p>
          </div>
          <div className="col-md-6 col-lg-6">
            <p>
              Elit et voluptate esse et pariatur aute id ipsum aliquip magna.
              Velit exercitation irure magna pariatur eu do in ea. Aliquip id
              duis reprehenderit minim voluptate sint non ex commodo commodo eu
              adipisicing. Elit et voluptate esse et pariatur aute id ipsum
              aliquip magna. Velit exercitation irure magna pariatur eu do in
              ea. Aliquip id duis reprehenderit minim voluptate sint non ex
              commodo commodo eu adipisicing.
            </p>
          </div>
          <div className="col-md-6 col-lg-6">
            <p>
              Elit et voluptate esse et pariatur aute id ipsum aliquip magna.
              Velit exercitation irure magna pariatur eu do in ea. Aliquip id
              duis reprehenderit minim voluptate sint non ex commodo commodo eu
              adipisicing. Elit et voluptate esse et pariatur aute id ipsum
              aliquip magna. Velit exercitation irure magna pariatur eu do in
              ea. Aliquip id duis reprehenderit minim voluptate sint non ex
              commodo commodo eu adipisicing.
            </p>
          </div>
          <div className="col-md-6 col-lg-6">
            {" "}
            <p>
              Elit et voluptate esse et pariatur aute id ipsum aliquip magna.
              Velit exercitation irure magna pariatur eu do in ea. Aliquip id
              duis reprehenderit minim voluptate sint non ex commodo commodo eu
              adipisicing.
            </p>
            <Button variant="primary" onClick={handleShow}>
              Open Demo Model
            </Button>
          </div>
        </div>
        <div className="footer fixed-bottom bg-warning">
          <p>The footer is placed at the bottom of the page.</p>
        </div>
      </div>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>React Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save It!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;

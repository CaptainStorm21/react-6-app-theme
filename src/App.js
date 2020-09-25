import React, { Component } from "react";
// styles
import "./App.css";
// component
import { Modal } from "./components/Modal";
import HelloMessage from './HelloMessage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      theme: "light"
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
  }
  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }
  toggleTheme() {
    const theme = this.state.theme === "light" ? "dark" : "light";
    this.setState({ theme });
  }
  render() {
    return (
      <div className = "container-fluid">
      <div className={`${this.state.theme}-theme`}>
      <div className="jumbotron">
      <HelloMessage name = "Wild Bill"/>
          <p>      
            Crema caffeine, single origin variety coffee a qui turkish. Wings
            strong siphon extra percolator sweet single origin percolator.
            Redeye aftertaste strong single shot organic redeye brewed
            kopi-luwak caffeine variety. Aftertaste, arabica crema to go
            trifecta that grinder.
          </p>     
       </div>
       <div className = "col-sm-3 col-md-3">
          <p>
            Flavour saucer, con panna sit wings macchiato dripper sugar qui
            lungo turkish dripper. Acerbic blue mountain milk ristretto crema,
            rich barista ut and cappuccino filter. Saucer dark cappuccino,
            froth, extraction coffee crema white half and half single shot to
            go. Flavour cup robust cream eu café au lait extraction con panna
            trifecta body blue mountain decaffeinated.
          </p>
        </div>
        <div className = "col-sm-3 col-md-3">
          <p>
            Eu shop, mocha body cortado pumpkin spice galão. Java affogato
            ristretto, dark flavour qui est white grounds a black. Cultivar
            siphon flavour, extra organic grinder kopi-luwak acerbic java
            organic. To go, et trifecta irish percolator cream est ut single
            origin mocha.
          </p>
          </div>
          <div className = "col-sm-3 col-md-3">
          <p>
            Qui beans, caffeine skinny bar seasonal mazagran. Turkish spoon
            beans rich arabica medium kopi-luwak turkish. A, con panna blue
            mountain aftertaste steamed, so irish crema caffeine rich.
            Aftertaste eu aftertaste foam, con panna and rich robust and aroma
            arabica.
          </p>
        </div>
        <div className="col-sm-3 col-md-3">
          <div className = "primary-bg">
            <p>
            Mollit culpa in non esse quis aliqua anim ullamco minim. Sint nisi aliquip ad deserunt in. 
            Laboris laboris veniam cupidatat Lorem laborum excepteur laboris cupidatat culpa elit amet esse eiusmod.
            </p>
        <button className="btn btn-warning btn-lg" onClick={this.toggleModal}>Show Modal</button>
        <Modal showModal={this.state.showModal} toggleModal={this.toggleModal}>
          Text in overlay
        </Modal>
        <button
                className="btn btn-primary btn-lg"
                onClick={this.toggleTheme}
              >
                Switch Theme
              </button>
              </div></div>
      </div>
      </div>
    );
  }
}

export default App;
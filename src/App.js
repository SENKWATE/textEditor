import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
};

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      color: "black",
      bold: false,
      italic: false,
      underline: false,
      bt: "",
      it: "",
      ut:"",
    }
    this.changeColor = this.changeColor.bind(this);
    this.Changestyle = this.Changestyle.bind(this);

  }


  changeColor(color){
    this.setState({ color: `${color}`});
  }

  Changestyle(style){

    this.setState({[style]: !this.state[style]}, () => {
      if (this.state.bold === true && this.state.italic === false && this.state.underline === false) {
        this.setState({bt: "bold", it:"", ut:""});
      }
      else if (this.state.bold === false && this.state.italic === true && this.state.underline === false) {
        this.setState({bt: "", it:"italic", ut:""});
      }
      else if (this.state.bold === false && this.state.italic === false && this.state.underline === true) {
        this.setState({bt: "", it:"", ut:"underline"});
      }
      else if (this.state.bold === true && this.state.italic === true && this.state.underline === false) {
        this.setState({bt: "bold", it:"italic", ut:""});
      }
      else if (this.state.bold === true && this.state.italic === false && this.state.underline === true) {
        this.setState({bt: "bold", it:"", ut:"underline"});
      }
      else if (this.state.bold === false && this.state.italic === true && this.state.underline === true) {
        this.setState({bt: "", it:"italic", ut:"underline"});
      }
      else if (this.state.bold === true && this.state.italic === true && this.state.underline === true) {
        this.setState({bt: "bold", it:"italic", ut:"underline"});
      }
      else {
        this.setState({bt: "", it:"", ut:""});
      }
    });

  }

  render() {
    let stylings = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple","green"];

    let stylingBoxes = stylings.map(style => {
      return (
        <button style={styles[style]} key={style} onClick={() => this.Changestyle(style)} className={`btn ${this.state[style] && "btn-primary"}`}>
          {style}
        </button>

      );
    });


    let colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => this.changeColor(color)}
        />
      );
    });

    return (
      <div className="App">
        <br />
        {stylingBoxes}
        <br />
        <br />
        <textarea style={{color: this.state.color, fontWeight: this.state.bt, fontStyle: this.state.it, textDecorationLine: this.state.ut}}/>
        <br />
        {colorBoxes}
      </div>
    );
  }
}

export default App;

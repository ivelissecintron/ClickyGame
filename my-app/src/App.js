import React, { Component } from "react";
import Officecharacters from "./officecharacters.json";
import Officecard from "./components/OfficeBody/Office.js";
import "./App.css";
import Navbar from "./components/Navbar/index.js";
import Wrapper from "./components/Wrapper/index.js";
import Footer from "./components/Footer/footer.js";

class App extends Component {

  state = {
    score: 0,
    highscore: 0,
    clicks: [],
    quote: "",
    Officecharacters
  };

  componentDidMount = () => {
    this.quote("The Office")
  }

  quote = quote => {
    this.setState({quote: quote})
  }

  shuffleArray = array => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

  checkClick = id => {
    if(this.state.clicks.includes(id)){
      this.setState({ score: 0, clicks: []});

    } else {
        if (this.state.score + 1 > this.state.highscore) {
          this.setState({
              highscore: this.state.score + 1
          })
        }
      this.state.clicks.push(id)
      this.setState({ score: this.state.score + 1});
    }
  };

  handleOnchange = (id, phrase) => {
    this.checkClick(id)
    this.shuffleArray(this.state.Officecharacters)
    this.setState({quote: phrase})
  };

  render() {
    return (
      <div>
        <Navbar quote = {this.state.quote} score = {this.state.score} highscore={this.state.highscore}/>
        <Wrapper >
            {this.state.Officecharacters.map(Officecharacters => (
              <span key={Officecharacters.id}>
                <Officecard
                  handleOnchange={this.handleOnchange}
                  id={Officecharacters.id}
                  name={Officecharacters.name}
                  image={Officecharacters.image}
                />
                </span>
            ))}
            </Wrapper >
            <Footer />
    </div>
    );
  }
}

export default App;

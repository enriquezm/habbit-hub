
import React from "react";
import ReactDOM from "react-dom";
import Challenge from "./components/Challenge";

import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      challenges: [
        {
          name: "Something",
          description:
            "A sample 100days challenge to start you off. Remove me if you like."
        }
      ],
      inputValue: ""
    };
    this.addChallenge = this.addChallenge.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  addChallenge(challengeName) {
    console.log(this.state.inputValue);
    let newChallengeList = [...this.state.challenges];
    newChallengeList.push({
      name: this.state.inputValue,
      description: "Some new challenge"
    });
    this.setState({
      inputValue: "",
      challenges: newChallengeList
    });
  }
  render() {
    return (
      <div className="wrapper">
        <div className="challenges-header">
          <h1>HabbitRabbit</h1>
          <p>Start small. Finish big. Build those habits with habbitRabbit!</p>
        </div>
        <div className="challenges-form">
          <h2>Why not add a challenge?</h2>
          <label>#100DaysOf</label>
          <input
            value={this.state.inputValue}
            onChange={this.handleChange}
            type="text"
          />
          <button onClick={this.addChallenge}>Add Challenge</button>
        </div>
        <div className="challenges-container">
          {this.state.challenges.map((challenge, index) => {
            return (
              <Challenge
                key={index}
                name={challenge.name}
                description={challenge.description}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
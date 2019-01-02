import React from "react";
import styled from "styled-components";
import DayBlock from "./DayBlock";
import AddDayButton from "./AddDayButton";

const CompleteMessage = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    color: #1affc5;
  }
  button {
    padding: 5px 10px;
    background: transparent;
    border: 1px solid #1affc5;
    border-radius: 4px;
    color: #1affc5;
    &:hover {
      color: #080027;
      background: #1affc5;
    }
  }
`;
const DayBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class DayContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [],
      isComplete: false,
      roundCounter: 1
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleAdd() {
    const maxCompleted = 100;
    const currentDays = this.state.days;
    const newDays = currentDays.length + 1;
    const newDaysArray = currentDays.slice();
    
    newDaysArray.push(String(newDays));
    if (newDays === maxCompleted) {
      this.setState({
        days: [newDaysArray],
        isComplete: true
      });
    } else {
      this.setState({
        days: newDaysArray
      });
    }
  }
  handleDelete() {
    let daysCopy = [...this.state.days];
    daysCopy.pop(); // remove last item in array
    this.setState({ days: daysCopy });
  }
  handleReset() {
    this.setState({
      days: [],
      isComplete: false,
      roundCounter: this.state.roundCounter + 1
    });
  }
  render() {
    if (this.state.isComplete) {
      return (
        <CompleteMessage>
          <h3>Congrats! You finished your challenge!</h3>
          <button onClick={this.handleReset}>Start this challenge over</button>
        </CompleteMessage>
      );
    } else {
      return (
        <DayBox>
          {this.state.days.map(day => {
            return (
              <DayBlock key={day} onClick={this.handleDelete} dayNum={day} />
            );
          })}
          <AddDayButton onClick={this.handleAdd} dayNum="+" />
        </DayBox>
      );
    }
  }
}

export default DayContainer;

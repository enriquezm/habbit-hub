import React from "react";
import DayContainer from "./DayContainer";
import styled from "styled-components";
import { FiCopy as Copy, FiEdit as Edit, FiTrash2 as Trash } from "react-icons/fi";

const Title = styled.h2`
  color: #ff1a54;
`;

const ChallengeWrapper = styled.div`
  margin: 0 5px 5px 0;
  padding: 10px;
  width: 45%;
  border-radius: 4px;
  border: 1px solid #4413ff;

  @media (max-width: 900px) {
    width: 45%;
  }
  @media (max-width: 300px) {
    width: 100%;
  }
`;
const Options = styled.div`
  display: flex;
  justify-content: space-between;
  
  padding: 0;
  button {
    padding: 5px 10px;
  }
`;

class Challenge extends React.Component {
  render() {
    return (
      <ChallengeWrapper>
        <Title>#100DaysOf{this.props.name}</Title>
        <p>{this.props.description}</p>
        <DayContainer />
        <hr />
        <Options>
          <div>
            <button><Copy /> Clone</button>
            <button><Edit /> Edit</button></div>
          <div>
            <button><Trash /> Remove</button>
          </div>
        </Options>
      </ChallengeWrapper>
    );
  }
}

export default Challenge;

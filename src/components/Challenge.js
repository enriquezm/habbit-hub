import React from "react";
import DayContainer from "./DayContainer";
import styled from "styled-components";

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

class Challenge extends React.Component {
  render() {
    return (
      <ChallengeWrapper>
        <Title>#100DaysOf{this.props.name}</Title>
        <p>{this.props.description}</p>
        <DayContainer />
      </ChallengeWrapper>
    );
  }
}

export default Challenge;

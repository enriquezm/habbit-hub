import React from "react";
import DayContainer from "./DayContainer";
import styled from "styled-components";

const Title = styled.h2`
  color: #ff1a54;
`;

const ChallengeWrapper = styled.div`
  margin-bottom: 20px;
  width: 30%;
  padding: 10px;
  border-radius: 4px;

  @media (max-width: 900px) {
    width: 50%;
  }
  @media (max-width: 600px) {
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

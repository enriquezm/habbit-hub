import React from "react";
import styled from "styled-components";

const Block = styled.div`
  width: 10%;
  height: 30px;
  border-radius: 4px;
  border: none;
  background: #dfdfdf;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  &:hover {
    background: #27ff51;
    cursor: pointer;
  }
`;

const AddDayButton = props => {
  return <Block onClick={props.onClick}>+</Block>;
};

export default AddDayButton;

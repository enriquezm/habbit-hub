import React from "react";
import styled from "styled-components";
import { FiTrash2 as Trash } from "react-icons/fi";

const Block = styled.button`
  width: 10%;
  height: 30px;
  margin-right: 2px;
  margin-bottom: 2px;
  border: none;
  border-radius: 4px;
  color: white;
  background: #5127ff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  &:hover {
    background: #ff1a54;
    color: white;
    cursor: pointer;
    transition: all 0.3s;
  }
`;

class DayBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
    this.updateHoverState = this.updateHoverState.bind(this);
  }
  updateHoverState() {
    this.setState({
      isHovered: !this.state.isHovered
    });
  }
  render() {
    return (
      <Block
        onClick={this.props.onClick}
        onMouseEnter={this.updateHoverState}
        onMouseLeave={this.updateHoverState}
        value={this.props.dayNum}
      >
        {this.state.isHovered ? <Trash /> : this.props.dayNum}
      </Block>
    );
  }
}

export default DayBlock;

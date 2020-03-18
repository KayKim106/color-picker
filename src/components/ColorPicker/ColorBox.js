import React from "react";

class ColorBox extends React.Component {
  constructor(props) {
    super();
  }
  handleCopyColorHex = hex => {
    let input = document.createElement("input");
    let body = document.querySelector("#root");
    body.append(input);
    input.value = hex;
    input.select();
    document.execCommand("copy");
    input.remove();
  };
  render() {
    const { hex } = this.props;
    return (
      <div
        style={{
          dispay: "flex",
          width: "25%",
          height: "25%",
          backgroundColor: hex,
        }}
        className="box-wrapper"
        onClick={e => this.handleCopyColorHex(hex)}
      >
        <div className="color-hex" style={{fontSize:"25%"}}>
        {hex}
        </div>
      </div>
    );
  }
}
export default ColorBox;

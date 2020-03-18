import React, { Component } from "react";
import "../../css/Color.css";
class ColorContainer extends Component {
  constructor(props) {
    super();

    this.state = {
      widthCount: 0
    };
  }

  componentDidMount() {
    const { screenWidth } = this.props;
    this.handleFlexWidthCount(screenWidth);
  }

  handleFlexWidthCount = width => {
    let widthCount = 0;
    if (width < 500) {
      widthCount = 1;
    } else if (width <= 750 && width >= 500) {
      widthCount = 2;
    } else if (width >= 750 && width <= 1024) {
      widthCount = 3;
    } else if (width >= 1024) {
      widthCount = 4;
    }
    this.setState({
      widthCount
    });
  };
  componentDidUpdate(prevProps, prevState) {
    const { screenWidth } = this.props;

    if (prevProps.screenWidth !== screenWidth) {
      this.handleFlexWidthCount(screenWidth);
    }
  }
  render() {
  
    const { count } = this.props;
    const { widthCount } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "0.2rem",
          height: 100 / (count / widthCount) + "%"
        }}
        className="colors-container"
      >
        {this.props.children}
      </div>
    );
  }
}
export default ColorContainer;

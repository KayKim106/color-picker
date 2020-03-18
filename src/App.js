import React from "react";
import "./App.css";
import ColorBox from "./components/ColorPicker/ColorBox";
import ColorContainer from "../src/components/ColorPicker/ColorsContainer";
import Header from "./components/Header"
import colors from "./json/color";
class App extends React.Component {
  state = {
    multiColors: [],
    screenWidth:0,
  };

  componentDidMount() {
    this.handleGetRandomColor();
    this.setScreenWidth(window);
    
    window.onresize = this.reportWindowResize
  }
  setScreenWidth = (screen) =>{
    this.setState({
      screenWidth:screen.innerWidth,
      screenHeight:screen.innerHeight
    })
  }
  handleGetRandomColor = () => {
    var rColor;
    let newColor = [];
    let newColors = [];
    colors.map((color) => {
      newColor = [];
      color.map(() => {
        rColor =
          "#" +
          Math.random()
            .toString(16)
            .substr(2, 6);
        newColor.push(rColor);
      });
      newColors.push(newColor);
    });

    this.setState({
      multiColors: newColors
    });
  };

  reportWindowResize = () =>{
     this.setScreenWidth(window)
  }
  
  render() {

    const { multiColors, screenWidth } = this.state;
    return (
      <div className="app">
        <Header handleGetRandomColor = {this.handleGetRandomColor} />
        <div
          className="color-container-wrapper"
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "100vh",
            flexWrap: "wrap",
            alignContent: "flex-end",
            paddingBottom:"1%",
            marginTop:"90px",
            overflow: "scroll",
          }}
        >
          {multiColors.map((m, mi) => {
            return (
              <ColorContainer key={mi} count={multiColors.length} screenWidth={screenWidth}>
                {m.map((color, i) => {
                  return <ColorBox hex={color} key={i} />;
                })}
              </ColorContainer>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;

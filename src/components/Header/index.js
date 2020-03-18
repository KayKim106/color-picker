import React from "react";

class Header extends React.Component {
  render() {
    const { handleGetRandomColor } = this.props;
    return (
      <div
        style={{
          display: "flex",
          background:"#fff",
          height: "90px",
          width: "100%",
          justifyContent:"space-between",
          alignItems:"center",
          position:"fixed",
          top:"0",
          zIndex:9,
   
        }}
      >
        <div></div>
        <div>COLOR GENERATOR</div>
        <div>
          <button className="refresh" onClick={handleGetRandomColor}>
            <i className="fa fa-refresh"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Header;

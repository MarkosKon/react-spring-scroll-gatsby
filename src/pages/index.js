import React from "react";
import VisibilitySensor from "../components/VisibilitySensor";
import "./style.css";


// styles
const centeredStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "100%"
};
const h2Styles = {
  fontSize: "82px",
  color: "white",
  backgroundColor: "black",
  padding: "16px 32px"
};

const App = () => {
  return (
    <div>
      <div
        style={{
          ...centeredStyles,
          height: "100vh",
          backgroundColor: "pink"
        }}
      >
        <VisibilitySensor>
          {({ isVisible }) => (
            <h2
              className={isVisible ? "fadeIn enter" : "fadeIn"}
              style={{ ...h2Styles }}
            >
              Hello
            </h2>
          )}
        </VisibilitySensor>
      </div>
      <div
        style={{
          ...centeredStyles,
          height: "100vh",
          // be careful not to hide
          // something useful.
          overflow: "hidden"
        }}
      >
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <h2
              className={isVisible ? "slideLeft enter" : "slideLeft"}
              style={{ ...h2Styles }}
            >
              World
            </h2>
          )}
        </VisibilitySensor>
      </div>
      <div
        style={{
          ...centeredStyles,
          height: "100vh",
          backgroundColor: "#afd4d4",
          // be careful not to hide
          // something useful.
          overflow: "hidden"
        }}
      >
        <VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
            <h2
              className={isVisible ? "slideUp enter" : "slideUp"}
              style={{ ...h2Styles }}
            >
              !!!
            </h2>
          )}
        </VisibilitySensor>
      </div>
    </div>
  );
};

export default App;

import React from "react"
import { Spring } from "react-spring/renderprops"

import VisibilitySensor from "../components/VisibilitySensor"
import "./style.css"

// styles
const centeredStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "100%",
}
const h2Styles = {
  fontSize: "82px",
}

const App = () => {
  return (
    <div>
      <div
        style={{
          ...centeredStyles,
          height: "100vh",
          backgroundColor: "pink",
        }}
      >
        <VisibilitySensor once>
          {({ isVisible }) => (
            <Spring delay={300} to={{ opacity: isVisible ? 1 : 0 }}>
              {({ opacity }) => (
                <h2 className="reveal" style={{ ...h2Styles, opacity }}>
                  Hello
                </h2>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </div>
      <div
        style={{
          ...centeredStyles,
          overflow: "hidden",
          height: "100vh",
        }}
      >
        <VisibilitySensor once partialVisibility>
          {({ isVisible }) => (
            <Spring
              delay={300}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(200px)",
              }}
            >
              {props => (
                <h2 className="reveal" style={{ ...h2Styles, ...props }}>
                  World
                </h2>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </div>
      <div
        style={{
          ...centeredStyles,
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "#afd4d4",
        }}
      >
        <VisibilitySensor once partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
            <Spring
              delay={300}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(400px)",
              }}
            >
              {props => (
                <h2 className="reveal" style={{ ...h2Styles, ...props }}>
                  !!!
                </h2>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </div>
    </div>
  )
}

export default App

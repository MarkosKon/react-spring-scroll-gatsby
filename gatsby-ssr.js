import React from "react"

export const onRenderBody = ({ setPreBodyComponents, setBodyAttributes }) => {
  setBodyAttributes({ className: "no-js" })
  setPreBodyComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `document.querySelector('body').classList.remove('no-js')`,
      }}
    />,
  ])
}

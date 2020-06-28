import React from "react"

{
  /* Receives title as a prop */
}
const Title = ({ title }) => {
  return (
    <div className="section-title">
      <h2>
        {/* Checks for title prop and returns the default if it's not passed */}
        {title || "default title"}
      </h2>
      <div className="under"></div>
    </div>
  )
}

export default Title

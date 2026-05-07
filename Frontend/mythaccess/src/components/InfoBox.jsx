import { NavLink } from "react-router-dom"

import { text } from "../content/infomation"
import acrop from "../assets/acrop.jpg"

function InfoBox({content}) {

  const matched = text.find((item) => item.label === content)
  
  return (
    <div className="info-box-container">
      <img className="acrop-image" src={acrop} alt="acrop"></img>
      <div className="info-box">
        <h2>{matched.title}</h2>
        <div>{matched.write_up}</div>
        <NavLink to="/" className="back-home-button">
        Home
        </NavLink>
      </div>
    </div>
  )
}

export default InfoBox
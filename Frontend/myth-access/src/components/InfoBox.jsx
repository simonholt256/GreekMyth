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
        <button className="back-home-button" onClick={() => navigate(`/`)}>Back home</button>
      </div>
    </div>
  )
}

export default InfoBox
import ShowcaseList from "./ShowcaseList"

function Showcase() {
  return (
    <>
      <h1>Notable figures</h1>
      <div className="showcase-box">
        <ShowcaseList type="olympians"/>
        <ShowcaseList type="titan"/>
        <ShowcaseList type="monster"/>
        <ShowcaseList type="hero"/>
      </div>
    </>
  )
}

export default Showcase
import ShowcaseList from "./ShowcaseList"

function Showcase() {
  return (
    <>
      <h1>Notable figures</h1>
      <div className="showcase-box">
        <ShowcaseList type="Olympian"/>
        <ShowcaseList type="Titan"/>
        <ShowcaseList type="Monster"/>
        <ShowcaseList type="Hero"/>
      </div>
    </>
  )
}

export default Showcase
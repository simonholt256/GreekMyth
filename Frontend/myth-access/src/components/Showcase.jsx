import ShowcaseList from "./ShowcaseList"

function Showcase() {
  return (
    <>
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
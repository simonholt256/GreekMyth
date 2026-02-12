function InfoBox() {
  return (
    <div className="info-box">
      <h1>{entity.name}</h1>
      <p>{entity.division}</p>
      <p>{entity.category}</p>
      <p>{entity.description}</p>
      <p>{entity.notes}</p>
    </div>
  )
}

export default InfoBox

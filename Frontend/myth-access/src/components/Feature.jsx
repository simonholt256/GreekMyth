import { useState, useEffect } from "react"





function GodList() {

  const [entity, setEntity] = useState(null)
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const baseURL = `http://127.0.0.1:8000/entities/id/`

  const entity_number = 1
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseURL + entity_number);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const json = await response.json();
        setEntity(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="feature-box">
        <div className="feature-label">Featured entity</div>
        <h1>{entity.name}</h1>
        <p>{entity.division}</p>
        <p>{entity.description}</p>
        <p>{entity.category}</p>
        <button className="random-button" onClick={() => alert(`Clicked: random, how to get random number?`)}>find random</button>
      </div>
    </>
  )
}

export default GodList
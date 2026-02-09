import { useEffect, useState } from "react"

function ShowcaseList({type}) {


  const [entities, setEntities] = useState(null)
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const baseURL = `http://127.0.0.1:8000/entities/`

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(baseURL + type);
  
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
  
          const json = await response.json();
          setEntities(json);
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
    <div className="showcase">
      <h2>{type}</h2>
      <ul>
        {entities.map((entity) => (
          <li key={entity.id} style={{
              cursor: "pointer",
            }} onClick={() => alert(`Clicked: ${entity.name}`)}>
            {entity.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShowcaseList
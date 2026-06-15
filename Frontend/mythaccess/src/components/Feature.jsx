import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function GodList() {

  const [entity, setEntity] = useState(null)
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

   /* edit chosenFeature to select featured*/
  const chosenFeature = 79
  const baseURL = `https://greekmyth-production.up.railway.app/entities`
  
  const navigate = useNavigate();

  // Load featured entity

  useEffect(() => {
    const fetchData = async () => {
      try {
        

        const response = await fetch(`${baseURL}/id/${chosenFeature}`);

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

  // find random entity

  const handleRandom = async () => {
    try {
      

      const res = await fetch(`${baseURL}/random`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const json = await res.json();
      setEntity(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log(entity)

  // Navigate to profile page

  const handleNameClick = () => {
    if (entity?.id) {
      navigate(`/profile/${entity.id}`);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="feature-box">
        <div className="feature-label">{entity?.id === chosenFeature ? "Featured entity" : "Lucky dip"}</div>
        <h1 onClick={handleNameClick} style={{cursor:'pointer'}}>{entity.name}</h1>
        
        <button className="random-button" onClick={handleRandom} style={{
              cursor: "pointer",
            }} >find random</button>
      </div>
      <div className="feature-info">
        <p>{entity.division}</p>
        <p>{entity.description}</p>
        <p>{entity.category}</p>
      </div>
    </>
  )
}

export default GodList
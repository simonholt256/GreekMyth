import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

function ShowcaseList({type}) {


  const [entities, setEntities] = useState(null)
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const baseURL = `http://127.0.0.1:8000/entities/`

  const navigate = useNavigate()

  let addURL =
  type === "Monster"
    ? `by-division?division=${type}`
    : `by-category?category=${type}`;

    // /entities/filter?type=Monsters <---could be a smoother option

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(baseURL + addURL);

          
  
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
    }, [type]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const titles = {
    Olympian: "12 Olympians",
    Titan: "Original Titans",
    Monster: "Notable Monsters",
    Hero: "Notable Heroes"
  };
  
  return (
    <div className="showcase">
      <h2>{titles[type]}</h2>
      <ul>
        {entities.map((entity) => (
          <li key={entity.id} style={{
              cursor: "pointer",
            }} onClick={() => navigate(`/profile/${entity.id}`)} /*for new tab onClick={() => window.open(`/profile/${entity.id}`, "_blank"*/>
            {entity.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShowcaseList
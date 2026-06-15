import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import acrop from "../assets/acrop.jpg"

function ProfileBox() {


  const { id } = useParams();
  const [entity, setEntity] = useState(null)
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const baseURL = `http://127.0.0.1:8000/entities/id/`

  const navigate = useNavigate()

  const entity_number = 1
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseURL + id);

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
      <div className="info-box-container">
        <div className="acrop-image" alt="acrop">
          <div className="info-box">
            <div className="profile-box">
              <h1 style={{paddingBottom: "6px",}} >{entity.name}</h1>
              <p style={{paddingBottom: "6px",}} >Division: <b>{entity.division}</b></p>
              <p style={{paddingBottom: "6px",}} >Category: <b>{entity.category}</b></p>
              <p style={{paddingBottom: "6px",}} >{entity.description}</p>
              <p style={{paddingBottom: "6px",}} >{entity.notes}</p>
            </div>
            <button className="back-home-button" onClick={() => navigate(`/`)}>Back home</button>
          </div>
        </div>
        
      </div>
    </>
    
  )
}

export default ProfileBox

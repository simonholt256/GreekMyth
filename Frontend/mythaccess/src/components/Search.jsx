import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const navigate = useNavigate();

  async function handleSearch() {
    if (!query) return;

    setSearched(true);

    try {
        const res = await fetch(`http://localhost:8000/entities/search?q=${query}`);
        const data = await res.json();
        setResults(data);
      } catch (err) {
        console.error("Search error:", err);
      }

    }

  return (
    <>
      <div className="search-box">
        <div className="search-whole-input">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
          />
          <span className="look-in">look in . . .</span>
          <select className="keyword" name="keyword" id="keyword" placeholder="Olympians">
            <option value="all">All</option>
            <option value="god">God</option>
            <option value="goddess">Goddess</option>
            <option value="hero">Hero</option>
            <option value="monster">Monster</option>
            <option value="nymph">Nymph</option>
          </select>
          <button onClick={handleSearch} className="search-button" style={{
              cursor: "pointer",
            }} >Search</button>
        </div>
        
      </div>
      <div className="search-results-box">
        {searched && results.length === 0 ? (
          <p style={{background: "#FFFEF8", margin: "20px",  padding: "10px"}}>Sorry, no result found for "{query}"</p>
        ) : (
          <ul>
            {results.map((item) => (
              <li key={item.id} style={{
                  padding: "6px",
                  margin: "2px 10px",
                  background: "#ffffff2d",
                  borderBottom: "1px solid #46464650",
                }} ><span onClick={() => navigate(`/profile/${item.id}`)} className="name">{item.name}</span> {item.description}</li>
              
            ))}
          </ul>
        )}
      </div>
      
    </>
  )

}

export default Search
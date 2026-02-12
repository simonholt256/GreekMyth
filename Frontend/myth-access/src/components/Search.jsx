import { useState } from "react";

function Search() {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  async function handleSearch() {
    if (!query) return;

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
          <input className="keyword" placeholder="Olympians"></input>
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>
        
      </div>
      <div className="search-results-box">
        <ul>
          {results.map((item) => (
            <li key={item.id} style={{
                padding: "6px",
                margin: "2px 10px",
                borderBottom: "1px solid #46464650",
                
              }} ><span onClick={() => alert(`Clicked: ${item.name}`)} className="name">{item.name}</span> {item.description}</li>
            
          ))}
        </ul>
      </div>
      
    </>
  )

}

export default Search
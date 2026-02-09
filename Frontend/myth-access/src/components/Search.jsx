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
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />

      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map((item) => (
          <li key={item.id} style={{
              padding: "10px",
              borderBottom: "1px solid #ddd",
              cursor: "pointer",
            }} onClick={() => alert(`Clicked: ${item.name}`)}><b>{item.name}</b> {item.description}</li>
          
        ))}
      </ul>
    </>
  )

}

export default Search
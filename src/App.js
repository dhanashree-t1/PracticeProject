import React, { useState } from 'react';
import './App.css'; 
function App() {
  const [movie, setMovie] = useState(''); 
  const [movies, setMovies] = useState([]); 
  const handleInputChange = (event) => {
    setMovie(event.target.value); 
  };

  const handleAddMovie = () => {
    if (movie) { 
      setMovies([...movies, movie]); 
      setMovie(''); 
    }
  };

  return (
    <div className="container"> 
      <h1>FAVOURITE MOVIES</h1>
      <input 
        type="text" 
        value={movie} 
        onChange={handleInputChange} 
        placeholder="Enter a movie name" 
      />
      <button onClick={handleAddMovie}>Add Movie</button> 

     
      <ul>
        {movies.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
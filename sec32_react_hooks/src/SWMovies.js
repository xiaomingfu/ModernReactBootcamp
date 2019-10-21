import React, { useState, useEffect } from "react";
import axios from "axios";
export default function SWMovies() {
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState("");
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        ` https://swapi.co/api/films/${number}/`
      );
      console.log(response.data);
      setMovie(response.data);
    }
    getData();
  }, [number]);
  return (
    <div>
      <h1>Select a movie</h1>
      <h4>You select {number}</h4>
      <h3>{movie.title}</h3>
      <p>{movie.opening_crawl}</p>
      <select
        value={number}
        onChange={e => {
          setNumber(e.target.value);
        }}
      >
        {numbers.map(number => (
          <option key={number}>{number}</option>
        ))}
      </select>
    </div>
  );
}

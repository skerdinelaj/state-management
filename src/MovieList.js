import React, { useState } from "react";
import Movie from "./Movie";

export default function MovieList() {
  const [movies, setMovies] = useState([
    {
      name: "Pallati 176",
      price: 10,
      id: 1,
    },
    {
      name: "Njerez dhe Fate",
      price: 10,
      id: 2,
    },
    {
      name: "Lulekuqe Mbi Mure",
      price: 10,
      id: 3,
    },
  ]);
  return (
    <div>
      {movies.map(movie =>( 
          <Movie name={movie.name} price={movie.price} key={movie.id}/>
          ))}
    </div>
  );
}

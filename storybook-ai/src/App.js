import "./App.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Gallery from "./pages/Gallery";
import Book from "./pages/Book"
import { Routes, Route } from 'react-router-dom'

function App() {
  const [data, setData] = React.useState(null);

  useEffect(() => {
    axios.get("/api/image")
      .then((data) => setData(data.data));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <p>{data? (
          <p>{data.image}</p>
        ) : (
          <p>Waiting for server...</p>
        )}</p>
      </header>
    </div>
  );
}

export default App;

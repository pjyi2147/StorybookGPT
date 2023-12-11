import "./App.css";
import React, { useState, useEffect } from 'react';
import Gallery from "./pages/Gallery";
import Book from "./pages/Book"
import { Routes, Route } from 'react-router-dom'

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;

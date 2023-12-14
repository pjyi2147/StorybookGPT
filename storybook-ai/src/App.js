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
    <Routes>
      <Route>
        <Route path='/' element={<Gallery />} />
        <Route path='/book' element={<Book />} />
        <Route path='/book/:id/:page/:maxpage' element={<Book />} />
      </Route>
    </Routes>
  );
}

export default App;

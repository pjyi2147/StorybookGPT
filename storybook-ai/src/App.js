import "./App.css";
import React from 'react';
import Gallery from "./pages/Gallery";
import Book from "./pages/Book"
import { Routes, Route } from 'react-router-dom'

function App() {
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

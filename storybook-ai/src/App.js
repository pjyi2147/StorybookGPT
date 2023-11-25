import "./App.css";
import Gallery from "./pages/Gallery";
import Book from "./pages/Book"
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route>
        <Route path='/' element={<Gallery />} />
        <Route path='/book' element={<Book />} />
      </Route>
    </Routes>
  );
}

export default App;

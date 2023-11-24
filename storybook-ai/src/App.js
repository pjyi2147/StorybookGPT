import "./App.css";
import Gallery from "./pages/Gallery";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route>
        <Route path='/' element={<Gallery />} />
      </Route>
    </Routes>
  );
}

export default App;

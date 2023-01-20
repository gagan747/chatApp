import Container from './Container';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
   <>
      <Router>
        <Routes>
          <Route path='/' element={<Container />} />
        </Routes>
      </Router>
   </>
  );
}

export default App;

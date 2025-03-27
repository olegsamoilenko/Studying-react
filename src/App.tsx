import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import TicTacToeGamePage from './pages/TicTacToeGamePage/TicTacToeGamePage';
import Navbar from './components/Nav/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/tic-tac-toe" element={<TicTacToeGamePage />} />
      </Routes>
    </>
  );
}

export default App;

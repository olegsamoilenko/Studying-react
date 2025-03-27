import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className={`flex space-x-4`}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/not-found">Not Found</Link>
      <Link to="/tic-tac-toe">Tic Tac Toe Game</Link>
    </nav>
  );
}

export default Navbar;

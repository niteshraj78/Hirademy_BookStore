import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BooksPage from './pages/BookPage/Bookpage';
import BookDetailsPage from './pages/BooksDetailsPage/BooksDetailsPage';
import Navigation from './components/Navbar/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './pages/Body/body';
function App() {
  return (
    <Router>
      <div style={{backgroundColor: '#F5F5F5',}}>
        <Navigation />
        <Routes>
        <Route path="/" element={<Body />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/books/:id" element={<BookDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

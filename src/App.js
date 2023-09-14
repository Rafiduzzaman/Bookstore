import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Categories from './pages/Categories';
import Books from './pages/Books';
import Navbar from './components/Navbar';
import { fetchBooksAsync } from './redux/books/booksSlice';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchBooksAsync());
  return (
    <div className="App">
      <div className="pageWrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

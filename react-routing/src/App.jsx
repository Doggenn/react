import './App.css'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import UsersPage from './pages/UsersPage/UsersPage';
import Header from './components/Header';
import UsersDetailPage from './pages/UsersDetailPage/UsersDetailPage';

function App() {

  return (
    <>
      <Router>

        {/* ESTO ES UN MENU */}
        <Header/>

        {/* ESTO ES LA DECLARACIÓN DE RUTAS */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UsersDetailPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

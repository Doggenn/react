

import './App.css'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header'
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import UsersPage from './pages/UsersPage/UsersPage';
import UsersDetaisPage from './pages/UsersDetailsPage/UsersDetailsPage';
import AnimesPage from './pages/AnimesPage/AnimesPage';
import AnimesDetailsPage from './pages/AnimesDetailsPage/AnimesDetailsPage';

function App() {
  
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/users/:id' element={<UsersDetaisPage />} />
          <Route path='/animes' element={<AnimesPage />} />
          <Route path='/animes/:id' element={<AnimesDetailsPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App

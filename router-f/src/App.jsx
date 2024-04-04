import { Route, Routes as Router, Routes} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import ContactPage from './pages/ContactPage/ContactPage'
import UsersPage from './pages/UsersPage/UsersPage'
import UsersDatailPage from './pages/UsersDatailPage/UsersDatailPage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UsersDatailPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

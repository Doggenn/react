import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Characters from './components/Characters'

function App() {

  return (
    <body className='content'>
      <div className='row'>
        <h1>Rick & Morty</h1>
      <Characters></Characters>

      </div>
    </body>
  )
}

export default App

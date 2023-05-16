import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works'
import StudyCase from './pages/StudyCase';
import clients from './assets/clients';


function App() {

  return (
    <div>
         
      <Router>
      <Navbar/>
        <Routes>
      
          <Route path ="/" element= {<Home/>} />
          <Route path ="/about" element= {<About/>} />
          <Route path ="/works" element= {<Works/>} />

          {clients.map((client)=> (
          <Route 
          path={`/works/${client.name}`} 
          element= {<StudyCase client={client}/>} 
          key = {client.name}      
            />
          ))}

          
        
        </Routes>

      </Router>

    </div>
  )
}

export default App

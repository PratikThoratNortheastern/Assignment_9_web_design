
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import AboutUs from './components/Aboutus';
import Home from './home';
import Contact from './components/Contact';
import Job from './components/Job';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
       <Nav />
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/jobs' element={<Job/>}/>
       </Routes>
     
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

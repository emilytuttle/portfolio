import {Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Contact from './components/Contact';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  return (
    <div className="App">
      {/* Use imported Header */}
       <Header />
       {/* Create routes for each view */}
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='*' element={<Navigate to='/'/>}/>
        
      </Routes>
      {/* Use imported Contact information */}
      <Contact></Contact>
    </div>
  );
}

export default App;

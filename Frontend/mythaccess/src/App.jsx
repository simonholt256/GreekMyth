import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Context from "./pages/Context";
import Method from "./pages/Method";
import Sources from "./pages/Sources";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import './css/App.css'
import InfoBox from './components/InfoBox'

function App() {

  return (
    <div className='entire-frame'>
      <div className='image-column'>
      </div>
      <div className='middle-box'>
        <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/context" element={<Context/>} />
            <Route path="/method" element={<Method/>} />
            <Route path="/sources" element={<Sources/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/profile/:id" element={<Profile/>} />
          </Routes>
        </Router>
      </div>
      <div className='image-column'></div>  
    </div>
  )
}

export default App

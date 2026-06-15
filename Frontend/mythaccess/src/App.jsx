import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MoreInfo from "./pages/MoreInfo";
import Profile from "./pages/Profile";
import './css/App.css'


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
            <Route path="/moreinfo" element={<MoreInfo/>} />
            <Route path="/profile/:id" element={<Profile/>} />
          </Routes>
        </Router>
      </div>
      <div className='image-column'></div>  
    </div>
  )
}

export default App

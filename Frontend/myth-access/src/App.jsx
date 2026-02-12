import Navbar from './components/Navbar'
import Feature from './components/Feature'
import Showcase from './components/Showcase'
import Search from './components/Search'
import './App.css'
import grecianLady from './assets/grecian-lady.png'

function App() {

  return (
    <div className='entire-frame'>
      <div className='image-column'>
        {/* <img src={grecianLady}></img> */}
      </div>
      <div className='middle-box'>
        <div className='title-block'>
          <h1 className='title'>Greek Mythology Database </h1>
          <Navbar/>
        </div>
        <Search/>
        <Feature/>
        <Showcase/>
      </div>
      <div className='image-column'></div>  
    </div>
  )
}

export default App

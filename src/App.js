import './App.css';
import Button from '@mui/material/Button';
import { Header } from './Header';
import { Stickers } from './Stickers';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WebIcon from '@mui/icons-material/Web';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import EmailIcon from '@mui/icons-material/Email';
import { About } from './About';
import { Projects } from './Projects';
import { Footer } from './Footer';




function App() {
  return (
    <div className="App">
      <div className='nav-bac'>
    <div className='nav-bar'>
    <div>
      <img className='sign-img' src='https://see.fontimg.com/api/renderfont4/z8xjG/eyJyIjoiZnMiLCJoIjoxNzUsInciOjEyNTAsImZzIjoxNDAsImZnYyI6IiM4MTI4MjAiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/RGhhbnVzaA/darlington-demo.png' alt='skill-img'/>
    </div>
    <div className='nav-but'>
      <Button color="inherit"  className='nav-but-color' href='#h' size="large">< HomeIcon className="nav-ty-bu"/> &nbsp; Home</Button>
      <Button  color="inherit"  className='nav-but-color' href='#a' size="large"><InfoIcon className="nav-ty-bu"/> &nbsp; About</Button>
      <Button color="inherit" className='nav-but-color' href='#s' size="large" ><EmojiObjectsIcon className="nav-ty-bu"/>&nbsp; Skills</Button>
      <Button color="inherit" className='nav-but-color' href='#p' size="large" ><WebIcon className="nav-ty-bu"/>&nbsp; Projects</Button>
      <Button color="inherit" className='nav-but-color' href='#f' size="large" ><EmailIcon className="nav-ty-bu"/>&nbsp; Contact</Button>
    </div>
    </div>    
    <Header/>
    <About/>
    <Stickers/>
    <Projects/>
    <Footer/>
    </div></div>



  );
}


export default App;

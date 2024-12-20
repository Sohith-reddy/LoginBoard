import './App.css'
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import NavBar from './components/NavBar';
import Error from './components/Error'
// import Table from './components/Table'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* <Table /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App

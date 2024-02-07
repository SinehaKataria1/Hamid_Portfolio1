import logo from './logo.svg';
import './App.css';
import About from "./About";
import Home from './Home';
import Services from './Services';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Routing from './Routing';
import { Link , Route , Switch , BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App" >
   <BrowserRouter>
      <Routing/>
    </BrowserRouter>
      
      
     
    </div>
  );
}
// style={{  backgroundColor: "rgba(5, 8, 22)"}}
export default App;

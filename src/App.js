import logo from './logo.svg';
import './App.css';
import About from "./About";
import Home from './Home';
import Services from './Services';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
function App() {
  return (
    <div className="App" style={{backgroundColor:"rgba(5, 8, 22)"}}>
      <Home/>
      <About/>
      <Services/>
      <Experience/>
      <Projects/>
      <Contact/>
     
    </div>
  );
}
// style={{  backgroundColor: "rgba(5, 8, 22)"}}
export default App;

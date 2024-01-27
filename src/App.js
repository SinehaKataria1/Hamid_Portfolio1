import logo from './logo.svg';
import './App.css';
import About from "./About";
import Home from './Home';
import Services from './Services';
import Projects from './Projects';
import Experience from './Experience';

function App() {
  return (
    <div className="App" style={{  backgroundColor: "rgba(5, 8, 22)"}}>
      <Home/>
      <About/>
      <Services/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import ellipse1 from "./assets/img/Ellipse-1.png";
import ellipse2 from "./assets/img/Ellipse-2.png";
import './App.css';
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Reference from "./Components/Reference";
import Analytics from "./Components/Analytics";
import MobileSec from "./Components/MobileSec";
import Testimonial from "./Components/Testimonial";
import GetStarted from "./Components/GetStarted";

function App() {
  return (
    <div className="App">
        <img src={ellipse1} className={"Ellipse-1"} alt="ellipse1" />
        <img src={ellipse2} className={"Ellipse-2"} alt="ellipse1" />

      <Header/>
      <Hero/>
      <Reference/>
      <Analytics/>
      <MobileSec/>
      <Testimonial/>
      <GetStarted/>
    </div>
  );
}

export default App;

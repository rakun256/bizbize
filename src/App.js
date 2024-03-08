import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/MainPage/mainPage";
import NextEvent from "./Pages/NextEvent/nextEvent";
import Navbar from "./Components/Navbar/navbar";
import PreviousEvents from "./Pages/PreviousEvents/previousEvents";
import OurTeam from "./Pages/EventTeam/eventTeam";
import EventDescription from "./Pages/EventDescription/eventDescription";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <MainPage />
        <NextEvent />
        <EventDescription />
        <PreviousEvents />
        <OurTeam />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

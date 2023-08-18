import logo from "./logo.svg";
import "./App.css";
import "./input.css";
import Card from "./component/Card";
import OurSevices from "./component/OurServices";
import Login from "./component/Login";
import Join from "./component/Join";
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Personal from "./component/Personal";
import Business from "./component/Business";
import Pricing from "./component/Pricing";
import Spotlight from "./component/Spotlight";
import About from "./component/About";
import Contact from "./component/Contact";
import Faq from "./component/Faq";
import TermsAndConditions from "./component/TermsAndConditions";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/personal" Component={Personal} />
          <Route path="/business" Component={Business} />
          <Route path="/pricing" Component={Pricing} />
          <Route path="/spotlight" Component={Spotlight} />
          <Route path="/about" Component={About} />
          <Route path="/contact-us" Component={Contact} />
          <Route path="/faq" Component={Faq} />
          <Route path="/terms-and-conditions" Component={TermsAndConditions} />
          <Route path="/join" Component={Join} />
          <Route path="/login" Component={Login} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

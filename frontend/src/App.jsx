import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Page2 from "./pages/Page2";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Adding from "./pages/Adding";
import Header from "./components/Header";
import Home from "./pages/Home";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adding" element={<Adding />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

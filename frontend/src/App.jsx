import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Page1 from "@pages/Page1";
import Page2 from "@pages/Page2";
import Contact from "@pages/Contact";
import Footer from "@components/Footer";
import NotFound from "@pages/NotFound";
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
          <Route path="/page1" element={<Page1 />} />
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

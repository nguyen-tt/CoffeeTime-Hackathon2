/* eslint-disable import/no-unresolved */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Data from "./pages/Data";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Adding from "./pages/Adding";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CardPage from "./pages/CardPage";

import { CurrentUserProvider } from "./contexts/CurrentUser";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <CurrentUserProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adding" element={<Adding />} />
            <Route path="/data" element={<Data />} />
            <Route path="/cardpage" element={<CardPage />} />
            <Route path="/faq" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Footer />
        </Router>
      </CurrentUserProvider>
    </div>
  );
}

export default App;

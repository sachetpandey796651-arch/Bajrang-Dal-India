import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Join from "./pages/Join";
import Contact from "./pages/Contact";
import Payment from "./pages/payment";
import IdCard from "./pages/IdCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<Contact />} />
       <Route path="/payment" element={<Payment />} />
       <Route path="/idcard" element={<IdCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
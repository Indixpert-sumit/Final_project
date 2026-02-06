import { Routes, Route } from "react-router-dom";
import Rootlayout from "./Layout/Rootlayout";
import Contact from "./Components/Contact";
import Header from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Header />} />
        <Route path="header" element={<Header />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

      </Route>
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Rootlayout from "./Layout/Rootlayout";
import Contact from "./Components/Contact";
import Header from "./Components/Home";
import About from "./Components/About";
import JobsPage from "./Components/Jobspages";
import Jobdetail from "./Components/Job-details/Jobdetail";
import Forward_detail from "./Components/Job-details/forward_detail";
import Internal_detail from "./Components/Job-details/Internal_details";
import Corporate_detail from "./Components/Job-details/Corporate_details";
import Districts_detail from "./Components/Job-details/District_detail";
import Regional_detail from "./Components/Job-details/Regional_details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Header />} />
        <Route path="header" element={<Header />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="jobspage" element={<JobsPage />} />
        <Route path="jobdetail" element={<Jobdetail />} />
        <Route path="forward_details" element={<Forward_detail />} />
        <Route path="district_detail" element={<Districts_detail />} />
        <Route path="internal_detail" element={<Internal_detail />} />
        <Route path="corporate_details" element={<Corporate_detail />} />
        <Route path="regional_detail" element={<Regional_detail />} />

      </Route>
    </Routes>
  );
}

export default App;

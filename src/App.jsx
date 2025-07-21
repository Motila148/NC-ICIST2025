import React from "react"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/TopNavbar/Navbar";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import Accommodations from "./components/Accomodation/Accomodation";
/*import Committee from "./pages/Committee/Committee";*/
import Schedule from "./pages/Schedule/Schedule";
import ContactUs from "./pages/ContactUs/ContactUS";
import { useState } from 'react'
import './App.css'
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";


import AdvisoryCommittee from './components/Committee/AdvisoryCommittee';
import Org from './components/Committee/Org';
import SubAdvisoryCommittee from "./components/Committee/SubAdvisoryCommittee";
import ImportantDates from "./pages/Registration/ImportantDates";
import SubCommittees from "./components/Committee/SubCommitteeMembers";
import Gallary from "./components/Gallary/Gallary";



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router basename="/NC-ICIST2025">
      <ScrollToTop/>
      <div className="app-container">
        <Navbar/>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/Committee"element={<Home/>}/> 
          <Route path="/Schedule"element={<Schedule/>}/>
          <Route path="/ContactUs"element={<ContactUs/>}/>
          
          <Route path ="/Paper_submission" element={<Registration/>}/>
          <Route path = "/Important_dates" element={<ImportantDates/>}/>
          <Route path = "/Accomodation" element={<Accommodations/>}/>
          {/*<Route path = "/Publication" element={<Home/>}/>*/}
          <Route path ="/Gallery" element={<Gallary/>}/>

          <Route path="/Committee/advisory" element={<AdvisoryCommittee />} />
          <Route path="/Committee/organizer" element={<Org />} />
          <Route path="/Committee/sub-advisory" element={<SubAdvisoryCommittee />} />
          <Route path="/Committee/sub-committee" element={<SubCommittees />} />
          {/* Add other committee routes as needed */}


        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App

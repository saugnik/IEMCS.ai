import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import CaseStudy from './Components/CaseStudy/CaseStudy'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AutomationPage from './Components/Blog/Automation/Automation'
import IotPage from './Components/Blog/IoT/IoT'
import RoboticsPage from './Components/Blog/Robotics/Robotics'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>
          <Hero />
          <div className="my-container">
            <About setPlayState={setPlayState} />
            <Title subTitle='Our Service Offering' title='What We Offer' />
            <Programs />
            {/* <Title subTitle='' title='Case Studies' /> */}
            <Campus />

            <Title subTitle='Case Study' title='Our Case Studies' />
            <p style={{ fontWeight: 'normal', textAlign: 'center' }} >IEMCS has entered into multiple MoUs (Memorandums of Understanding) with industry-leading companies to collaboratively develop innovative solutions, leveraging their combined expertise and resources to drive cutting-edge advancements across various sectors.
            </p>
            <CaseStudy setPlayState={setPlayState} />

            <Title subTitle='' title='Key Stakeholders' />
            <div>
              <p style={{ fontWeight: 'normal', textAlign: 'center' }} > At IEM Consultancy Services, we pride ourselves on having a diverse and dynamic team of industry experts, seasoned consultants, experienced faculty, and bright students.
                We believe in the power of collaboration, and we encourage our team members to work together to create solutions that meet the needs of our clients.
              </p>
            </div>

            <Testimonials />
            <Title subTitle='Contact Us' title='Get in Touch' />
            <Contact />
            <Footer />
          </div>
          <VideoPlayer playState={playState} setPlayState={setPlayState} />
        </div>} />
        <Route path="/blog/automation" element={<AutomationPage />} />
        <Route path="/blog/iot" element={<IotPage />} />
        <Route path="/blog/robotics" element={<RoboticsPage />} />
      </Routes>
    </Router>
  )
}

export default App
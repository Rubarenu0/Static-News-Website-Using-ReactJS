import logo from './logo.png';
import React, { useState, useEffect } from 'react';
import breakingnews from './breakingnews.mp4';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';
import president from './murmu.jpeg';
import cm from './CM.webp';
import accident from './accident.jpg';
import { IoNewspaperOutline } from "react-icons/io5";
import { PiNewspaperThin } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { BsSpotify } from "react-icons/bs";
import './App.css';
// import News from './components/Header.js';
function App() {
  return (
  <div>
    <div className="App">
      <h1>THE <img src={logo} className="App-logo" alt="logo" /> HINDU</h1>
      <ul>
        <li className='li1'>India</li>
        <li>World</li>
        <li>Movies</li>
        <li>Technology</li>
        <li>e-Paper</li>
      </ul>
      <div className='section2'>
        <div>
          <ul>
            <li>SCIENCE</li>
            <li>/</li>
            <li>DATA</li>
            <li>/</li>
            <li>HEALTH</li>
            <li>/</li>
            <li>OPINION</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>FREE TRIAL</li>
            <li><button>SUBSCRIBE</button></li>
            <li><button>LOGIN</button></li>
          </ul>
        </div>
      </div>
    </div>
    <h1 className='break'>TOP BREAKING NEWS</h1>
    <div className="section3">
        <div>
        <video src={breakingnews} autoPlay="true" controls/>
        </div>
        {/* <div>
          <img src={img1}/>
        </div> */}
        <div>
          <img src={img2}/>
        </div>
      </div>
      <div className="section4">
        <div>
          <img src={img3}/>
        </div>
        <div>
          <img src={img4}/>
        </div>
        <div>
          <img src={img5}/>
        </div>
      </div>
      <div className='section5'>
        <div className='section51'>
          <div>
            <h4>Premium</h4>
          </div>
          <div>
            <p><PiNewspaperThin />Exam crazy: NEET scandals are part of a global trend</p>
          </div>
          <div>
            <p><PiNewspaperThin />Impact of institutional stigma on Dalit business owners’ earning capacity</p>
          </div>
          <div>
            <p><PiNewspaperThin />Melting polar ice due to climate change is making earth’s days longer</p>
          </div>
          <div>
            <p><PiNewspaperThin />Does India have laws against invasive species from ballast water?</p>
          </div>
          <div>
            <p><PiNewspaperThin />Army captain killed, civilian injured in encounter with militants in J&K’s Doda</p>
          </div>
          <div>
            <p><PiNewspaperThin />Exam crazy: NEET scandals are part of a global trend</p>
          </div>
          <div>
            <p><PiNewspaperThin />Impact of institutional stigma on Dalit business owners’ earning capacity</p>
          </div>
          <div>
            <p><PiNewspaperThin />Melting polar ice due to climate change is making earth’s days longer</p>
          </div>
          <div>
            <p><PiNewspaperThin />Does India have laws against invasive species from ballast water?</p>
          </div>
          <div>
            <p><PiNewspaperThin />Army captain killed, civilian injured in encounter with militants in J&K’s Doda</p>
          </div>
          <div>
            <p><PiNewspaperThin />Exam crazy: NEET scandals are part of a global trend</p>
          </div>
          <div>
            <p><PiNewspaperThin />Impact of institutional stigma on Dalit business owners’ earning capacity</p>
          </div>
          <div>
            <p><PiNewspaperThin />Melting polar ice due to climate change is making earth’s days longer</p>
          </div>
        </div>
        <div className='section52'>
          <div>
            <h4>PRESIDENT MURMU'S INDEPENDENCE DAY EVE ADDRESS</h4>
          </div>
          <div>
            <h2>
            Tendencies that stoke discord on perceived social hierarchies have to be rejected: President Droupadi Murmu</h2>
          </div>
          <div>
            <h3>President Droupadi Murmu highlighted the steady progress of political democracy in India, asserting that it reflects advancements towards social democracy.</h3>
          </div>
          <div>
            <img src={president} className='presidentimg'/>
          </div>
          <div>
            <p>President Droupadi Murmu on Wednesday (August 14, 2024) emphasised the need to strengthen affirmative action as a tool for inclusion while urging the rejection of divisive tendencies rooted in perceived social hierarchies.
              In her address to the nation on the eve of the 78th Independence Day, Ms. Murmu highlighted the steady progress of political democracy in India, asserting that it reflects advancements towards social democracy.In her address 
              to the nation on the eve of the 78th Independence Day, Ms. Murmu highlighted the steady progress of political democracy in India, asserting that it reflects advancements towards social democracy.In her address to the nation 
              on the eve of the 78th Independence Day, Ms. Murmu highlighted the steady progress of political democracy in India, asserting that it reflects advancements towards social democracy.</p>
          </div>
        </div>
        <div className='section53'>
            <h4>Latest News</h4>
          <div>
            <IoNewspaperOutline className='icon icon1'/>
            <h6>1 hour ago - World</h6>
            <p>In Beirut, U.S. envoy says 'no more time to waste' on Gaza ceasefire</p>
          </div>
          <div>
            <IoNewspaperOutline className='icon icon2'/>
            <h6>2 hour ago - India</h6>
            <p>New National Education Policy shows progress: President Murmu</p>
          </div>
          <div>
            <IoNewspaperOutline className='icon icon3'/>
            <h6>3 hour ago - India</h6>
            <p>India's successful conduct of elections strengthens democratic forces around the world: President Murmu</p>
          </div>
          <div>
            <IoNewspaperOutline className='icon icon4'/>
            <h6>4 hour ago - India</h6>
            <p>Top news of the day: President Droupadi Murmu emphasises need to strengthen affirmative action; Rahul Navin appointed ED Director, and more</p>
          </div>
          <div>
            <IoNewspaperOutline className='icon icon5'/>
            <h6>4 hour ago - Kolkata</h6>
            <p>CBI team reaches Kolkata, begins probe into doctor’s rape, murder case</p>
          </div>
        </div>
      </div>
      <h1 className='state'>STATES UPDATES</h1>
          <ul className='ulsix'>
            <li className='li2'>TAMIL NADU</li>
            <li>/</li>
            <li>KERALA</li>
            <li>/</li>
            <li>TELANGANA</li>
            <li>/</li>
            <li>KARNATAKA</li>
            <li>/</li>
            <li>ODISA</li>
          </ul>
      <div className='section6'>
          <div className='section61'>
            <img src={cm}/>
            <p>Stalin announces ‘CM’s Pharmacies’ to provide medicines at subsidised rates in T.N.</p>
          </div>
          <div className='section62'>
            <p>Supreme Court moots shifting Sanatana Dharma case out of Tamil Nadu</p>
            <p>Actor-politician Khushbu resigns from National Commission for Women </p>
          </div>
          <div className='section63'>
            <img src={accident}/>
            <p>Stalin announces ‘CM’s Pharmacies’ to provide medicines at subsidised rates in T.NTwo killed in explosion at fireworks unit near Sivakasi in T.N.</p>
          </div>
          <div className='section64'>
            <p>Supreme Court stays T.N. police from taking coercive steps against ‘Savukku’ Shankar</p>
            <p>Annamalai to participate in Karunanidhi’s birth centenary commemorative coin release event </p>
          </div>
      </div>
      <h1 className='state'>CITIES UPDATES</h1>
          <ul className='ul7'>
            <li className='li2'>BENGALURU</li>
            <li>/</li>
            <li>CHENNAI</li>
            <li>/</li>
            <li>DELHI</li>
            <li>/</li>
            <li>KOCHI</li>
            <li>/</li>
            <li>HYDERABAD</li>
          </ul>
      <div className='section7'>
          <div className='section71'>
            <img src={cm}/>
            <p>Stalin announces ‘CM’s Pharmacies’ to provide medicines at subsidised rates in T.N.</p>
          </div>
          <div className='section72'>
            <p>Supreme Court moots shifting Sanatana Dharma case out of Tamil Nadu</p>
            <p>Actor-politician Khushbu resigns from National Commission for Women </p>
          </div>
          <div className='section73'>
            <img src={accident}/>
            <p>Stalin announces ‘CM’s Pharmacies’ to provide medicines at subsidised rates in T.NTwo killed in explosion at fireworks unit near Sivakasi in T.N.</p>
          </div>
          <div className='section74'>
            <p>Supreme Court stays T.N. police from taking coercive steps against ‘Savukku’ Shankar</p>
            <p>Annamalai to participate in Karunanidhi’s birth centenary commemorative coin release event </p>
          </div>
      </div>
      <div className='footer'>
      <div className='footer1'>
        <ul>
          <li><h6>The Hindu</h6></li>
          <li>About Us</li>
          <li>Code of Editorial Values</li>
          <li>News Archive</li>
          <li>Sitemaps</li>
          <li>Print Subscription</li>
          <li>Digital Subscription</li>
          <li>Subscribe to Newsletters</li>
          <li>Rss Feeds</li>
          <li>Readers Editor-Terms of Reference</li>
          <li>Authors & Contributors</li>
          <li><h6>Contact us</h6></li>
          <li>Contact Us</li>
          <li>Social Media</li>
          <li>Advertise With Us</li>
        </ul>
      </div>
      <div className='footer2'>
        <ul>
          <li><h6>Other Products</h6></li>
          <li>RoofandFloor</li>
          <li>STEP</li>
          <li>Images</li>
          <li>Classifieds - Print</li>
          <li><h6>Popular Sections</h6></li>
          <li>Elections</li>
          <li>Israeli–Palestinian conflict 2023</li>
          <li>Videos</li>
          <li>National News</li>
          <li>International News</li>
          <li>Life & Style</li>
          <li>Food</li>
          <li>Podcast</li>
          <li>Showcase</li>
        </ul>
      </div>
      <div className='footer3'>
        <ul>
          <li><h6>Business</h6></li>
          <li>Agri-Business</li>
          <li>Industry</li>
          <li>Economy</li>
          <li>Markets</li>
          <li>Budget</li>
          <li><h6>Sport</h6></li>
          <li>Cricket</li>
          <li>Football</li>
          <li>Hockey</li>
          <li>Tennis</li>
          <li>Athletics</li>
          <li>Motorsport</li>
          <li>Races</li>
          <li>Other Sports</li>
        </ul>
      </div>
      <div className='footer4'>
        <ul>
          <li><h6>States</h6></li>
          <li>Andhra Pradesh</li>
          <li>Karnataka</li>
          <li>Kerala</li>
          <li>Tamil Nadu</li>
          <li>Telangana</li>
          <li><h6>Cities</h6></li>
          <li>Bengaluru</li>
          <li>Chennai</li>
          <li>Coimbatore</li>
          <li>Delhi</li>
          <li>Madurai</li>
          <li>Tiruchirapalli</li>
          <li>Puducherry</li>
          <li>Kochi</li>
        </ul>
      </div>
      <div className='footer5'>
        <ul>
          <li><h6>Group News Sites</h6></li>
          <li>Business Line</li>
          <li>BL on Campus</li>
          <li>Sportstar</li>
          <li>Frontline</li>
          <li>இந்து தமிழ் திசை</li>
          <li>The Hindu Centre</li>
          <li>Young World Club</li>
          <li>The Hindu ePaper</li>
          <li>Business Line ePaper</li>
          <li>Crossword + Free Games</li>
          <li><h6>Sci-Tech</h6></li>
          <li>Science</li>
          <li>Technology</li>
          <li>Health</li>
        </ul>
      </div>
      <div className='footer6'>
        <h1>THE <img src={logo} className="App-logo" alt="logo" /> HINDU</h1>
        <h2>Follow Us On</h2>
        <ul className='ul6'>
          <li><FaYoutube /></li>
          <li><FaInstagram /></li>
          <li><FaWhatsapp /></li>
          <li><FaXTwitter /></li>
          <li><FaSquareFacebook /></li>
          <li><FaLinkedin /></li>
          <li><FaTelegramPlane /></li>
          <li><BsSpotify /></li>
        </ul>
        <ul className='ul61'>
          <li className='l1'>Terms of Use</li>
          <li>/</li>
          <li>Privacy Policy</li>
          <li>/</li>
        </ul>
        <p>Copyright© 2024, THG PUBLISHING PVT LTD. or its affiliated companies. <br/>All rights reserved.</p>
      </div>
      </div>
  </div>
  );
}

export default App;

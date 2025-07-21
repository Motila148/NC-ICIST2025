import React from 'react';
import './Home.css';
import Themes from "./Themes"
import Speaker from '../../components/Speaker/Speaker';
import Registration from '../Registration/Registration';
import HighlightMarquee from '../../components/Marque/Marque';
import Banner from '../../components/Banner/Banner';
import ImportantDates from '../Registration/ImportantDates';
import Accommodations from '../../components/Accomodation/Accomodation';
import HowToReach from '../../components/HowToReach/HowToReach';
import Gallery from '../../components/Gallary/Gallary';
import About from '../AboutUs/About';



const Home = () => {
  return (
    <div className="home-page">
      <Banner/>
      <HighlightMarquee message="Call for Papers: Submit your abstract by 5ᵗʰ August 2025" />
      <section className="about-section">
        <div className="container">
          <h2 className="about-heading">About the Conference</h2>
          <p className="about-text">
            Northeast India has emerged as a significant hub for technological advancements, and various engineering conferences are required to foster innovation, research, and collaboration. These conferences will provide a platform for academicians, researchers, industry professionals, and students to exchange ideas, showcase cutting-edge technologies, and address regional and global engineering challenges.
          </p>
          <p className="about-text">
            The primary objective of this conference is to promote research, encourage industry-academia collaboration, and explore sustainable solutions tailored to the unique geographical and infrastructural needs of the Northeast region. Topics such as <strong>disaster-resilient infrastructure, smart cities, AI applications, and green energy solutions</strong> will take center stage, considering the region's vulnerability to natural calamities and its rich potential for renewable energy projects.
          </p>
          <p className="about-text">
            Apart from technical sessions and paper presentations, this conference will feature keynote speeches by eminent scientists and industry leaders, panel discussions, and knowledge-sharing on emerging technologies. This will also provide networking opportunities for young researchers, enabling them to collaborate with experts from across India and beyond. By fostering knowledge-sharing and collaboration, this event will contribute significantly to the development of both the academic and industrial sectors, ultimately supporting the growth and modernization of the region.
          </p>
        </div>
      </section>
      <ImportantDates/>
      <Registration/>
      <Themes/>
      <Accommodations/>
      <HowToReach/>
      <Gallery/>
      <About/>
      {/* <Speaker/> */}
    </div>
  );
};

export default Home;

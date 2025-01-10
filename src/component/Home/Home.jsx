import React, { useEffect, useRef, useState } from 'react'
import Content from '../Content/Content'
import Dellsupprt from '../Dell-Support/Dellsupprt'
import BottomVideo from '../Content/VideoContent/BottomVideo'
import Happening from '../Whats-Happeing page/Happening'
import DemoCenter from '../Demo center/DemoCenter'
import Rating from '../Rating/Rating'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import useFavicon from '../FavIcon/Favicon'
import './home.css'





const Home = () => {
  useFavicon("https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Dell.png")

  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Set up Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Set visibility when the component is in view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);
  return (
    <div>
      <Navbar/>
     <Content/>
    <div ref={componentRef}
      className={`component ${isVisible ? 'visible' : ''}`}>
    <Dellsupprt/>
    </div>
    <BottomVideo/>
    <Happening/>
    <DemoCenter/>
    <Rating/>
    <Footer/>
    </div>
  )
}

export default Home

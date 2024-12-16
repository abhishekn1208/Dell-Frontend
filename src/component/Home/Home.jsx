import React from 'react'
import Content from '../Content/Content'
import Dellsupprt from '../Dell-Support/Dellsupprt'
import BottomVideo from '../Content/VideoContent/BottomVideo'
import Happening from '../Whats-Happeing page/Happening'
import DemoCenter from '../Demo center/DemoCenter'
import Rating from '../Rating/Rating'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import useFavicon from '../FavIcon/Favicon'





const Home = () => {
  useFavicon("https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Dell.png")
  return (
    <div>
      <Navbar/>
     <Content/>
    <Dellsupprt/>
    <BottomVideo/>
    <Happening/>
    <DemoCenter/>
    <Rating/>
    <Footer/>
    </div>
  )
}

export default Home

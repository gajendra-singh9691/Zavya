import Banner from "./Banner"
import Slider from "./Slider"
import TopCollections from "./TopCollection"
import banner from "../Images/banner.PNG"
import GiftBadges from "./GiftBadges"
import TrendingRakhis from "./TrandingRakhi"
import Footer from './Footer'
const Home = () => {
  return (
    <div className="w-full">
      <Slider />
      <TopCollections />
      <Banner image={banner} />
      <GiftBadges />
      <TrendingRakhis />
    </div>
  )
}

export default Home

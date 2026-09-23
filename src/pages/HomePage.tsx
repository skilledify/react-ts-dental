import type { FC } from "react"


import Banner from "../../src/components/Banner/Banner"
import About from "../components/About/About"
import Features from "../components/Features/Features"
import Specialists from "../components/Specialists/Specialists"
import Price from "../components/Price/Price"
import News from "../components/News/News"
import FormSection  from "../components/FormSection/FormSection"
import Reviews from "../components/Reviews/Reviews"


const HomePage: FC = () => {
  return (
    <>
     <Banner />
     <About />
     <Features />
     <Specialists />
     <Price />
     <News />
     <Reviews />
      <FormSection/>
      </>
  )
}
export default HomePage
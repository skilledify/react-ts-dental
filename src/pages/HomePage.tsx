import type { FC } from "react"


import Banner from "../../src/components/Banner/Banner"
import About from "../components/About/About"
import Features from "../components/Features/Features"
import Specialists from "../components/Specialists/Specialists"


const HomePage: FC = () => {
  return (
    <>
     <Banner />
     <About />
     <Features />
     <Specialists />
      </>
  )
}
export default HomePage
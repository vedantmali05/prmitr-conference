import AboutInstitute from "./components/AboutInstitute"
import Header from "./components/Header"
import Hero from "./components/Hero/Hero"
import InstituteHeader from "./components/InstituteHeader"
import DatesTile from "./components/DatesTile"
import Acknowledgment from "./components/Acknowledgement"
import Footer from "./components/Footer"
import Credits from "./components/Credits"
import Reviewer from "./components/Reviewer"
import Tracks from "./Tracks" 

function App() {

  return (
    <>
      <InstituteHeader />
      <Header />
      <Hero />
      <DatesTile />
      <AboutInstitute />
      <Tracks />
      <Reviewer/>
      <Acknowledgment />
      <Footer />
      <Credits />
    </>
  )
}

export default App

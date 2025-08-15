import AboutInstitute from "./components/AboutInstitute"
import Header from "./components/Header"
import Hero from "./components/Hero/Hero"
import InstituteHeader from "./components/InstituteHeader"
import DatesTile from "./components/DatesTile"
import Acknowledgment from "./components/Acknowledgement"
import Footer from "./components/Footer"
import Credits from "./components/Credits"
import Reviewer from "./components/Reviewer"
import Tracks from "./components/Tracks"
import AboutConference from "./components/AboutConference"
import Timeline from "./components/Timeline"
import Patrons from "./components/Patrons"
import PlacesNearAmravati from "./components/PlacesNearAmravati"
import Speaker from "./components/Speaker"
import Committees from "./components/Committees"

function App() {

  return (
    <>
      <InstituteHeader />
      <Header />
      <Hero />
      <DatesTile />
      <AboutInstitute />
      <AboutConference />
      <Patrons />
      <Speaker />
      <Committees />
      <PlacesNearAmravati />
      <Tracks />
      <Reviewer />
      <Acknowledgment />
      <Footer />
      <Credits />
    </>
  )
}

export default App

import { BackgroundShader } from './backgroundShader'
import { Header } from './header/Header'
import { MainScreen } from './homepageFreelance/MainScreen'
import { AnimatedPopUp } from './homepageFreelance/AnimatedPopUp'
import { FooterFreelance } from './homepageFreelance/FooterFreelance'

function App() {
  return (
    <>
      <BackgroundShader />
      <div className="bg-white">
        <Header />
        {/* Actual Content */}
        <MainScreen />
        <AnimatedPopUp />
        <FooterFreelance />
      </div>
    </>
  )
}

export default App

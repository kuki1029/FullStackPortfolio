import { BackgroundShader } from './backgroundShader'
import { Header } from './header/Header'
import { MainScreen } from './homepageFreelance/MainScreen'
import { AnimatedPopUp } from './homepageFreelance/AnimatedPopUp'

function FreelancePage() {
  return (
    <>
      <BackgroundShader />
      <div className="bg-white">
        <Header />
        {/* Actual Content */}
        <MainScreen />
        <AnimatedPopUp />
      </div>
    </>
  )
}

export default FreelancePage

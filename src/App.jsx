import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Summify from "./components/Summify"

const App = () => {
  return (
    <div className="h-full  bg-white">
      <Header />
      <div className="max-w-[85%] mx-auto py-[5em] ">
        <Hero />
        <Summify />
      </div> 
      <Footer />
    </div>
  )
}
export default App
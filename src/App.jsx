import Landing from './components/landing'
import I_do from './components/I_do'
import Projects from './components/Projects'
import Empty from './components/empty'
import About from './components/About'
import HowICanHelp from './components/help_you'
import Footer from './components/footer'
import Contact from './components/contactButton'

function App(){
  return (
   <div className=' text-white overflow-x-hidden scroll-smooth'>
      <div className='bg-[#2b2b2b] pt-[50vh] px-5'>
          <Contact/>
          <Landing/>
          <I_do/>
          <Projects/>
      </div>
      <HowICanHelp/>
      <Empty/>
      <About/>
      <Footer/>
   </div>
  )
}

export default App
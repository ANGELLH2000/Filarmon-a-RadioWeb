import Footer from './assets/Componets/Footer/Footer'
import Section_Programa from './assets/Componets/Section-Programa/Section_Programa'
import NavBar from './assets/Componets/NavBar/NavBar'
import Section1 from './assets/Componets/Section1/Section1'
import Reproductor from './assets/Componets/Reproductor/Reproductor'

function App() {

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <Section1/>
      <Reproductor/>
      <br /><br /><br />
      <Section_Programa/>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App

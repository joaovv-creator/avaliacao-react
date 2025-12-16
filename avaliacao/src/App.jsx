import CardProduto from "../componentes/CardProduto.jsx"
import Cards from "../componentes/Cards.jsx"
import Carrousel from "../componentes/Carrousel.jsx"
import Contato from "../componentes/Contato.jsx"
import Footer from "../componentes/Footer.jsx"
import Header from "../componentes/Header.jsx"
import Sobre from "../componentes/Sobre.jsx"
import "./App.css"
function App () {
    return(
        <div className="app">
        <Header />
        <Carrousel />
        <Cards />
        <CardProduto />
        <Sobre />
        <Contato />
        <Footer />
         </div>

      
    )
}
export default App
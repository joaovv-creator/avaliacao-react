import  "/css/header.css"

function Header() {
  return (
    <header className="header-style">
        <h3 className="logo-text"> 🥗Restaurante Popular Saudável</h3>
        <nav className="nav-container">
            <a href="#inicio" className="nav-link">Inicio</a>
            <a href="#vantagens" className="nav-link">Vantagens</a>
            <a href="#cardapio" className="nav-link">Cardápio</a>
            <a href="#sobre" className="nav-link">Sobre Nós</a>
            <a href="#localizacao" className="nav-link">Localização</a>
            <a href="#contato" className="nav-link">Contato</a>
        </nav>
    </header>
  )
}

export default Header

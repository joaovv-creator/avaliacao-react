import "/css/contato.css"

function Contato() {
  return (
    <section id="contato" className="contato">

    <h2 className="titulo">Fale Conosco</h2>
    <div className="linha"></div>
    <form className="formulario">
        <input type="text" placeholder="Seu Nome"  className="nome-email"/>
        <input type="email" placeholder="Seu E-mail" className="nome-email"/>
        <button type="submit" className="contato-button">Enviar Mensagem</button>
    </form>
     
    </section>
  )
}

export default Contato

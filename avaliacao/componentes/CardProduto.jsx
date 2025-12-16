import "/css/cardProduto.css"

function CardProduto() {
  return (
    <div id="cardapio" className="cp-container">
   
        <div className="cp-secundary">
        <h2 className="cp-title">Nosso Cardapio Da Semana</h2>
        <div className="cp-terciary">
            <div className="produto-card">
          <img src="imagem/pratos.avif" alt="" className="img-produto" />
          <p>300 kcal sem glútem</p>
          <span>R$24,99</span>
          <button className="card-button">adicionar</button>
            </div>
            <div className="produto-card">
          <img src="imagem/pratos.avif" alt="" className="img-produto" />
          <p>300 kcal sem glútem</p>
          <span >R$24,99</span>
          <button className="card-button">adicionar</button>
            </div>
        </div>
        </div>
         <div className="cp-secundary2">
        <div className="produto-card">
      <img src="imagem/pratos.avif" alt="" className="img-produto" />
      <p>300 kcal sem glútem</p>
      <span>R$24,99</span>
      <button className="card-button">adicionar</button>
        </div>
        <div className="produto-card">
      <img src="imagem/pratos.avif" alt="" className="img-produto" />
      <p>300 kcal sem glútem</p>
      <span >R$24,99</span>
      <button className="card-button">adicionar</button>
        </div>
        </div>

      
    </div>
  )
}

export default CardProduto

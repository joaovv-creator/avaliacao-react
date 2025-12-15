import "/css/cardProduto.css"

function CardProduto() {
  return (
    <div className="cp-container">
        <h2>Nosso Cardapio Da Semana</h2>
        <div className="cp-secundary">
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
         <div className="cp-secundary">
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

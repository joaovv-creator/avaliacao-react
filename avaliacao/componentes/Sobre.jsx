import "/css/sobre.css";

function Sobre() {
  return (
    <div className="sobre-container">
      <h2 id="sobre"  className="sobre-title">Nossa história e Missão</h2>
      <p className="sobre-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quaerat
        quos commodi in. Aut laboriosam beatae ratione consequuntur voluptatibus
        pariatur!
      </p>
      <div className="sobre-primary">
        <span>🥗Foco em nutriçaõ</span>
        <span>👨‍🍳Sabor Caseiro</span>
        <span>🌍Sustentabilidade</span>
      </div>
      <div id="localizacao" className="sobre-segundary">
        <h2 className="sobre-paragraph">Onde Estamos</h2>
        <div className="linha"></div>
        <p>Nosso ponto de retirada e Cozinha Está localizado em:</p>
        <p className="sobre-terciary">
Av. Castelo Branco, 541 - Muriaé, MG
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.748861808985!2d-42.36898902309304!3d-21.12257628055036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbcc64e92e98b05%3A0xfd77ad1c71a498ca!2sHorto%20Florestal%20De%20Muria%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1765913928508!5m2!1spt-BR!2sbr"
          width="600"
          height="400"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div></div>
    </div>
  );
}

export default Sobre;

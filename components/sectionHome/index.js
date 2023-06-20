export class Section extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML =`
      <section>
            <div class="img-profile">
                <img src="./img/perfil.png" alt="Imagem de Perfil">
            </div>

            <div>
                <header>
                    <h1>Olá!</h1>
                    <h2>Um pouco sobre mim</h2>
                    <h3>
                        Meu nome é João Rocha, tenho mais de um ano de experiência com projetos e 
                        desenvolvimento front-end utilizando as tecnologias Javascript, CSS, HTML e ReactJS.
                    </h3>
                </header>

                <div class="box-main-buttons">
                    <a class="box-main-buttons__main-buttons" href="./pages/sobremim.html"><span>Sobre</span></a>
                    <a class="box-main-buttons__main-buttons" href="./pages/projetos.html"><span>Projetos</span></a>
                    <a class="box-main-buttons__main-buttons" href="https://wa.me/5521976747042" target="_blank"><span>Contato</span></a>
                </div>
            </div>
        </section>
      `;
    }
  }
  
  customElements.define('section-component', Section);
  
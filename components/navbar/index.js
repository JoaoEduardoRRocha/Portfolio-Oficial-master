export class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML =`
      <nav class="navbar">
          <div class="navbar__logo">
              <span>João Rocha</span>
              <p>Desenvolvedor Front-end</p>
          </div>

          <div class="navbar__links">
              <a href="/index.html">Página Inicial</a>
              <a href="/pages/sobremim.html">Sobre mim</a>
              <a href="/pages/projetos.html">Projetos</a>
              <a href="https://wa.me/5521976747042" target="_blank">Contato</a>
          </div>
      </nav>
    `;
  }
}

customElements.define('nav-bar-component', Navbar);

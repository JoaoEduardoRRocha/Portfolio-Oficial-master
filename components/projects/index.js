export class Projects extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML =`
      <article>
            <div class="container-projects">
                <img class="container-projects__logo-projects" src="/img/netflix.png"></img>
                <div class="container-projects__content">
                    <p>Netflix Clone, construído com as seguintes tecnologias:</p>
                    <li>- Javascript, html e css.</li>
                    <li>- ReactJS.</li>
                    <li>- API</li>
                    <li>- Responsividade para versões Mobile</li>
                </div>
                <div class="project-button">
                    <a target="_blank" href="https://devjoaorocha-react-project.vercel.app/"><img src="/img/seta.png" alt=""></a>
                    <a target="_blank" href="https://github.com/JoaoEduardoRRocha/clonenetflix"><img src="/img/gitbutton.png" alt=""></a>
                </div>
            </div>
            <div class="container-projects">
                <img class="container-projects__logo-projects" src="/img/tshirt.png"></img>
                <div class="container-projects__content">
                    <p>Esse projeto busca simular um site de vendas de camisetas, contendo:</p>
                    <li>- Carrinho de Compras.</li>
                    <li>- Botões de Adicionar/Remover produto do carrinho.</li>
                    <li>- Modal de compra finalizada.</li>
                </div>

                <div class="project-button">
                    <a target="_blank" href="https://joaoeduardorrocha.github.io/Site-de-Vendas/"><img class="img-projeto" src="/img/seta.png" alt=""></a>
                    <a target="_blank" href="https://github.com/JoaoEduardoRRocha/Site-de-Vendas"><img class="img-projeto" src="/img/gitbutton.png" alt=""></a>
                </div>
            </div>

            <div class="container-projects">
                <img class="container-projects__logo-projects" src="/img/githubfavorites.png"></img>
                <div class="container-projects__content">
                    <p>Projeto focado no desenvolvimento pessoal de JavaScript com bastante lógica, contendo:</p>
                    <li>- Busca de usuário do github.</li>
                    <li>- Adiciona e remove usuários do github.</li>
                </div>
                <div class="project-button">
                    <a target="_blank" href="https://joaoeduardorrocha.github.io/Github-Favorites/"><img src="/img/seta.png" alt=""></a>
                    <a target="_blank" href="https://github.com/JoaoEduardoRRocha/Github-Favorites"><img src="/img/gitbutton.png" alt=""></a>
                </div>
            </div>
        </article>
      `;
    }
  }
  
  customElements.define('projects-content-component', Projects);
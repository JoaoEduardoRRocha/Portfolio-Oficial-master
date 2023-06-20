export class SectionAbout extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML =`
      <section class="about-me">
                <div class="about-me__profile-img">
                    <img src="/img/perfil.png" alt="Imagem de Perfil">
                </div>
                
                <div class="about-me-text">
                    <label class="about-me-text__tittle">
                        Um pouco mais sobre mim
                    </label>
                    Meu nome é João Rocha e tenho 25 anos. Sempre tive muito contato e interesse com tecnologia. 
                    Durante a faculdade de Engenharia, há 2 anos, tive o prazer de estudar programação. 
                    Ver linhas de código se transformando em uma aplicação é fascinante. Com a chegada da pandemia, 
                    resolvi me dedicar totalmente a essa área. Atualmente, sou Desenvolvedor front-end 
                    e continuo aprimorando minhas habilidades por meio de trabalhos freelancers, cursos e projetos pessoais.
                </div>
      </section>
      `;
    }
  }
  
  customElements.define('section-about-component', SectionAbout);
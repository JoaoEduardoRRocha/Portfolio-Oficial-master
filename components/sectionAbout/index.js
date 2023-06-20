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
                    Meu nome é João Rocha e tenho 25 anos.
                    Sempre tive muito contato e interesse com tecnologia, durante a faculdade de Engenharia há 2 anos atrás,
                    tive o prazer de estudar programação. Ver linhas de códigos se transformando em uma aplicação é fascinante.
                    Com a chegada da pandemia, resolvi entrar de cabeça nessa área. Atualmente sou Desenvolvedor front-end e sigo
                    aprimorando minhas habilidades como freelancer, cursos e projetos pessoais.
                </div>
      </section>
      `;
    }
  }
  
  customElements.define('section-about-component', SectionAbout);
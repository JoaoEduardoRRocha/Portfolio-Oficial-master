export class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer>
        <div class="container-social-medias">
            <strong>Redes Sociais</strong>
                <a href="https://github.com/JoaoEduardoRRocha" target="_blank"><img src="/img/github.png" alt=""></a>
                <p>Github</p>
            
                <a href="https://www.linkedin.com/in/joaoeduardorrocha/" target="_blank"><img src="/img/linkeedin.png" alt=""></a>
                <p>Linkedin</p>

                <a href="//wa.me/5521976747042" target="_blank"><img src="/img/whatsapp.png" alt=""></a>
                <p>Whatsapp</p>
        </div>

        <div class="container-social-medias">
            <strong>Email</strong>
            <p>joaoeduardorrocha@gmail.com</p>
        </div>

        <div class="container-social-medias">
            <strong>Contato</strong>
            <p>(21) 97674-7042</p>
        </div>

        <div class="container-social-medias">
            <strong class="curriculum">Currículo</strong>
            <a href="https://drive.google.com/file/d/15XWXCZpUcF5fqh6q7bXJsYHzrqQJa1wI/view?usp=sharing" target="_blank"><img src="/img/curriculoicon.png" alt=""></a>
        </div>
    </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);
  
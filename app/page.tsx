const projects = [
  {
    title: "Conteudo HTML",
    category: "Design estatico",
    image: "/projects/html-design-estatico.png",
    className: "project-toucan",
  },
  {
    title: "Motion Design",
    category: "Animacao",
    image: "/projects/motion-design.png",
    className: "project-motion",
  },
  {
    title: "Diagramacao",
    category: "Editorial",
    image: "/projects/diagramacao.jpg",
    className: "project-editorial",
  },
  {
    title: "Ambiente 3D",
    category: "3D",
    image: "/projects/ambiente-3d.png",
    className: "project-3d",
  },
  {
    title: "eFacil",
    category: "Produto digital",
    image: "/projects/efacil.png",
    className: "project-efacil",
  },
  {
    title: "Quem sou eu?",
    category: "Pessoal",
    image: "/projects/quem-sou-eu.png",
    className: "project-about",
  },
];

const dribbbleUrl =
  "https://dribbble.com/shots/26681140-PORTF-LIO-ANIMA-O-MOTION-DESIGN";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="monogram" href="#inicio" aria-label="Pedro Augusto, inicio">
          PA
        </a>
        <nav aria-label="Navegacao principal">
          <a href="#trabalhos">Trabalhos</a>
          <a href="#sobre">Sobre</a>
          <a href={dribbbleUrl} target="_blank" rel="noreferrer">
            Dribbble
          </a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="kicker">Portfolio 2026</p>
          <h1>
            Pedro
            <br />
            Augusto
          </h1>
          <p className="discipline">Design visual, motion e 3D.</p>
          <a className="text-link" href="#trabalhos">
            Ver trabalhos <span aria-hidden="true">↘</span>
          </a>
        </div>

        <div className="hero-art" aria-label="Projeto de design estatico com tucano">
          <span className="art-flag" aria-hidden="true" />
          <span className="art-sun" aria-hidden="true" />
          <img
            src="/projects/html-design-estatico.png"
            alt="Composicao grafica com tucano e embalagem de chocolate"
          />
          <p className="art-caption">01 / Design estatico</p>
        </div>
      </section>

      <section className="work" id="trabalhos" aria-labelledby="work-title">
        <div className="section-title">
          <p className="kicker">Selecao</p>
          <h2 id="work-title">Trabalhos</h2>
          <span>06</span>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project ${project.className}`} key={project.title}>
              <a
                className="project-link"
                href={project.image}
                target="_blank"
                rel="noreferrer"
                aria-label={`Abrir imagem do projeto ${project.title}`}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-info">
                  <div>
                    <p>{project.category}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="sobre" aria-labelledby="about-title">
        <p className="kicker">Sobre</p>
        <h2 id="about-title">
          Imagem, movimento e materia para ideias que pedem presenca.
        </h2>
        <a className="text-link light" href={dribbbleUrl} target="_blank" rel="noreferrer">
          Acompanhar no Dribbble <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer>
        <p>Pedro Augusto</p>
        <a href="#inicio">Voltar ao topo <span aria-hidden="true">↑</span></a>
      </footer>
    </main>
  );
}

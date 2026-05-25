const dados = [
  {
    id: 1,
    titulo: "NASA Tests AI System for Deep Space Missions",
    descricao: "New AI technology could assist astronauts during long missions.",
    conteudo: "NASA has started testing a new artificial intelligence system capable of helping astronauts make critical decisions during deep space missions. The project aims to reduce communication delays between Earth and spacecraft while improving autonomous operations in future Mars missions.",
    categoria: "Artificial Intelligence",
    autor: "Mary Cooper",
    data: "2026-05-18",
    imagem: "/Users/admin/Downloads/nasa-yZygONrUBe8-unsplash.jpg"
  },
  {
    id: 2,
    titulo: "SpaceX Reveals New Lunar Rocket Design",
    descricao: "The company presented a futuristic rocket built for moon travel.",
    conteudo: "SpaceX introduced a redesigned lunar rocket capable of transporting heavy cargo and astronauts to the Moon. Engineers say the new structure improves fuel efficiency and landing precision.",
    categoria: "Space",
    autor: "Daniel Brooks",
    data: "2026-05-15",
    imagem: "/Users/admin/Downloads/nasa-dCgbRAQmTQA-unsplash.jpg"
  },

  {
    id: 3,
    titulo: "AI Detects Dangerous Asteroids Faster Than Humans",
    descricao: "Scientists developed an AI model for asteroid detection.",
    conteudo: "Researchers created a machine learning system capable of identifying dangerous asteroids much faster than traditional methods. The technology could improve Earth's planetary defense systems.",
    categoria: "Artificial Intelligence",
    autor: "Sophia Miller",
    data: "2026-05-10",
    imagem: "/Users/admin/Downloads/javier-miranda-SYRNx7SLHCk-unsplash.jpg"
  },

  {
    id: 4,
    titulo: "Scientists Discover Water Traces on Distant Planet",
    descricao: "A new discovery increases the possibility of extraterrestrial life.",
    conteudo: "Astronomers found evidence of water vapor in the atmosphere of a distant exoplanet using advanced telescope systems. The discovery is considered a major step in the search for habitable worlds.",
    categoria: "Space",
    autor: "Lucas Green",
    data: "2026-05-08",
    imagem: "/Users/admin/Downloads/nasa-2W-QWAC0mzI-unsplash.jpg"
  },

  {
    id: 5,
    titulo: "OpenAI Announces Safer AI Research Initiative",
    descricao: "New research program focuses on safer and ethical AI systems.",
    conteudo: "OpenAI announced a global initiative to study safer AI development practices, encouraging transparency and responsible innovation in advanced artificial intelligence systems.",
    categoria: "Artificial Intelligence",
    autor: "Emma Watson",
    data: "2026-05-06",
    imagem: "/Users/admin/Downloads/cash-macanaya-X9Cemmq4YjM-unsplash.jpg"
  },

  {
    id: 6,
    titulo: "James Webb Telescope Captures Stunning Galaxy Images",
    descricao: "New ultra-detailed images impress scientists worldwide.",
    conteudo: "The James Webb Space Telescope released high-resolution images of distant galaxies never observed before. Scientists believe the images will help understand the origins of the universe.",
    categoria: "Space",
    autor: "Olivia Carter",
    data: "2026-05-03",
    imagem: "/Users/admin/Downloads/nasa-rTZW4f02zY8-unsplash.jpg"
  },

  {
    id: 7,
    titulo: "Humanoid Robots Gain Advanced AI Capabilities",
    descricao: "Robots can now understand emotions and conversations better.",
    conteudo: "Tech companies are integrating advanced language models into humanoid robots, allowing more natural conversations and improved emotional recognition.",
    categoria: "Artificial Intelligence",
    autor: "Noah Taylor",
    data: "2026-05-01",
    imagem: "/Users/admin/Downloads/gabriele-malaspina-CjWsslYVnPI-unsplash.jpg"
  },

  {
    id: 8,
    titulo: "ESA Plans New Mission to Explore Jupiter Moons",
    descricao: "European scientists prepare ambitious space mission.",
    conteudo: "The European Space Agency revealed plans for a mission focused on exploring Jupiter's icy moons. Researchers hope to study underground oceans and possible signs of microbial life.",
    categoria: "Space",
    autor: "Emily Davis",
    data: "2026-04-28",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg"
  }
];

const newsContainer = document.getElementById("newsContainer");
const detailsContainer = document.getElementById("detailsContainer");
const searchInput = document.getElementById("searchInput");

if (newsContainer) {

  function renderCards(lista) {

    newsContainer.innerHTML = "";

    lista.forEach(item => {

      newsContainer.innerHTML += `
        <div class="card">

          <img src="${item.imagem}" alt="${item.titulo}">

          <div class="card-content">

            <div class="category">${item.categoria}</div>

            <h3>${item.titulo}</h3>

            <p>${item.descricao}</p>

            <a class="read-more" href="detalhes.html?id=${item.id}">
              Read More
            </a>

          </div>

        </div>
      `;
    });
  }

  renderCards(dados);

  searchInput.addEventListener("input", () => {

    const valor = searchInput.value.toLowerCase();

    const filtrados = dados.filter(item =>
      item.titulo.toLowerCase().includes(valor) ||
      item.categoria.toLowerCase().includes(valor)
    );

    renderCards(filtrados);
  });
}


if (detailsContainer) {

  const params = new URLSearchParams(window.location.search);

  const id = Number(params.get("id"));

  const noticia = dados.find(item => item.id === id);

  if (noticia) {

    detailsContainer.innerHTML = `
      <img
        class="details-image"
        src="${noticia.imagem}"
        alt="${noticia.titulo}"
      >

      <div class="details-category">
        ${noticia.categoria}
      </div>

      <h1 class="details-title">
        ${noticia.titulo}
      </h1>

      <div class="details-meta">
        By ${noticia.autor} • ${noticia.data}
      </div>

      <p class="details-text">
        ${noticia.conteudo}
      </p>
    `;
  }
}

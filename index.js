document.addEventListener('DOMContentLoaded', () => {
    const listaMusicas = document.getElementById('listaMusicas');

    const musicasIniciais = [
        {
            id: 1,
            titulo: 'Evidências',
            artista: 'Chitãozinho e Xororó',
            genero: 'Sertanejo',
            ano: 1990,
            duracao: 5
        }
    ];

    function obterMusicas() {
        const musicasSalvas = localStorage.getItem('musicas');
        if (!musicasSalvas) {
            localStorage.setItem('musicas', JSON.stringify(musicasIniciais));
            return musicasIniciais;
        }
        return JSON.parse(musicasSalvas);
    }

    function renderizarLista() {
        const musicas = obterMusicas();
        listaMusicas.innerHTML = '';

        musicas.forEach(musica => {
            const article = document.createElement('article');
            article.className = 'musica';
            article.innerHTML = `
                <h2>${musica.titulo}</h2>
                <p class="artista">${musica.artista}</p>
                <p class="detalhes">${musica.genero} | ${musica.ano} | ${musica.duracao} min</p>
                <div class="acoes">
                    <a class="editar" href="editar.html?id=${musica.id}">Editar</a>
                    <button class="apagar" data-id="${musica.id}">Apagar</button>
                </div>
            `;
            listaMusicas.appendChild(article);
        });

        adicionarEventosApagar();
    }

    function adicionarEventosApagar() {
        const botoesApagar = document.querySelectorAll('.apagar');
        botoesApagar.forEach(botao => {
            botao.addEventListener('click', (event) => {
                const id = Number(event.target.getAttribute('data-id'));
                apagarMusica(id);
            });
        });
    }

    function apagarMusica(id) {
        let musicas = obterMusicas();
        musicas = musicas.filter(m => m.id !== id);
        localStorage.setItem('musicas', JSON.stringify(musicas));
        renderizarLista();
    }

    renderizarLista();
});
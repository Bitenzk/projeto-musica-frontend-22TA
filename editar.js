document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');

    const inputTitulo = document.getElementById('titulo');
    const inputArtista = document.getElementById('artista');
    const inputGenero = document.getElementById('genero');
    const inputAno = document.getElementById('ano');
    const inputDuracao = document.getElementById('duracao');
    const botaoSalvar = document.getElementById('botaoSalvar');

    const musicas = JSON.parse(localStorage.getItem('musicas')) || [];
    const musica = musicas.find(m => m.id == idParam);

    if (musica) {
        inputTitulo.value = musica.titulo;
        inputArtista.value = musica.artista;
        inputGenero.value = musica.genero;
        inputAno.value = musica.ano;
        inputDuracao.value = musica.duracao;
    }

    botaoSalvar.addEventListener('click', () => {
        const titulo = inputTitulo.value.trim();
        const artista = inputArtista.value.trim();
        const genero = inputGenero.value.trim();
        const ano = inputAno.value.trim();
        const duracao = inputDuracao.value.trim();

        if (!titulo || !artista || !genero || !ano || !duracao) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        const index = musicas.findIndex(m => m.id == idParam);
        if (index !== -1) {
            musicas[index] = {
                id: Number(idParam),
                titulo,
                artista,
                genero,
                ano,
                duracao
            };
            localStorage.setItem('musicas', JSON.stringify(musicas));
        }

        window.location.href = 'index.html';
    });
});
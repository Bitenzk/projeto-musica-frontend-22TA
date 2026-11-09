document.addEventListener('DOMContentLoaded', () => {
    const botaoCadastrar = document.getElementById('botaoCadastrar');
    const inputTitulo = document.getElementById('titulo');
    const inputArtista = document.getElementById('artista');
    const inputGenero = document.getElementById('genero');
    const inputAno = document.getElementById('ano');
    const inputDuracao = document.getElementById('duracao');

    botaoCadastrar.addEventListener('click', () => {
        const titulo = inputTitulo.value.trim();
        const artista = inputArtista.value.trim();
        const genero = inputGenero.value.trim();
        const ano = inputAno.value.trim();
        const duracao = inputDuracao.value.trim();

        if (!titulo || !artista || !genero || !ano || !duracao) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        const musicas = JSON.parse(localStorage.getItem('musicas')) || [];
        const novaMusica = {
            id: Date.now(),
            titulo,
            artista,
            genero,
            ano,
            duracao
        };

        musicas.push(novaMusica);
        localStorage.setItem('musicas', JSON.stringify(musicas));
        window.location.href = 'index.html';
    });
});
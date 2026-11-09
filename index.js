const urlBackend = "http://localhost:3000"
const listaMusicas = document.getElementById("listaMusicas")

async function buscarMusica(){
    const resposta = await(urlBackend)
    const musicas = await resposta.json()

    musicas.array.forEach ((musica) => {
        listaMusicas.innerHTML += `
                <article class="musica">
                    <h2>Evidências</h2>
                    <p class="artista">Chitãozinho e Xororó</p>
                    <p class="detalhes">Sertanejo | 1990 | 5 min</p>
                    <div class="acoes">
                        <a class="editar" href="editar.html?id=1">Editar</a>
                        <button class="apagar">Apagar</button>
                    </div>
                </article>            
            `  
    });
}

buscarMusica()
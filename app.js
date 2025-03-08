//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo() {
    let campoInput = document.getElementById("amigo");
    let nomeAmigo = campoInput.value.trim();

    if (nomeAmigo === "") { 
        alert("Por favor, insira um nome.");
        return;
    } 

    listaDeAmigos.push(nomeAmigo); // Adiciona ao array
    console.log(listaDeAmigos);

    campoInput.value = ""; // Limpa o campo automaticamente

    atualizarLista(); // Atualiza a exibição da lista
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtém o elemento <ul>
    lista.innerHTML = ""; // Limpa a lista para evitar duplicações

    for (let amigo of listaDeAmigos) {
        let item = document.createElement("li"); // Cria um novo <li>
        item.textContent = amigo; // Define o nome do amigo no <li>
        lista.appendChild(item); // Adiciona o <li> à <ul>
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) { // Valida se há amigos na lista
        alert("Nenhum amigo disponível para sortear!");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length); // Gera um índice aleatório
    let amigoSorteado = listaDeAmigos[indiceAleatorio]; // Obtém o nome correspondente

    document.getElementById("resultado").innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`; // Exibe o nome sorteado
}

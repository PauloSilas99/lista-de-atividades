const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const ListaCompleta = document.querySelector('.list-tasks')

let minhaLista = []
function addNovaTarefa(){
    minhaLista.push({
        tarefa : input.value,
        concluida: false
    })
        
    input.value = ''
    mostrarTarefas()
}
function mostrarTarefas(){
    let novaLi = ''
    minhaLista.forEach((item,posicao) => {
        novaLi= novaLi + `
        <li class="task ${item.concluida && "done"}">
                <img src="img/checked.png" alt="check na tarefa" onclick="concluirTarefa(${posicao})">
                <p>${item.tarefa}</p>
                <img src="img/trash.png" alt="trash lixo" onclick="deletarItem(${posicao})">
            </li> 
            `
    });
    ListaCompleta.innerHTML = novaLi

    localStorage.setItem('Lista', JSON.stringify(minhaLista))
}

function deletarItem(posicao){
    minhaLista.splice(posicao,1)
    mostrarTarefas()
}

function concluirTarefa(posicao){
    minhaLista[posicao].concluida = !minhaLista[posicao].concluida
    mostrarTarefas()
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('Lista')
    if(tarefasDoLocalStorage){
        minhaLista = JSON.parse(tarefasDoLocalStorage)
    }
    mostrarTarefas()
}
recarregarTarefas()
button.addEventListener('click',addNovaTarefa);
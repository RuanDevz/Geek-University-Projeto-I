const input = document.getElementById('tarefas');
const cadastrar = document.getElementById('btn');
const lista = document.querySelector('.Lista');
const vazia = document.getElementById('vazia');

cadastrar.addEventListener('click', AdicionarTarefa);

function AdicionarTarefa() {
  const novaTarefa = input.value;

  if (novaTarefa !== '') {
    const novoItem = document.createElement('li');
    novoItem.innerText = novaTarefa;

    novoItem.addEventListener('click', ExcluirTarefa);

    lista.appendChild(novoItem);

    input.value = '';
    vazia.style.display = 'none';
  } else {
    vazia.innerText = 'Digite uma tarefa antes de cadastrar.';
    vazia.style.display = 'block';
  }
}

function ExcluirTarefa() {
  this.remove();
  if (lista.childElementCount === 0) {
    vazia.style.display = 'block';
  }
}

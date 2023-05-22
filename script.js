const input = document.getElementById('tarefas');
const cadastrar = document.getElementById('btn');
const lista = document.querySelector('.Lista');
const vazia = document.getElementById('vazia');

cadastrar.addEventListener('click', AdicionarTarefa);

// Carregar tarefas salvas do armazenamento local
window.addEventListener('load', CarregarTarefas);

function AdicionarTarefa() {
  const novaTarefa = input.value;

  if (novaTarefa !== '') {
    const novoItem = document.createElement('li');
    novoItem.innerText = novaTarefa;

    novoItem.addEventListener('click', ExcluirTarefa);

    lista.appendChild(novoItem);

    // Salvar tarefas no armazenamento local
    SalvarTarefas();

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

  // Salvar tarefas atualizadas no armazenamento local
  SalvarTarefas();
}

function SalvarTarefas() {
  const tarefas = Array.from(lista.children).map((item) => item.innerText);
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function CarregarTarefas() {
  const tarefas = localStorage.getItem('tarefas');
  if (tarefas) {
    const tarefasArray = JSON.parse(tarefas);

    tarefasArray.forEach((tarefa) => {
      if (tarefa.trim() !== '') {
        const novoItem = document.createElement('li');
        novoItem.innerText = tarefa;

        novoItem.addEventListener('click', ExcluirTarefa);

        lista.appendChild(novoItem);
      }
    });

    if (lista.childElementCount > 0) {
      vazia.style.display = 'none';
    }
  }
}

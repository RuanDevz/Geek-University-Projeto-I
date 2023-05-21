const input = document.getElementById('tarefas');
const cadastrar = document.getElementById('btn');
const lista = document.querySelector('.Lista');
const vazia = document.getElementById('vazia');

cadastrar.addEventListener('click', AdicionarTarefa);

function AdicionarTarefa() {
  const novatarefa = input.value;

  if (novatarefa !== '') {
    const novoitem = document.createElement('li');
    const tarefa = document.createElement('span');
    const check = document.createElement('i');
    const xmark = document.createElement('i');

    tarefa.textContent = novatarefa;
    check.classList.add('fa', 'fa-check');
    xmark.classList.add('fa', 'fa-xmark');

    novoitem.appendChild(tarefa);
    novoitem.appendChild(check);
    novoitem.appendChild(xmark);
    novoitem.classList.add('item');

    lista.appendChild(novoitem);

    input.value = '';
    vazia.textContent = '';
  } else {
    vazia.textContent = 'Por favor, escreva uma tarefa';
  }
}

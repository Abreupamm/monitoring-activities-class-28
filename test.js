const BUTTON_CREATE_TASK = document.getElementById('create-task');
const TASKS_lIST_OL = document.getElementById('task-list');
const BUTTON_REMOVE_SELECTED = document.getElementById('remove-selected');
const LIST_ELEMENTS_LI = document.getElementsByTagName('li');
const BUTTON_REMOVE_FINISHD = document.getElementById('remove-finishd');
const BUTTON_REMOVE_ALL = document.getElementById('remove-all');

function saveTasks () {
  localStorage.setItem(
    'salvar-tarefas',
    JSON.stringify(TASKS_lIST_OL.innerHTML)
  );
}

// function removeTask (list) {
//   for (let i = list.length - 1; i >= 0; i -= 1) {
//     list[i].remove();
//   }
// }

function removeAll () {
  const remove = confirm('Deseja mesmo remover todas as tarefas?');
  if (remove) {
    for (let i = LIST_ELEMENTS_LI.length - 1; i >= 0; i -= 1) {
      LIST_ELEMENTS_LI[i].remove();
    }
  }
  saveTasks();
}

function removeFinishd () {
  const itens = document.getElementsByClassName('completed');
  for (let i = itens.length - 1; i >= 0; i -= 1) {
    itens[i].remove();
  }
  saveTasks();
}

function setFinished (elemetCheckbox) {
  let elementLi;
  for (let index = 0; index < LIST_ELEMENTS_LI.length; index++) {
    if(LIST_ELEMENTS_LI[index].innerText === elemetCheckbox.name)
    elementLi = LIST_ELEMENTS_LI[index];
  };

  if(elemetCheckbox.checked) {
    elementLi.classList.add('completed');
    elemetCheckbox.classList.add('checked');
  } else {
    elementLi.classList.remove('completed');
    elemetCheckbox.classList.remove('checked');
  }
  saveTasks();
}

function verifyCheckbox (element) {
  if (element.classList.contains('checkbox')) {
    setFinished(element);
}
}

function removeTaskSelected () {
  for (let i = 0; i < LIST_ELEMENTS_LI.length; i++) {
    if (LIST_ELEMENTS_LI[i].classList.contains('selected')) {
      LIST_ELEMENTS_LI[i].remove();
    }
  }
  saveTasks();
}

function selectTask (event) {
  const element = event.target;
  const isSelected = element.classList.contains('selected');
  const listIsSelected = document.getElementsByClassName('selected');
  if (listIsSelected.length > 0) {
    for (let i = 0; i < listIsSelected.length; i += 1) {
     listIsSelected[i].classList.remove('selected');
    }
  }

  if (isSelected) {
    element.classList.remove('selected');
  } else {
    element.classList.add('selected');
  }
  verifyCheckbox(element);
  saveTasks();
}

function createIcon(type) {
  const img = document.createElement('img');
  img.classList = 'type-icon';
  // console.log(type);
  switch (type) {
    case 'pessoal':
      img.src = 'images/do-utilizador.png';
      break;
    case 'trabalho':
      img.src = 'images/briefcase.png';
      break;
    case 'desejo':
      img.src = 'images/favorito.png';
      break;
    case 'compras':
      img.src = 'images/bolsa-de-compras.png';
      break;

    default:
      break;
  }
  return img;
}

function createTask (){
  const inputTextTask = document.getElementById('task-text');
  const elementTaskType = document.getElementById('task-type');
  const option = elementTaskType.options[elementTaskType.selectedIndex].value;
  // console.log(option);
  if(!inputTextTask.value) {
    alert('É necessário criar uma tarefa');
  } else {
    const elementLi = document.createElement('li');
    const elementCheckbox = document.createElement('input');
    const div = document.createElement('div');

    elementLi.innerText = inputTextTask.value;
    elementLi.classList = 'list';
    elementCheckbox.classList = 'checkbox';
    elementCheckbox.name = inputTextTask.value;
    elementCheckbox.type = 'checkbox'
    div.classList = 'div-icon-talk'

    TASKS_lIST_OL.appendChild(elementLi);
    div.appendChild(createIcon(option))
    div.appendChild(elementCheckbox);
    elementLi.appendChild(div)
    inputTextTask.value = null;
  }
  saveTasks();
}

BUTTON_CREATE_TASK.addEventListener('click', createTask);
TASKS_lIST_OL.addEventListener('click', selectTask);
BUTTON_REMOVE_SELECTED.addEventListener('click', removeTaskSelected);
BUTTON_REMOVE_FINISHD.addEventListener('click', removeFinishd);
BUTTON_REMOVE_ALL.addEventListener('click', removeAll);

window.onload = () => {
  const listTasks = JSON.parse(
    localStorage.getItem('salvar-tarefas')
  );
  if (listTasks) {
    TASKS_lIST_OL.innerHTML = listTasks;
    const inputCheckbox = document.getElementsByClassName('checkbox')
    for (let index = 0; index < inputCheckbox.length; index++) {
      if(inputCheckbox[index].classList.contains('checked')) {
        inputCheckbox[index].checked = true;
      }
    }
  }
};


//https://cssgradient.io/
//https://www.alura.com.br/artigos/css-guia-do-flexbox?gclid=Cj0KCQjw_4-SBhCgARIsAAlegrUPvjMmkV3Doiw7NJEtlyZpWKji3LcVzVFzL4FCUTUuHfCI8CAT5CgaAln4EALw_wcB
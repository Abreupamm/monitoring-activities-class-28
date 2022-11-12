const BUTTON_CREATE_TASK = document.getElementById('create-task');
const TASKS_lIST_OL = document.getElementById('task-list');
const BUTTON_REMOVE_SELECTED = document.getElementById('remove-selected');

function saveLocalStorage() {
  localStorage.setItem('myTasks', JSON.stringify(TASKS_lIST_OL.innerHTML));
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

function createTask() {
  const inputTextTask = document.getElementById('task-text');
  const elementTaskType = document.getElementById('task-type');

  const option = elementTaskType.options[elementTaskType.selectedIndex].value;
  const elementLi = document.createElement('li');
  const elementCheckbox = document.createElement('input');
  const div = document.createElement('div');
  elementLi.innerText = inputTextTask.value;
  elementLi.classList.add('list');
  elementCheckbox.type = 'checkbox'
  elementCheckbox.classList = 'checkbox';
  div.classList = 'div-icon-talk';

  div.appendChild(createIcon(option));
  div.appendChild(elementCheckbox);
  elementLi.appendChild(div);
  TASKS_lIST_OL.appendChild(elementLi);
  inputTextTask.value = null;
  saveLocalStorage();
}

function setFinished(elemento) {
  const marked = elemento.target.checked;
  const li = elemento.target.parentNode.parentNode;

  if (marked) {
    li.classList.add('completed');
  } else {
    li.classList.remove('completed');
  }
  saveLocalStorage();
}

function selecionaTask(event) {
  const checkbox = event.target.type;

  const verifyCheckBox = checkbox === 'checkbox' ? true : false;
  
  if (verifyCheckBox) {
    return setFinished(event);
  }

  const li = document.getElementsByClassName('selected');
  const verify = event.target.classList.contains('selected')

  if (li.length > 0) {
    for (let index = 0; index < li.length; index += 1) {
      li[index].classList.remove('selected');
    }
  }

  if (verify) {
    event.target.classList.remove('selected');
  } else {
    event.target.classList.add('selected');
  }
  saveLocalStorage();
}

function removeSelected() {
  const taskSelected = document.querySelector('.selected');
  if (!taskSelected) {
    return false
  } else {
    taskSelected.remove();
  }
  saveLocalStorage();
}

BUTTON_CREATE_TASK.addEventListener('click', createTask);
TASKS_lIST_OL.addEventListener('click', selecionaTask);
BUTTON_REMOVE_SELECTED.addEventListener('click', removeSelected);

window.onload = () => {
  const data = JSON.parse(localStorage.getItem('myTasks'));
  TASKS_lIST_OL.innerHTML = data;
}
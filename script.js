const BUTTON_CREATE_TASK = document.getElementById('create-task');
const TASKS_lIST_OL = document.getElementById('task-list');

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
  elementLi.classList = 'list';
  elementCheckbox.type = 'checkbox'
  elementCheckbox.classList = 'checkbox';
  div.classList = 'div-icon-talk';

  div.appendChild(createIcon(option));
  div.appendChild(elementCheckbox);
  elementLi.appendChild(div);
  TASKS_lIST_OL.appendChild(elementLi);
  inputTextTask.value = null;
}



BUTTON_CREATE_TASK.addEventListener('click', createTask);
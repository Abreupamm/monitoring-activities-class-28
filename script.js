const BUTTON_CREATE_TASK = document.getElementById('create-task');
const TASKS_lIST_OL = document.getElementById('task-list');
const BUTTON_REMOVE_SELECTED = document.getElementById('remove-selected');


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

function createTask () {
  const inputTexTask = document.getElementById('task-text');
  const elementLi = document.createElement('li');
  const elementCheckbox = document.createElement('input');
  const elementTaskType = document.getElementById('task-type');
  const div = document.createElement('div');
  const option = elementTaskType.options[elementTaskType.selectedIndex].value
  if (inputTexTask.value === '') {
    alert('É necessário criar uma tarefa')
  } else {
    elementLi.innerText = inputTexTask.value
    elementLi.classList = 'list'
    elementCheckbox.classList = 'checkbox'
    elementCheckbox.type = 'checkbox'
    div.classList = 'div-icon-talk'


    TASKS_lIST_OL.appendChild(elementLi);
    div.appendChild(createIcon(option))
    div.appendChild(elementCheckbox);
    elementLi.appendChild(div)
    inputTexTask.value = ''
  }

}

BUTTON_CREATE_TASK.addEventListener('click', createTask);
BUTTON_REMOVE_SELECTED.addEventListener('click', removeSelected);
TASKS_lIST_OL.addEventListener('click', selectTask);

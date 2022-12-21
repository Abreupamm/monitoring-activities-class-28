const ELEMENT_MENU = document.querySelector('.container-menu')
const BUTTONS_FILTER = document.querySelectorAll('.container-buttons button');
const BUTTON_ORDER = document.querySelector('#order');

const generateElements = ({ name, description, image, price }) => {
  const div = document.createElement('div');
  const h4 = document.createElement('h4');
  const img = document.createElement('img');
  const span = document.createElement('span');
  const buttonAdd = document.createElement('button');
  const inputQtd = document.createElement('input');

  img.src = image;
  h4.innerText = name;
  span.innerText = price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
  buttonAdd.innerText = 'Adicionar';
  buttonAdd.className = 'add-button';  
    inputQtd.type = 'number';
    inputQtd.min = 1;
    inputQtd.value = 1;

    div.className = 'card-menu';
    div.appendChild(img);
  div.appendChild(h4);
  div.appendChild(span);
  div.appendChild(inputQtd);
  div.appendChild(buttonAdd);

  if(description) {
    const p = document.createElement('p');
    p.innerText = description;
    div.appendChild(p);
  }

  return div
}

const generateElementsFinalizeOrder = (totalPrice) => {
  
  const spanTotal = document.createElement('span');
  const buttonFinalize = document.createElement('button');

  spanTotal.innerText = `TOTAL: ${totalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;
  buttonFinalize.innerText = 'Finalizar'
  buttonFinalize.addEventListener('click', () => {});

  ELEMENT_MENU.appendChild(spanTotal);
  ELEMENT_MENU.appendChild(buttonFinalize);
}


const calcTotalPrice = (prices) => {
  return prices.reduce((acc, curr) => {
    acc += curr
    return acc
  }, 0);
}

const generateElementsOrder = (items) => {
  ELEMENT_MENU.innerHTML = '';
  const  totalPrice = []
  items.forEach((item) => {
    totalPrice.push(JSON.parse(item.qtd) * item.price);
    const div = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');
    const p = document.createElement('p');

    img.src = item.image;
    span.innerText = item.name;
    p.innerText = `Quantidade: ${item.qtd}, Valor: ${(JSON.parse(item.qtd) * item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`

    div.className = 'card-order-menu';
    div.appendChild(img);
    div.appendChild(span);
    div.appendChild(p);
    ELEMENT_MENU.appendChild(div);
  })
  generateElementsFinalizeOrder(calcTotalPrice(totalPrice))
}


const getOrder = () => {
 const order = JSON.parse(localStorage.getItem('order'));
   const result = order.map((element) => {
    const item = menu.find((e) => e.name === element.name);
    return {...item, qtd: element.qtd }
   })

   generateElementsOrder(result);

}

const data = []

const saveOrder = ({ target }) => {
  const item = target.parentNode.children
  data.push({ name: item[1].innerText, qtd: item[3].value })
  localStorage.setItem('order', JSON.stringify(data));
}


const addEventeButtonAdd = () => {
  const buttonsAdd = document.querySelectorAll('.add-button');
  buttonsAdd.forEach((button) => button.addEventListener('click', saveOrder));
}

const getMenu = (event) => {
 let allMenu = menu

  if (event && event.target.name !== 'all') {
    allMenu = menu.filter((element) => element.type === event.target.name)
  }

  ELEMENT_MENU.innerHTML = '';

  allMenu.forEach((element) => {
        const item = generateElements(element);
        ELEMENT_MENU.appendChild(item);
    });

    addEventeButtonAdd();
}

BUTTONS_FILTER.forEach((button) => button.addEventListener('click', getMenu))
BUTTON_ORDER.addEventListener('click', getOrder);

getMenu();
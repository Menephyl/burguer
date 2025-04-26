console.log(menuOptions);

const list = document.querySelector("ul");
// const product = { name: 'X-Salada', price: 19, vegan: false, src: './img/xsalada.jpeg' }

// list.innerHTML=`
//         <li>
//      <img src=${product.src} alt=${product.name}>
//             <p>${product.name}</p>
//             <P class="item-price">R$ ${product.price}</P>
//         </li>
// `
const buttonShowAll = document.querySelector(".show-all");
const ButtonMapAll = document.querySelector(".map-all");
const buttonSumAll= document.querySelector(".sum-all");
const buttonFilterAll=document.querySelector(".filter-all");


//  dinheiro

function formatCurrency(value){
  const newValue = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  return newValue
}


function showAll(productsArray){
  let myLi = ''
  productsArray.forEach((product) => {
    myLi += `
   <li>
   <img src=${product.src} alt=${product.name}>
   <p>${product.name}</p>
   <p class="item-price">R$ ${formatCurrency(product.price)} reais</p>
   </li>
   `
  })
  list.innerHTML = myLi;

}

function mapAll() {
const newPrices = menuOptions.map((product) => ({
  ...product,
  price: product.price *0.9,
}))
showAll(newPrices)

}



function sumAll() {

  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
  list.innerHTML =`
  <li>
  
  <p> O valor total dos itens é R$ ${formatCurrency(totalValue)}</p>
  </li>
  
  `
  console.log(totalValue)
}

function filterAll() {

  filterJustVegan = menuOptions.filter((product) => product.vegan )

  showAll(filterJustVegan)
}

 buttonShowAll.addEventListener('click', ()=> showAll(menuOptions))
  ButtonMapAll.addEventListener('click', mapAll)
  buttonSumAll.addEventListener('click', sumAll)
  buttonFilterAll.addEventListener('click', filterAll)
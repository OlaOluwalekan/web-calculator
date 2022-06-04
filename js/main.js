// SELECT ALL BUTTONS/KEY
let allBtn = document.querySelectorAll('.btn');
let calcScreen = document.querySelector('.calc-screen');

// console.log(allBtn);
for(let i = 0; i < allBtn.length; i++) {
  allBtn[i].addEventListener('click', () => {
    console.log(allBtn[i].textContent);
    calcScreen.innerHTML += allBtn[i].textContent;
  })
}

// window.onload = () => {
  
// }
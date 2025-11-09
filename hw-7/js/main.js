// ==== Task 1 ==== //
const blocks = document.querySelectorAll('.block');

blocks.forEach(block => {
  const btn = document.createElement('button');
  btn.className = 'remove-btn';
  btn.textContent = '✖'; 
  block.appendChild(btn);

  btn.addEventListener('click', () => {
    block.remove();
  });
});

// ==== Task 2 ==== //
const burger = document.querySelector('.burger');
const menuList = document.querySelector('.menu-list');
const mainContent = document.querySelector('main');

burger.addEventListener('click', (event) => {
  event.stopPropagation();
  menuList.classList.toggle('active');
  mainContent.classList.toggle('shifted');
});

document.addEventListener('click', (event) => {
  const isClickInside = menuList.contains(event.target) || burger.contains(event.target);
  if (!isClickInside) {
    menuList.classList.remove('active');
    mainContent.classList.remove('shifted');
  }
});

// ==== Task 1 ==== //
document.getElementById('createBtn').addEventListener('click', function() {
  const newDiv = document.createElement('div');
  newDiv.textContent = "Привіт! Я новий елемент.";
  
  newDiv.style.backgroundColor = '#cce7ff';
  newDiv.style.padding = '10px';
  newDiv.style.marginTop = '10px';
  newDiv.style.borderRadius = '8px';
  newDiv.style.textAlign = 'center';
  
  document.querySelector('.container').appendChild(newDiv);
});

// ==== Task 2 ==== //
document.getElementById('editBtn').addEventListener('click', function() {
  const newText = prompt("Введіть новий текст:");
  if (newText !== null && newText.trim() !== '') {
    document.getElementById('editable').textContent = newText;
  }
});

// ==== Task 3 ==== //
const toggleBtn = document.getElementById('toggleBtn');
const boxes = document.querySelectorAll('.box');
let visible = true;

toggleBtn.addEventListener('click', () => {
  visible = !visible;
  boxes.forEach(box => {
    box.style.display = visible ? 'block' : 'none';
  });
  toggleBtn.textContent = visible ? 'Сховати елементи' : 'Показати елементи';
});

// ==== Task 4 ==== //

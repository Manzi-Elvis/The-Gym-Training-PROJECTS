const openBtn = document.querySelector('.openModal');
const closeBtn = document.querySelector('#closeModal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

openBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
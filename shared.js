const backdrop = document.querySelector('.backdrop');
const buttons = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');
const hideModal = document.querySelector('.modal__action--negative');

function toggleModal(state) {
  console.log('Inside', state);
  backdrop.style.display = state ? 'block' : 'none';
  modal.style.display = state ? 'block' : 'none';
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    toggleModal(true);
  });
});

hideModal.addEventListener('click', () => {
  toggleModal(false);
});

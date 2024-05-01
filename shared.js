const backdrop = document.querySelector('.backdrop');
const selectPlanButtons = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal__action--negative');
const toggleBtn = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

selectPlanButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    toggleModal(true);
  });
});

backdrop.addEventListener('click', () => {
  hideBackdrop();
  hideMobileNav();
  if (modal) {
    hideModal();
  }
});

toggleBtn.addEventListener('click', () => {
  showMobileNav();
  showBackdrop();
});

if (closeModalBtn) {
  closeModalBtn.addEventListener('click', () => {
    toggleModal(false);
  });
}

function toggleModal(state) {
  if (state) {
    showModal();
    showBackdrop();
  } else {
    hideBackdrop();
    hideModal();
  }
}

function showModal() {
  modal.classList.add('open');
}

function showBackdrop() {
  backdrop.classList.add('open');
}

function showMobileNav() {
  mobileNav.classList.add('open');
}

function hideModal() {
  modal.classList.remove('open');
}

function hideBackdrop() {
  backdrop.classList.remove('open');
}

function hideMobileNav() {
  mobileNav.classList.remove('open');
}

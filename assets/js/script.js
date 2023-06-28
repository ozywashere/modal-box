const btn = document.querySelector('.btn')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('#close-btn')
const cancelBtn = document.querySelector('[data-cancel]')

btn.addEventListener('click', () => {
  modal.style.display = 'block'
})
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'
})
cancelBtn.addEventListener('click', () => {
  modal.style.display = 'none'
})

//General function to close modal
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none'
  }
})

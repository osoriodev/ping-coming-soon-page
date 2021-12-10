const emailInput = document.querySelector('.main__input')
const mainBtn = document.querySelector('.main__cta')
const message = document.querySelector('.main__error-message')

const re = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/

const displayError = () => {
  emailInput.classList.add('main__input--error')
  message.classList.add('main__error-message--active')
  mainBtn.classList.add('main__cta--error')
}

const hideError = () => {
  emailInput.classList.remove('main__input--error')
  message.classList.remove('main__error-message--active')
  mainBtn.classList.remove('main__cta--error')
}

const validateEmail = () => {
  let value = emailInput.value

  if (value === '') {
    message.innerText = "Whoops! It looks like you forgot to add your email"
    displayError()
  } else if (!re.test(value)) {
    message.innerText = "Please provide a valid email address"
    displayError()
  } else {
    hideError()
    emailInput.value = null
  }
}

mainBtn.addEventListener('click', e => {
  e.preventDefault()
  validateEmail()
})


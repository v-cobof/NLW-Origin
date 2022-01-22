// abre e fecha menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

// ao clicar em um item do menu, fechar ele
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

// adicionar sombra ao header quando descer

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
  if (this.window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})
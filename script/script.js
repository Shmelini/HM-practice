let button = document.querySelector('.header-spoiler-button')
let spoilerMenu = document.querySelector('.header-menu-container')
let coreSpoilerTriggers = document.querySelectorAll('.core-spoiler-trigger')
let coreSpoiler = document.querySelector('.core-spoiler')
let sortBtns = document.querySelectorAll('.sort-btn')


// открытие меню с категориями
button.addEventListener('click', () => {
   spoilerMenu.classList.toggle('disabled')

})


// Функционал спойлеров
function spoiler(event) {
   event.preventDefault()
   
   const target = event.target.parentNode.querySelector('.core-spoiler')
   event.target.classList.toggle('open')
   target.classList.toggle('disabled')
}

coreSpoilerTriggers.forEach(function (coreSpoilerTrigger) {
   coreSpoilerTrigger.addEventListener('click', spoiler)
})

// функционал сортировки
function sortColorChange (event) {
   event.preventDefault()
   
   document.querySelectorAll('.sort-btns .selected-sort').forEach(function (removeSelected) {
      removeSelected.classList.remove('selected-sort')
   })
   event.target.classList.toggle('selected-sort')
}

sortBtns.forEach(function (sortBtn) {
   sortBtn.addEventListener('click', sortColorChange)
})
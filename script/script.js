let button = document.querySelector('.header-spoiler-button')
let spoilerMenu = document.querySelector('.header-menu-container')
let coreSpoilerTriggers = document.querySelectorAll('.core-spoiler-trigger')
let coreSpoiler = document.querySelector('.core-spoiler')
let sortBtns = document.querySelectorAll('.sort-btn')
let textChangeBtns = document.querySelectorAll('.description-btn')
let brgBtn = document.querySelector('.burger')
let brgMenu = document.querySelector('.burger-menu')

// функционал смены текста
function textChanging(event) {
   document.querySelectorAll('.description-btn__active').forEach(function (removeSelected) {
      removeSelected.classList.remove('description-btn__active')
   })
   event.target.classList.add('description-btn__active')
   const relationData = event.target.dataset.relation
   let descTexts = document.querySelectorAll('.description-text')
   descTexts.forEach(function (elem) {
      if(elem.dataset.relation === relationData) {
         descTexts.forEach(function (descText) {
            descText.classList.remove('text-active')
         })
         elem.classList.add('text-active')
      }
   })
}

textChangeBtns.forEach(function (textChangeBtn) {
   textChangeBtn.addEventListener('click', textChanging)
})

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

// бургер меню для шапки
brgBtn.addEventListener('click', () => {
   brgMenu.classList.toggle('disabled')

})
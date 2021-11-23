let itemTab = document.querySelectorAll('.info-tabs__item')
let infoTab = document.querySelectorAll('.info-tabs__content')


for (let i = 0; i < itemTab.length; i++) {
   itemTab[i].addEventListener('click', (e) => {
      e.preventDefault()

      itemTab[0].classList.remove('info-tabs__item_active')
      itemTab[1].classList.remove('info-tabs__item_active')
      itemTab[2].classList.remove('info-tabs__item_active')
      e.target.classList.add('info-tabs__item_active')

      for (let i = 0; i < infoTab.length; i++) {
         infoTab[i].classList.remove('info-tabs__content_active')
      }
   })
}





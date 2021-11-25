// !-------------------------табы----------------------------
let itemTab = document.querySelectorAll('.info-tabs__item')
let infoTab = document.querySelectorAll('.info-tabs__content')


for (let i = 0; i < itemTab.length; i++) {
   itemTab[i].addEventListener('click', (e) => {
      e.preventDefault()
      let tabTag = e.target.getAttribute("item-tab")

      for (let j = 0; j < infoTab.length; j++) {
         let infoTag = infoTab[j].getAttribute("info-tab")

         if (tabTag === infoTag) {
            itemTab[j].classList.add("info-tabs__item_active")
            infoTab[j].classList.add("info-tabs__content_active")
         } else {
            itemTab[j].classList.remove("info-tabs__item_active")
            infoTab[j].classList.remove("info-tabs__content_active")
         }
      }
   })
}

// !-------------------------слайдер----------------------------
let btnR = document.querySelector('.buttonSlider-right')
let sliderItem = document.querySelectorAll('.info-slider__item')
let i = 0

console.log(btnR);

btnR.addEventListener('click', () => {
   i++
   if (i >= sliderItem.length) {
      sliderItem[i - 1].classList.remove("info-slider__item_active")
      i = 0
      sliderItem[i].classList.add("info-slider__item_active")
   } else {
      sliderItem[i - 1].classList.remove("info-slider__item_active")
      sliderItem[i].classList.add("info-slider__item_active")
   }
})







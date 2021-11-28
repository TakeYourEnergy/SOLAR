// !-------------------------табы----------------------------
let itemTab = document.querySelectorAll('.info-tabs__item')
let infoTab = document.querySelectorAll('.info-tabs__content')


for (let i = 0; i < itemTab.length; i++) {
   itemTab[i].addEventListener('click', (e) => {
      e.preventDefault()
      let tabTag = e.target.getAttribute("data-itemtab")

      for (let j = 0; j < infoTab.length; j++) {
         let infoTag = infoTab[j].getAttribute("data-infotab")

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
let btnL = document.querySelector('.buttonSlider-left')
let sliderItem = document.querySelectorAll('.info-slider__item')
let i = 0

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


btnL.addEventListener('click', () => {
   i--
   console.log(i);
   if (i < 0) {
      i = sliderItem.length - 1 // i === 2
      sliderItem[i].classList.add("info-slider__item_active")
      sliderItem[0].classList.remove("info-slider__item_active")
   } else {
      sliderItem[i].classList.add("info-slider__item_active")
      sliderItem[i + 1].classList.remove("info-slider__item_active")
   }
})













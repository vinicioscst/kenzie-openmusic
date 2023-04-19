import {products} from './productsData.js'
import {renderCards} from './render.js'
import {handleDarkMode} from './theme.js'



const sliderStyle = () => {
    const slider = document.querySelector('.filter__input input')
    
    slider.addEventListener('input', () => {

        const value = ((slider.value - slider.min) / (slider.max - slider.min) * 100 )
        const progressBarColor = `linear-gradient(90deg, var(--color-brand-1) ${value}%, var(--color-grey-5) ${value}%)`
        slider.style.background = progressBarColor

    })
}


renderCards(products)
handleDarkMode()
sliderStyle()
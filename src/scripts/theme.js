export const handleDarkMode = () => {

    const button = document.querySelector('.dark-mode__btn')
    const buttonImg = document.querySelector('.dark-mode__btn > img')
    const root = document.querySelector('html')


    button.addEventListener('click', () => {

        root.classList.toggle('dark__mode')


        if (root.classList.contains('dark__mode')) {

            buttonImg.src = './src/assets/vectors/sun.svg'
            

        } else {

            buttonImg.src = './src/assets/vectors/moon.svg'

        }
    })
}
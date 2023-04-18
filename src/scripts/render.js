export const renderCards = (array) => {

    const cardsList = document.querySelector('.cards__list')

    cardsList.innerHTML = ''

    array.forEach(album => {

      const cardsCreation = createCards(album)
      cardsList.appendChild(cardsCreation)

    })

}


const createCards = (album) => {

  const card = document.createElement('li')

  const divCardImg = document.createElement('div')
  const albumImg = document.createElement('img')

  const divCardInfo = document.createElement('div')

  const divArtistSec = document.createElement('div')
  const divArtistName = document.createElement('p')
  const divAlbumYear = document.createElement('p')

  const albumName = document.createElement('h3')

  const divBuySec = document.createElement('div')
  const divCardPrice = document.createElement('h4')
  const divBuyBtn = document.createElement('button')


  card.classList.add('card')

  divCardImg.classList.add('card__img')
  albumImg.src = album.img
  albumImg.alt = `Capa do álbum '${album.title}'`

  divCardInfo.classList.add('card__info')

  divArtistSec.classList.add('card__artist-section')
  divArtistName.classList.add('card__artist-name')
  divArtistName.innerText = album.band
  divAlbumYear.classList.add('card__album-year')
  divAlbumYear.innerText = album.year

  albumName.classList.add('card__album-name')
  albumName.innerText = album.title

  divBuySec.classList.add('card__buy-section')
  divCardPrice.classList.add('card__price')
  divCardPrice.innerText = `R$ ${album.price.toFixed(2)}`
  divBuyBtn.classList.add('card__buy-btn')
  divBuyBtn.innerText = 'Comprar'


  card.append(divCardImg, divCardInfo)
  divCardImg.append(albumImg)
  divCardInfo.append(divArtistSec, albumName, divBuySec)
  divArtistSec.append(divArtistName, divAlbumYear)
  divBuySec.append(divCardPrice, divBuyBtn)


  return card

}
const container = document.querySelector('.container')
const yes_btn = document.querySelector('.yes_btn')
const no_btn = document.querySelector('.no_btn')

no_btn.addEventListener('click', () => {
  // Zelimo da kad stisnemo na dugme da ono promeni poziciju
  no_btn.style.position = 'absolute'

  // Sada dodajemo saumicnu poziciju
  // nekad se desi da dugme bezi pa ga podesavamo da ostane u okviru

  const random_left = Math.floor(Math.random() * container.clientWidth)
  const random_top = Math.floor(Math.random() * container.clientHeight)

  if (random_left >= container.clientWidth / 2)
    no_btn.style.left = `${random_left - no_btn.clientWidth}px`

  if (random_top >= container.clientHeight / 2)
    no_btn.style.top = `${random_top - no_btn.clientHeight}px`
})

yes_btn.addEventListener('click', () => {
  container.innerHTML = `<h2>
                            I knew it!!! 
                             
                           
                            </h2>`
})

// About me section Card Flipper
export const toggleFlip = () => {
  const card = document.getElementById("flipCardInner");
  card.classList.toggle("flipped");
}

// Resume Card Flipper 
export const toggleFlipHtml = () => {
  const cardHtml = document.getElementById("flipCardInnerHtml");
  cardHtml.classList.toggle("flipped");
}

export const toggleFlipCss = () => {
  const cardCss = document.getElementById("flipCardInnerCss");
  cardCss.classList.toggle("flipped");
}

export const toggleFlipJs = () => {
  const cardJs = document.getElementById("flipCardInnerJs");
  cardJs.classList.toggle("flipped");
}
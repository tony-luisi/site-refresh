import TweenMax from 'gsap'

export function fadeIn(element){
  TweenMax.from(element, 2, {color:'white'})
}

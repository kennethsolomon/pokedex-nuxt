export default ({ app }, inject) => {
  inject('randomTwoNumbers', (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  })

  inject('firstLetterUpperCase', (string) => {
    return string.charAt(0).toUpperCase() + string.substring(1)
  })

  inject('zeroPad', (num, places) => {
    return String(num).padStart(places, '0')
  })
}

export default ({ app }, inject) => {
  const isSafariOnMacOrIOS = () => {
    const userAgent = navigator.userAgent.toLowerCase()
    const isMac = /macintosh|mac os x/i.test(userAgent)
    const isIOS = /iphone|ipad|ipod/i.test(userAgent)
    const isSafari = /safari/i.test(userAgent) && !/chrome|crios|fxios/i.test(userAgent)
    return (isMac || isIOS) && isSafari
  }

  inject('isSafariOnMacOrIOS', isSafariOnMacOrIOS)
}

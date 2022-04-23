/**
 * Display emoji as favicon
 */
let emoji = '📎️'

function setFavicon(emoji) {
    let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><text dx="-8" dy="48" x="10" y="10">${emoji}</text><style><![CDATA[text{font-size: 64px;}]]></style ></svg>`
    document.querySelector('link[rel="icon"]').setAttribute('href', 'data:image/svg+xml;utf8,' + svg)
}
setFavicon(emoji)
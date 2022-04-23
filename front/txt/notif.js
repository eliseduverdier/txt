/**
 * Shows information
 */

function showNotification(text) {
    let notification = document.querySelector('#notification')
    notification.innerHTML = text
    notification.removeAttribute('hidden')
    setTimeout(function () {
        notification.setAttribute('hidden', 'true')
    }, 2000)
}
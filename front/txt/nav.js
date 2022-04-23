function switchToNextTab() {
    target = document.querySelector('li.active').nextElementSibling
    if (target)
        changeFile(target)
}
function switchToPreviousTab() {
    target = document.querySelector('li.active').previousElementSibling
    if (target)
        changeFile(target)
}
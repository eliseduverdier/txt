/**
 * Manage files by writing/reading localStorage
 *
 */

const key = 'notes'
let activeKey = key

const article = document.querySelector('pre')
const ul = document.querySelector('ul')

article.innerHTML = localStorage[key] ? localStorage[key] : '…'
article.focus()

// init if no file
if (!localStorage) { localStorage[key] = '…' }

/**
 * ========================================== LOAD FILES
 */
Object.keys(localStorage).sort().forEach(item => {
    li = document.createElement('li')
    let filename = item.replace('notes', '')
    li.innerHTML = filename === '' ? '...' : filename
    if (filename === '') li.classList += 'active'
    li.setAttribute('data-key', key + filename)
    ul.appendChild(li)
})

/**
 * ========================================== SAVE FILE
 */
article.addEventListener('keyup', function (e) { localStorage[activeKey] = article.innerHTML });

/**
 * ========================================== ADD NEW FILE
 */
function createFile(filename) {
    filename = '.' + filename;
    if (localStorage.hasOwnProperty(key + filename)) {
        alert("Name already exists!")
        return
    }
    li = document.createElement('li')
    // TODO check duplicates
    // TODO warning if exists
    li.innerHTML = filename
    li.setAttribute('data-key', key + filename)
    initFileChanger(li)
    ul.appendChild(li)

    localStorage[key + filename] = '...'
    changeFile(li)
    e.target.value = ''
}
document.querySelector('input[name = "filename"]').addEventListener('keyup', function (e) {
    if (e.keyCode === 13) { createFile(e.target.value) }
})

document.querySelector('#new').addEventListener('click', function (e) {
    filename = document.querySelector('input[name=filename]').value
    createFile(filename)
})

const changeFile = function (li) {
    // remove old active file
    let active = document.querySelector('li.active')
    if (active) active.removeAttribute('class')
    // set new li as active
    li.classList += 'active' // get new file
    activeKey = li.dataset.key
    if (localStorage.hasOwnProperty(activeKey)) {
        article.innerHTML = localStorage[activeKey]
    } else { // default
        activeKey = key
        article.innerHTML = localStorage[key]
    }
}

/**
 * ========================================== READ AND SELECT FILES
 */
const initFileChanger = function (li) {
    li.addEventListener('click', function (e) {
        changeFile(e.target)
    })
}
document.querySelectorAll('li').forEach(li => initFileChanger(li))

/**
 * ========================================== DELETE FILES / RESET
 */
document.querySelector('#delete').addEventListener('click', function (e) {
    if (activeKey === key) {
        article.innerHTML = '…'
    } else {
        // delete current file if active
        localStorage.removeItem(activeKey)
        elementToRemove = document.querySelector(`li[data-key="${activeKey}"]`)
        if (elementToRemove)
            elementToRemove.remove()
        else
            showNotification('No note selected !')
    }
})

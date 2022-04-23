/**
 * Control keys events
 * For the moment, this is just for preventing brains mix-ups
 * with saving and indenting...
 * Beware of order!
 */
document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        showNotification('Saved !')
    } else if (e.ctrlKey && e.key === 'ArrowUp') {
        switchToPreviousTab()
        e.preventDefault()
    } else if (e.ctrlKey && e.key === 'ArrowDown') {
        switchToNextTab()
        e.preventDefault()
    } else if (e.key === 'Tab') {
        e.preventDefault()
        showNotification('Tab !')
    }
});

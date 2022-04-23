/**
 * Manage key tab to insert 4 spaces and indent blocks of text
 */
article.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
        console.log('tab !', e.target.innerHTML);
        e.preventDefault()
        console.log(getCaretIndex(e.target))

        e.target.innerHTML = e.target.innerHTML.slice(0, getCaretIndex(e.target))
            + '    ' + e.target.innerHTML.slice(getCaretIndex(e.target), e.target.innerHTML.length)
    }
});

function getCaretIndex(contentEditable) { // https://stackoverflow.com/a/64823701
    var index = 0;
    var selection = window.getSelection();
    var textNodes = textNodesUnder(contentEditable);

    for (var i = 0; i < textNodes.length; i++) {
        var node = textNodes[i];
        var isSelectedNode = node === selection.focusNode;

        if (isSelectedNode) {
            index += selection.focusOffset;
            break;
        }
        else {
            index += node.textContent.length;
        }
    }

    return index;
}
function textNodesUnder(node) { // https://stackoverflow.com/a/10730777/3245937
    var all = [];
    for (node = node.firstChild; node; node = node.nextSibling) {
        if (node.nodeType == 3) {
            all.push(node);
        }
        else {
            all = all.concat(textNodesUnder(node));
        }
    }
    return all;
}

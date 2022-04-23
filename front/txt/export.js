/************************
 *   EXPORT             *
*************************/
document.querySelector('#export').addEventListener('click', function (e) {
    const content = JSON.stringify(localStorage)

    var downloadElement = document.createElement('a');
    downloadElement.style.display = 'none';
    downloadElement.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(content));
    downloadElement.setAttribute('download', 'notes_export.json');

    document.body.appendChild(downloadElement);
    downloadElement.click();
    document.body.removeChild(downloadElement);
})


/************************
 *   IMPORT             *
*************************/

const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('input', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file)
    reader.onloadend = function () {
        console.log('Loading data from '+file.name, reader.readyState);
        var data = JSON.parse(reader.result);

        if (data) {
            localStorage.clear()
            Object.keys(data).forEach(function (k) {
                localStorage.setItem(k, data[k]);
            });
        } else {
            showNotification('Data was corrupted :(');
        }
        location.reload();
    };
});
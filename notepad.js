(function() {
var notepad = null;
var notepad_edited = false;

const edited_status = function(edited) {
    notepad_edited = edited;
    if (notepad_edited) {
        document.title = '*Notepad';
    } else {
        document.title = 'Notepad';
    }
};

const save_notepad_contents = function() {
    window.localStorage.setItem('notepad_contents', notepad.innerHTML);
    edited_status(false);
};

window.addEventListener('load', function() {
    notepad = document.getElementById('notepad');

    notepad.innerHTML = window.localStorage.getItem('notepad_contents');

    window.onbeforeunload = function() {
        save_notepad_contents();
    };

    new MutationObserver(function(_, _) {
        edited_status(true);
    }).observe(notepad, {
        subtree: true,
        characterData: true,
        childList: true,
    });
});

window.addEventListener('keydown', function(ev) {
    if (ev.key == 'Tab' && (!ev.altKey && !ev.ctrlKey && !ev.metaKey && !ev.shiftKey)) {
        ev.preventDefault();

        if (notepad.contentEditable == 'false') {
            notepad.contentEditable = 'true';
        } else {
            notepad.contentEditable = 'false';
        }
    }

    if ((ev.ctrlKey && ev.key == 's') && (!ev.altKey && !ev.metaKey && !ev.shiftKey)) {
        ev.preventDefault();

        save_notepad_contents();
    }

    if ((ev.ctrlKey && ev.key == 'd') && (!ev.altKey && !ev.metaKey && !ev.shiftKey)) {
        ev.preventDefault();

        const date = new Date(Date.now()).toISOString().replace(/:/g, '-').slice(0, -5);
        download(notepad.innerText, 'Notepad-' + date + '.txt', 'text/plain');
    }
});

// https://stackoverflow.com/questions/13405129/create-and-save-a-file-with-javascript
// Function to download data to a file
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob)  // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else {  // Others
        var a = document.createElement('a'),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}
})();

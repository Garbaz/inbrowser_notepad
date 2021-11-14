(function() {
var notepad = null;
window.addEventListener('load', function() {
    notepad = document.getElementById('notepad');

    notepad.innerHTML = window.localStorage.getItem('notepad_contents');

    window.onbeforeunload = function() {
        window.localStorage.setItem('notepad_contents', notepad.innerHTML);
    };
});

window.addEventListener('keydown', function(ev) {
    if (!ev.altKey && !ev.ctrlKey && !ev.metaKey && ev.key == 'Tab') { // Tab
        if (notepad.contentEditable == 'false') {
            notepad.contentEditable = 'true';
        } else {
            notepad.contentEditable = 'false';
        }

        ev.preventDefault();
    }
});
})();
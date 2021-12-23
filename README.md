# In-Browser Notepad

([website](https://garbaz.github.io/inbrowser_notepad/))

A simple offline in-browser notepad. Contents are automatically saved on closing the page. 

Require a reasonably moder browser, since it uses `window.localStorage` for saving.

Pressing `TAB` toggles the editability of the text field. 

_Note:_ The contents are saved in the browser and are tied to the URL, so if you open the notepad in a different browser or with a different path, the old contents will no longer be visible, though they aren't gone! Just open the notepad again with the old URL.

# In-Browser Notepad

A simple offline in-browser notepad. Contents are automatically saved on closing the page. 

Require a reasonably moder browser, since it uses `window.localStorage` for saving.

Pressing `TAB` toggles the editability of the text field. 

_Note:_ The contents are save in the browser and are tied to the URI, so if you open the notepad in a different browser or with a different path, the old contents will no longer be visible, though they aren't gone! Just open the notepad again with the old URI.
# In-Browser Notepad

([_website_](https://garbaz.github.io/inbrowser_notepad/))

A simple offline in-browser notepad. Contents are automatically saved on closing the page. 

Require a reasonably modern browser, since it uses `window.localStorage` for saving.

_Note:_ The contents are saved in the browser and are tied to the URL, so if you open the notepad in a different browser or with a different path, the old contents will no longer be visible, though they aren't gone! Just open the notepad again with the old URL.

## Usage

Pressing `Tab` toggles the editability of the text field.

Pressing `Ctrl+S` saves the contents. This is pretty much redundant, since saving occurs automatically upon the tab being closed. This just exists so that I don't keep accidentally opening the save dialogue of the browser out of habit. 

Pressing `Ctrl+D` downloads the current contents as a text file.
add_script("file.js")

// This is a potential feature
var load_ksav = function load_ksav(save) {
  _load_ksav=function(save){
    save = atob(save) // Decrypt base64
    save = JSON.parse(save) // Parse JSON
    Object.keys(save).forEach(function (key) {
      localStorage.setItem(key, JSON.stringify(save[key]))
    }) // Save to localStorage
  }
  if (typeof save==="object") {
    save.files[0].text().then(t=>_load_ksav(t))
    return;
  }
  _load_ksav(save)
}

var save_ksav = function save_ksav(storage=localStorage) {
  save = JSON.stringify(localStorage) // Save JSON -> string
  save = btoa(save) // Convert to base64
  return save // return the save
}

document.addEventListener('keydown', function(ev) {
  // Check if CTRL key is pressed
  var isCtrlPressed = ev.ctrlKey || ev.metaKey; // On Mac, use the metaKey property

  // Check for specific key codes
  if (isCtrlPressed) {
    if (ev.keyCode === 79) {
      // CTRL+O is pressed (keyCode 79 corresponds to 'O')
      ev.preventDefault(); // Prevent default browser behavior
      open_file(load_ksav)
    } else if (ev.keyCode === 83) {
      // CTRL+S is pressed (keyCode 83 corresponds to 'S')
      ev.preventDefault(); // Prevent default browser behavior
      save_file(save_ksav())
    }
  }
});

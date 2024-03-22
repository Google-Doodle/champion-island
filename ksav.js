add_script("file.js")

var _load_ksav=function(save, out=localStorage){
  save = atob(save) // Decrypt base64
  save = JSON.parse(save) // Parse JSON
  Object.keys(save).forEach(function (key) {
    out[key] = save[key]
  })
}

// This is a potential feature
var load_ksav = function load_ksav(save) {

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
var add_ksav_event_listeners = function() {
  document.addEventListener('keydown', function(ev) {
    // Check if CTRL key is pressed
    var isCtrlPressed = ev.ctrlKey || ev.metaKey; // On Mac, use the metaKey property

    // Check for specific key codes
    if (isCtrlPressed) {
      if (ev.keyCode === 79) {
        // CTRL+O is pressed (keyCode 79 corresponds to 'O')
        ev.preventDefault(); // Prevent default browser behavior
        // clear localStorage
        localStorage.clear()
        open_file(load_ksav)
      } else if (ev.keyCode === 83) {
        // CTRL+S is pressed (keyCode 83 corresponds to 'S')
        ev.preventDefault(); // Prevent default browser behavior
        save_file(save_ksav())
      }
    }
  });
}
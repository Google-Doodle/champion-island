// This is a potential feature
var load_ksav = function load_ksav(save) {
  save = atob(save) // Decrypt base64
  save = JSON.parse(save) // Parse JSON
  Object.keys(save).forEach(function (key) {
    localStorage.setItem(key, JSON.stringify(save[key]))
  }) // Save to localStorage
}

var save_ksav = function save_ksav(storage=localStorage) {
  save = JSON.stringify(localStorage) // Save JSON -> string
  save = btoa(save) // Convert to base64
  return save // return the save
}

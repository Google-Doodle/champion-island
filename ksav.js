add_script("file.js")

var _load_ksav=function(save="e30=", out=localStorage){
  console.log(out)
  save = atob(save) // Decrypt base64
  save = JSON.parse(save) // Parse JSON
  Object.keys(save).forEach(function (key) {
    out[key] = save[key]
  })
  // some objects don't sync
  return out;
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
  save = JSON.stringify(storage) // Save JSON -> string
  save = btoa(save) // Convert to base64
  return save // return the save
}

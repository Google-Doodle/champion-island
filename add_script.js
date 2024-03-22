var add_script = function add_script(src="", if_not_already_exists=true) {
  if (!!if_not_already_exists) {
    // if_not_already_exsists should be a css selector
    if (if_not_already_exists===true) {
      if_not_already_exists = `script[src='${src}']`
    }
    if(document.querySelectorAll(if_not_already_exists).length==1) {
      // might as well return matching elements so it looks coherent
      return document.querySelector(if_not_already_exists);
    } else if(document.querySelectorAll(if_not_already_exists).length>1) {
      // might as well return matching elements so it looks coherent, this lists all
      return document.querySelectorAll(if_not_already_exists);
    }
  }
  let script=document.createElement("script");
  script.src=src;
  document.head.append(script);
  // return object in case user wants to modify
  return script;
}

var add_script_iter = function add_script_iter(...scripts) {
  scripts.forEach(script => add_script(...script))
}

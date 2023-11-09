let theme=new URL(window.location).searchParams.get("theme");
if(theme==="dark"){
  document.body.style.backgroundColor="#000000";
} else if(theme==="light"){
  document.body.style.backgroundColor="#FFFFFF";
} else if(theme==="auto"){
  let dark=window.matchMedia('(prefers-color-scheme: dark)');
  window.dark=dark
  if(dark.matches===true){
    document.body.style.backgroundColor="#000000";
  } else if(dark.matches===false){
    document.body.style.backgroundColor="#FFFFFF";
  }
  dark.addEventListener("change",function(dark){if(dark===true){document.body.style.backgroundColor="#000000";}else if(dark===false){document.body.style.backgroundColor="#FFFFFF";}})
} else {
  document.body.style.backgroundColor=theme
}

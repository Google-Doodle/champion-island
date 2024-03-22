var save_file = async (blob = (new Blob([''], {type: "text/plain"})), suggestedName = "file") => {
  // If file system API is available and not in iframe.
  const FSApiAvalible = !!window.showSaveFilePicker && window.self === window.top
  // If the file system API is supported
  if (FSApiAvalible) {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName,
      });
      // write the blob
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
      return;
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error(err.name, err.message);
        return;
      }
      return;
    }
  }
  // fallback
  const blobURL = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = blobURL;
  anchor.download = suggestedName;
  anchor.style.display = "none";
  anchor.click();
  // Revoke blob to prevent memory leak
  setTimeout(() => {
    URL.revokeObjectURL(blobURL);
    anchor.remove();
  }, 1000);
}

var open_file = function loadFile(onchange) {
  if (typeof onchange !== "function") {onchange=function(){}}
  const input = document.createElement('input')
  input.type = 'file'
  input.onchange = function(){onchange(input)}
  input.click()
}

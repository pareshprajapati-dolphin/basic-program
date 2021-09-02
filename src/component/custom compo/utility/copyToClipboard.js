export default function CopyToClipboard(id) {
  var r = document.createRange();
  r.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  try {
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("clipboard is copy");
  } catch (err) {
    console.log("Unable to copy!");
  }
}

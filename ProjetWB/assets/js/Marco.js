/*
function hoverIconOpen(elem){
  elem.style.transform ="translate(5px, 0)";
}
function hoverIconClose(elem){
  elem.style.transform ="translate(0, 0)";
}
*/
/*
ftw.onmouseover = function() {hoverIconOpen(ftw); };
ffb.onmouseover = function() {hoverIconOpen(ffb); };
ftw.onmouseout = function() {hoverIconClose(ftw); };
ffb.onmouseout = function() {hoverIconClose(ffb); };
*/


function onMouseTransform(elem, effect1, effect2){
  elem.onmouseover = function() {elem.style.transform = effect1;};
  elem.onmouseout = function() {elem.style.transform = effect2;};
}


var ftw = document.getElementById("fixedTwitter");
var ffb = document.getElementById("fixedFacebook");



onMouseTransform(ftw, "translate(5px, 0)", "translate(0, 0)");
onMouseTransform(ffb, "translate(5px, 0)", "translate(0, 0)");

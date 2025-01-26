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

/*
function onMouseTransform(elem, effect1, effect2){
  elem.onmouseover = function() {elem.style.transform = effect1;};
  elem.onmouseout = function() {elem.style.transform = effect2;};
}


var fl1 = document.getElementById("fixedTwitter");
var fl2 = document.getElementById("fixedFacebook");

var ff1 = document.getElementById("TwitterFooter");
var ff2 = document.getElementById("FacebookFooter");

onMouseTransform(fl1, "translate(0.3rem, 0)", "translate(0, 0)");
onMouseTransform(fl2, "translate(0.3rem, 0)", "translate(0, 0)");

onMouseTransform(ff1, "translate(0, -0.3rem)", "translate(0, 0)");
onMouseTransform(ff2, "translate(0, -0.3rem)", "translate(0, 0)");
*/
function onMouseTransform(elem, effect1, effect2){
  elem.onmouseover = function() {elem.style.transform = effect1;};
  elem.onmouseout = function() {elem.style.transform = effect2;};
}
function changePos(elem, droite, bas){
  elem.style.transform = `translate(${droite}, ${bas})`;
}
function changeBGColor(elem, color){
  elem.style.backgroundColor = color;
}

function toggleBloc(elem, lock){
  if(lock.value){
    //elem.style.display = "none";
    elem.style.maxHeight = elem.parentElement.offsetHeight + "px";
  }
  else{
    //elem.style.display = "block";
    elem.style.maxHeight = elem.scrollHeight + "px";
  }
  lock.value = !lock.value;
}

function dayOfTheWeekString(hcElem){
  var today = new Date();
  var day = today.getDay();
  hcElem.value = "hc"+day;
  var s = "blank";
  if(day == 1){
    s = "Fermé";
  }
  else if(day == 0 || day == 6){
    s = "Ouvert - 10:30 à 23:00";
  }
  else if (day < 5){
    s = "Ouvert - 9:00 à 22:00";
  }
  else{
    s = "Ouvert - 9:00 à 23:00";
  }
  return s;
}

function animate(elem){
  elem.classList.add("hcBackgroundColor");
}

var fl1 = document.getElementById("fixedTwitter");
var fl2 = document.getElementById("fixedFacebook");

var ff1 = document.getElementById("TwitterFooter");
var ff2 = document.getElementById("FacebookFooter");
/*
onMouseTransform(fl1, "translate(0.3rem, 0)", "translate(0, 0)");
onMouseTransform(fl2, "translate(0.3rem, 0)", "translate(0, 0)");

onMouseTransform(ff1, "translate(0, -0.3rem)", "translate(0, 0)");
onMouseTransform(ff2, "translate(0, -0.3rem)", "translate(0, 0)");
*/
fl1.onmouseover = function() {changePos(fl1,"0.3rem","0"); changeBGColor(fl1, "#FF0000");};
fl2.onmouseover = function() {changePos(fl2,"0.3rem","0"); changeBGColor(fl2, "#FF0000");};

fl1.onmouseout = function() {changePos(fl1,"0","0"); changeBGColor(fl1, "");};
fl2.onmouseout = function() {changePos(fl2,"0","0"); changeBGColor(fl2, "");};

ff1.onmouseover = function() {changePos(ff1,"0","-0.3rem"); changeBGColor(ff1, "#FF0000");};
ff2.onmouseover = function() {changePos(ff2,"0","-0.3rem"); changeBGColor(ff2, "#FF0000");};

ff1.onmouseout = function() {changePos(ff1,"0","0"); changeBGColor(ff1, "");};
ff2.onmouseout = function() {changePos(ff2,"0","0"); changeBGColor(ff2, "");};

var blocHoraires = document.getElementById("blocHoraires");
var blocHorairesLOCK = {value: false};
var horairesClick = document.getElementById("horairesClick");
blocHoraires.onclick = function() {toggleBloc(horairesClick, blocHorairesLOCK);};

var hcElem = {value : ""};
document.getElementById("blocHoraires").textContent = dayOfTheWeekString(hcElem);
console.log(hcElem.value);
animate(document.getElementById(hcElem.value));

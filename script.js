function openNav() {
  document.getElementById("overlay").style.height = "100%";
  document.getElementById("hamb").setAttribute('onclick', 'closeNav()');
  document.getElementById("hamb").innerHTML = "&times;";
}


function closeNav() {
  document.getElementById("overlay").style.height = "0%";
  document.getElementById("hamb").setAttribute('onclick', 'openNav()');
  document.getElementById("hamb").innerHTML = "&#9776;";
}


function openProj() {
  document.getElementById("overlaytwo").style.height = "100%";
  document.getElementById("hambtwo").setAttribute('onclick', 'closeProj()');
  document.getElementById("hambtwo").innerHTML = "&times;";
}


function closeProj() {
  document.getElementById("overlaytwo").style.height = "0%";
  document.getElementById("hambtwo").setAttribute('onclick', 'openProj()');
  document.getElementById("hambtwo").innerHTML = "&#9776;";
}

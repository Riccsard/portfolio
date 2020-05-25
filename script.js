function openNav() {
  document.getElementById("overlay").style.height = "100%";
  document.getElementById("hamb").setAttribute('onclick', 'closeNav()');
  document.getElementById("hamb").innerHTML = "&times;";
}


function closeNav() {
  document.getElementById("overlay").style.height = "0%";
  document.getElementById("hamb").setAttribute('onclick', 'openNav()');
  document.getElementById("hamb").innerHTML = "&#9776;";
  document.getElementById("social").style.right = "-100%";
  window.location.href = 'index.html';
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

function social(ido) {
  if (ido==0) {
    document.getElementById("background").style.backgroundImage= "url('/bgold.jpg')";
    document.getElementById("circlehead").style.backgroundImage= "url('/circlepic.png')";
    document.getElementById("chromie").setAttribute('onclick', 'social(1)');
  } if (ido==1) {
    document.getElementById("background").style.backgroundImage= "url('/bg.jpg')";
    document.getElementById("circlehead").style.backgroundImage= "url('/portrait.png')";
    document.getElementById("chromie").setAttribute('onclick', 'social(0)');
  }

}

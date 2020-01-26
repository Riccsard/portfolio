var grades = [];
var work = 0;
var lang = 'eng';
var langc = 1;

	document.getElementById("gradesnow").style.visibility = 'hidden';
	document.getElementById("average").style.visibility = 'hidden';
	document.getElementById("snowflakes").style.visibility = 'hidden';

function checkLang() {
	if (lang == 'hun') {
		document.getElementById("a").innerHTML = "5";
		document.getElementById("b").innerHTML = "4";
		document.getElementById("c").innerHTML = "3";
		document.getElementById("d").innerHTML = "2";
		document.getElementById("f").innerHTML = "1";

		document.getElementById("done").innerHTML = "Kész";
		document.getElementById("reset").innerHTML = "Újrakezdés";
		document.getElementById("backspace").innerHTML = "Utolsó törlése";
		document.getElementById("gradesnow").innerHTML = "Jelenlegi jegyeid: ";
		document.getElementById("average").innerHTML = "Jelenlegi átlagod: ";
		document.getElementById("lang").style.backgroundImage= "url('textures/hu.svg')";
		document.getElementById("instruction").innerHTML = "Írd be a jegyeid a gombok segítségével!";
	}
	if (lang == 'eng') {
		document.getElementById("a").innerHTML = "A";
		document.getElementById("b").innerHTML = "B";
		document.getElementById("c").innerHTML = "C";
		document.getElementById("d").innerHTML = "D";
		document.getElementById("f").innerHTML = "F";

		document.getElementById("done").innerHTML = "Done";
		document.getElementById("reset").innerHTML = "Reset";
		document.getElementById("backspace").innerHTML = "Delete last digit";
		document.getElementById("gradesnow").innerHTML = "Your current grades: ";
		document.getElementById("average").innerHTML = "Your current average: ";
		document.getElementById("lang").style.backgroundImage= "url('textures/us.svg')";
		document.getElementById("instruction").innerHTML = "Put your grades in with the help of the buttons!";
	}
}


function language()	{
	if ((langc%2) == 0) {
		lang = 'eng';
	}
	else {
		lang = 'hun';
	}
	langc++;
	checkLang();
}

function errorMsg() {
	console.log("error 81");
	}


function reset() {
	grades = [];
	work = 0;
		document.getElementById("a").setAttribute('onclick', 'appGrades(5)');
		document.getElementById("b").setAttribute('onclick', 'appGrades(4)');
		document.getElementById("c").setAttribute('onclick', 'appGrades(3)');
		document.getElementById("d").setAttribute('onclick', 'appGrades(2)');
		document.getElementById("f").setAttribute('onclick', 'appGrades(1)');
		document.getElementById("done").setAttribute('onclick', 'done()');
		document.getElementById("backspace").disabled = true;
		if (lang == 'hun') {
			document.getElementById("instruction").innerHTML = "Írd be a jegyeid a gombok segítségével!";
		}
		if (lang == 'eng') {
			document.getElementById("instruction").innerHTML = "Put your grades in with the help of the buttons!";
		}

		document.getElementById("gradesnow").style.visibility = 'hidden';
		document.getElementById("average").style.visibility = 'hidden';
}


	function backspace() {
			grades.pop();

			if (lang == 'eng') {
					document.getElementById("gradesnow").innerHTML = ("Your current grades: " + (grades));
			}

			if (lang == 'hun') {
					document.getElementById("gradesnow").innerHTML = ("Jelenlegi jegyeid: " + (grades));
			}

			if (lang == 'eng') {
					document.getElementById("average").innerHTML = ("Your current average: " + mean(grades));
			}

			if (lang == 'hun') {
					document.getElementById("average").innerHTML = ("Jelenlegi átlagod: " + mean(grades));
			}

			if (len(grades) == 0) {
					document.getElementById("backspace").disabled = true;
					document.getElementById("average").style.visibility = 'hidden';
					document.getElementById("gradesnow").style.visibility = 'hidden';
			}
	}


	function sum(lst) {
			return lst.reduce(function(a, b) { return a + b; }, 0);
	}


	function len(lst) {
			return lst.length;
	}


	function mean(lst) {
			return (sum(lst) / len(lst));
	}


	function appGrades(grade) {
			grades.push(grade);

			if (len(grades) > 0) {
					document.getElementById("backspace").disabled = false;
					document.getElementById("average").style.visibility = 'visible';

					document.getElementById("gradesnow").style.visibility = 'visible';

					if (lang == 'eng') {
							document.getElementById("gradesnow").innerHTML = ("Your current grades: " + (grades));
					}

					if (lang == 'hun') {
							document.getElementById("gradesnow").innerHTML = ("Jelenlegi jegyeid: " + (grades));
					}

					document.getElementById("average").style.visibility = 'visible';

					if (lang == 'eng') {
							document.getElementById("average").innerHTML = ("Your current average: " + mean(grades));
					}

					if (lang == 'hun') {
							document.getElementById("average").innerHTML = ("Jelenlegi átlagod: " + mean(grades));
					}
			}
	}


	function target(tar) {
			var grd = Math.round(mean(grades));
			document.getElementById("backspace").disabled = true;

			if (tar > grd) {
					while(tar > grd) {
							grd = Math.round(mean(grades));

							grades.push(5);
							work++;
					}

					if (lang == 'eng') {
							document.getElementById("instruction").innerHTML = ("To reach a semester average of " + (tar) + ", you'll need " + (work) + " A's.");
					}

					if (lang == 'hun') {
							document.getElementById("instruction").innerHTML = ("A " + (tar) + "-s átlag eléréséhez " + (work) + " db 5-ösre van szükség.");
					}
			}

			else {

				if (lang == 'eng') {
					document.getElementById("instruction").innerHTML = ("The targeted grade is smaller, than the current. Please try again!");
				}

				if (lang == 'hun') {
					document.getElementById("instruction").innerHTML = ("A kiszemelt átlag kisebb mint a jelenlegi. Kezd újra!");
				}
			}

			}


	function done() {
		document.getElementById("a").setAttribute('onclick', 'target(5)');
		document.getElementById("b").setAttribute('onclick', 'target(4)');
		document.getElementById("c").setAttribute('onclick', 'target(3)');
		document.getElementById("d").setAttribute('onclick', 'target(2)');
		document.getElementById("f").setAttribute('onclick', 'target(1)');
		document.getElementById("done").setAttribute('onclick', 'errorMsg');

		if (lang == 'eng') {
			document.getElementById("instruction").innerHTML = "Select your targeted grade with the help of the Buttons!";
		}

		if (lang == 'hun') {
			document.getElementById("instruction").innerHTML = "A gombok segítségével add meg a tervezett átlagot!";
		}

	}


	function changeCSS(cssFile, cssLinkIndex) {

		if (cssFile=="textures/winter.css") {
			document.getElementById("snowflakes").style.visibility = 'visible';
		}

		else {
			document.getElementById("snowflakes").style.visibility = 'hidden';
		}

		if (cssFile=="textures/fall.css") {
			document.getElementById("stars").style.visibility = 'visible';
		}

		else {
			document.getElementById("stars").style.visibility = 'hidden';
		}

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}

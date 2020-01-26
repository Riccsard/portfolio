var mode = 1;

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
    var newlink = document.createElement("link");

    if ((mode%2) == 1) {
      var n = 'nightmode.css';
    }

    else {
      var n = 'portfolio.css';
    }

    mode++;

    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", n);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}

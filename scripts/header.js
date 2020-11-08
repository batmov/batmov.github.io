var JS_MENU_STATUS = false
var HEADER = document.getElementById("header")
var JS_MENU = document.getElementById("js-menu")

var JS_MENU_CONTENT = `<div id="js-menu">
<div class="js-menu-left">
<a href="https://batmov.github.io/index.html" class="nav"><p>Start</p></a>
<a href="https://batmov.github.io/tools/index.html" class="nav"><p>Projects</p></a>
<a href="https://batmov.github.io/contact.html" class="nav"><p>Contact</p></a>
<a href="https://batmov.github.io/about.html" class="nav"><p>About me</p></a>
</div>
<div class="js-menu-rigt"></div>
</div>`

var HEADER_CONTENT = `<a class="header-img-link" href="https://batmov.github.io/index.html"><img src="https://batmov.github.io/logo.svg"></a>
<nav id="nav">
    <a href="https://batmov.github.io/index.html" class="nav"><p>Start</p></a>
    <div class="dropdown">
            <a href="https://batmov.github.io/tools/index.html" class="nav" id="nav_ir1"><p>Projects</p></a>
            <div class="dropdown-content">
            <a href="https://batmov.github.io/tools/flashlight.html" class="nav"><p>FlashLight SWF Player</p></a>
            <a href="https://batmov.github.io/tools/htmlive.html" class="nav"><p>HTMLive</p></a>
            <a href="https://batmov.github.io/tools/jstools/divideby.html" class="nav"><p>JSTools</p></a>
            <a href="https://batmov.github.io/tools/nativebuttons.html" class="nav"><p>Native buttons</p></a>
            <a href="https://batmov.github.io/tools/quickvoice.html" class="nav"><p>QuickVoice</p></a>
            <a href="https://batmov.github.io/tools/wand.html" class="nav"><p>Wand for MC: Edu</p></a>
        </div>
    </div>
    <a href="https://batmov.github.io/contact.html" class="nav"><p>Contact</p></a>
    <a href="https://batmov.github.io/about.html" class="nav"><p>About me</p></a>
</nav>
<div id="jsmenutoggle">
<a onclick="_$jsmenutoggle()" href="#" class="nav"><img src="https://batmov.github.io/menu.png"></a>
</div>`


if (getCookie("darktheme") == "true")
{
    HEADER_CONTENT += '<link rel="stylesheet" type="text/css" href="$stylesrc_dark">'.replace("$stylesrc_dark", document.getElementsByTagName('link')[0].href.replace("style.css", "style_dark.css"))
}


HEADER.innerHTML = HEADER_CONTENT + JS_MENU_CONTENT

function _$(url)
{
    window.location.href = url
}

function _$jsmenutoggle()
{
    if (JS_MENU_STATUS)
    {
        JS_MENU_STATUS = false
        document.getElementById("js-menu").style.height = "0px"
    }
    else
    {
        JS_MENU_STATUS = true
        document.getElementById("js-menu").style.height = "250px"
    }
}

function resize(){
    if (window.innerWidth < 590)
    {
        document.getElementById("nav").style.display = "none"
        document.getElementById("jsmenutoggle").style.display = "block"
    }
    else
    {
        document.getElementById("nav").style.display = "block"
        document.getElementById("jsmenutoggle").style.display = "none"
    }
}

window.onresize = function(){
    if (window.innerWidth < 590)
    {
        document.getElementById("nav").style.display = "none"
        document.getElementById("jsmenutoggle").style.display = "block"
    }
    else
    {
        document.getElementById("nav").style.display = "block"
        document.getElementById("jsmenutoggle").style.display = "none"
    }}

resize()

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function swapStyleSheet(sheet){
	document.getElementsByTagName('link')[0].setAttribute("href", document.getElementsByTagName('link')[0].href.replace("style.css", sheet));
}

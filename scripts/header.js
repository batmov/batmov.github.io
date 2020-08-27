var JS_MENU_STATUS = false
var HEADER = document.getElementById("header")
var JS_MENU = document.getElementById("js-menu")

var JS_MENU_CONTENT = `<div id="js-menu">
<div class="js-menu-left">
<a href="http://127.0.0.1:5500/index.html" class="nav"><p>Start</p></a>
<a href="http://127.0.0.1:5500/index.html" class="nav"><p>Apps</p></a>
<a href="http://127.0.0.1:5500/index.html" class="nav"><p>Help</p></a>
<a href="http://127.0.0.1:5500/index.html" class="nav"><p>Contact</p></a>
</div>
<div class="js-menu-rigt"></div>
</div>`

var HEADER_CONTENT = `<a class="header-img-link" href="http://127.0.0.1:5500/index.html"><img src="http://127.0.0.1:5500/logo.svg"></a>
<nav>
    <a href="http://127.0.0.1:5500/index.html" class="nav"><p>Start</p></a>
    <div class="dropdown">
        <a href="http://127.0.0.1:5500/apps/index.html" class="nav" id="nav_ir1"><p>Apps</p></a>
        <div class="dropdown-content">
            <a href="http://127.0.0.1:5500/apps/quickvoice.html" class="nav"><p>QuickVoice</p></a>
            <a href="http://127.0.0.1:5500/apps/flashlight.html" class="nav"><p>FlashLight SWF Player</p></a>
        </div>
    </div>
    <a href="http://127.0.0.1:5500/gethelp/index.html" class="nav"><p>Help</p></a>
    <a href="http://127.0.0.1:5500/about.html" class="nav"><p>Contact</p></a>
    <a href="http://127.0.0.1:5500/about.html" class="nav"><p>About me</p></a>
</nav>`


HEADER.innerHTML = HEADER_CONTENT

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
    } else {
        JS_MENU_STATUS = true
        document.getElementById("js-menu").style.height = "250px"
    }
}
var JS_MENU_STATUS = false
var HEADER = document.getElementById("header")
var JS_MENU = document.getElementById("js-menu")

var JS_MENU_CONTENT = `<div id="js-menu">
<div class="js-menu-left">
<a href="https://batmov.github.io/index.html" class="nav"><p>Start</p></a>
<a href="https://batmov.github.io/index.html" class="nav"><p>Apps</p></a>
<a href="https://batmov.github.io/index.html" class="nav"><p>Help</p></a>
<a href="https://batmov.github.io/index.html" class="nav"><p>Contact</p></a>
</div>
<div class="js-menu-rigt"></div>
</div>`

var HEADER_CONTENT = `<a class="header-img-link" href="https://batmov.github.io/index.html"><img src="https://batmov.github.io/logo.svg"></a>
<nav>
    <a href="https://batmov.github.io/index.html" class="nav"><p>Start</p></a>
    <div class="dropdown">
        <a href="https://batmov.github.io/tools/index.html" class="nav" id="nav_ir1"><p>Projects</p></a>
        <div class="dropdown-content">
            <a href="https://batmov.github.io/tools/quickvoice.html" class="nav"><p>QuickVoice</p></a>
            <a href="https://batmov.github.io/tools/flashlight.html" class="nav"><p>FlashLight SWF Player</p></a>
            <a href="https://batmov.github.io/tools/wand.html" class="nav"><p>Wand for MC: Edu</p></a>
            <a href="https://batmov.github.io/tools/divideby.html" class="nav"><p>Check if number is dividable</p></a>
            <a href="https://batmov.github.io/tools/nativebuttons.html" class="nav"><p>Native buttons</p></a>
        </div>
    </div>
    <a href="https://batmov.github.io/contact.html" class="nav"><p>Contact</p></a>
    <a href="https://batmov.github.io/about.html" class="nav"><p>About me</p></a>
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
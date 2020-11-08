var container = document.getElementById("container")

function resize(){
    var width = window.innerWidth - 274
    container.style.width = width + "px"
    var height = window.innerWidth - 49
    container.style.height = height + "px"
}

window.onresize = function(){
    resize()
}

resize()

function navig(location){
    window.location.href = location
}
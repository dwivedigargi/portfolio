function showmenu() {
	element = document.getElementsByClassName("container")
	e = element[0].classList
	e.toggle("showmen")
}

function showtable() {
	element1 = document.getElementsByClassName("project-tab")[0]
	ele = element1.classList
	ele.toggle("showtab")
}

setInterval(func, 100)
function func()
{var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();}
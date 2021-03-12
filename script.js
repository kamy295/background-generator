var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector("#random");




function createRandom() {
    var code = Math.floor(Math.random()*16777216).toString(16);
    if(code.length<6){
        code = Math.floor(Math.random()*16777216).toString(16);
    }
    var hex = "#"+code;
    return hex;
}

// Create Random Gradient
function setRandom() {
    var random1 = createRandom();
    var random2 = createRandom();
    body.style.background = "linear-gradient(to right, "+ random1 +", " + random2 + ")";
    // css.textContent = body.style.background;
    css.textContent = random1 + ", " + random2;
    color1.setAttribute("value", random1);
    color2.setAttribute("value", random2);
}

function setGradient(){
	body.style.background = 
		"linear-gradient(to right, " + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";"; 
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", setRandom);


function openNav(){

	document.getElementById("menuList").style.width = "100%";

}


function closeNav(){

	document.getElementById("menuList").style.width = "0%";

}


function themeToggler(){
	document.body.classList.toggle("dark-mode");

	if(document.body.classList.contains("dark-mode")){

		document.getElementById("gpad").src = "darkPad.png"

	}


	else{

		document.getElementById("gpad").src = "whitePad.png"

	}
}


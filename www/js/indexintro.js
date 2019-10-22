$(document).ready(function(){

	

	// function hide(){
	// 	$(".ogimginicio").fadeOut("slow");

	// 	show();
	// }

	// function show(){
	// 	setTimeout($("#ogwhiteform").fadeIn("slow"), 4000);
	// }
	// setTimeout(hide, 3000);

	let firstT;
	let secondT;
	function hide(){
		$(".ogimginicio3").fadeOut("slow");
	}
	function show(){
		$("#ogwhiteform").fadeIn("slow");
	}

	firstT = setTimeout(hide,1000);
	secondT = setTimeout(show,1800);


	
});
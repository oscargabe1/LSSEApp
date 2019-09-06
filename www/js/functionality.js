let Units;


function Unit1(){
	Units = 1;
}
function Unit2(){
	Units = 2;
}
function Unit3(){
	Units = 3;
}
function Unit4(){
	Units = 4;
}
function Unit5(){
	Units = 5;
}
function Unit6(){
	Units = 6;
}
function Unit7(){
	Units = 7;
}
function Unit8(){
	Units = 8;
}
function Unit9(){
	Units = 9;
}
function Unit10(){
	Units = 10;
}

function Unit11(){
	Units = 11;
}
function Unit12(){
	Units = 12;
}
function Unit13(){
	Units = 13;
}
function Unit14(){
	Units = 14;
}
function Unit15(){
	Units = 15;
}
function Unit16(){
	Units = 16;
}
function Unit17(){
	Units = 17;
}
function Unit18(){
	Units = 18;
}
function Unit19(){
	Units = 19;
}
function Unit20(){
	Units = 20;
}

var isPlaying = false;
function playAudio(audionum){
	var snd;
	if (Units==1) {
		snd = new Audio("audios/unit1/audio"+audionum+".mp3");
	}
	else if (Units==2) {
		snd = new Audio("audios/unit2/audio"+audionum+".mp3");
	}
	else if (Units==3) {
		snd = new Audio("audios/unit3/audio"+audionum+".mp3");
	}
	else if (Units==4) {
		snd = new Audio("audios/unit4/audio"+audionum+".mp3");
	}
	else if (Units==5) {
		snd = new Audio("audios/unit5/audio"+audionum+".mp3");
	}
	else if (Units==6) {
		snd = new Audio("audios/unit6/audio"+audionum+".mp3");
	}
	else if (Units==7) {
		snd = new Audio("audios/unit7/audio"+audionum+".mp3");
	}
	else if (Units==8) {
		snd = new Audio("audios/unit8/audio"+audionum+".mp3");
	}
	else if (Units==9) {
		snd = new Audio("audios/unit9/audio"+audionum+".mp3");
	}
	else if (Units==10) {
		snd = new Audio("audios/unit10/audio"+audionum+".mp3");
	}
	else if (Units==11 || Units==13 || Units==15 || Units==17 || Units==19) {
		snd = new Audio("audios/passages/audio"+audionum+".mp3");
	}
	else if (Units==12) {
		snd = new Audio("audios/unit12/audio"+audionum+".mp3");
	}
	else if (Units==14) {
		snd = new Audio("audios/unit14/audio"+audionum+".mp3");
	}
	else if (Units==16) {
		snd = new Audio("audios/unit16/audio"+audionum+".mp3");
	}
	else if (Units==18) {
		snd = new Audio("audios/unit18/audio"+audionum+".mp3");
	}
	else if (Units==20) {
		snd = new Audio("audios/unit20/audio"+audionum+".mp3");
	}

	
	

	if (isPlaying == false) {
		isPlaying = true;
		snd.play();
		
	
	}
	
	snd.onended = function() {parar()};

	function parar(){
		isPlaying = false;
		console.log("lmao");
}

}
var HttpRequest=function (type,url,jsonParams,fun) {
	try{		
		let request= new XMLHttpRequest();
		request.open(type,url+"?params="+JSON.stringify(jsonParams),true)
		request.setRequestHeader("Content-Type", "application/json")
		request.onreadystatechange=function () {
			if(request.readyState==1){				
				console.log("Conexion establecida...")
			}else if (request.readyState == 4 && request.status == 200) {				
				fun(request.responseText)
			}else if(request.status==403){//Forbidden				
				swal('','Conexion prohibida '+request.responseText,'error')
			}else if(request.status==404){//not found				
				swal('','Url no encontrada '+url+' Server: '+request.responseText,'error')
			}
		}
		request.send()
	}catch (ex){
		swal('',ex.message,'error')
	}
}


// var vocabularyOrExpressions = true;
// function getExpressions(){
// 	let cambiarContenido = document.querySelector(".ogvocabulario");
// 	let cambiarContenido2 = document.querySelector(".ogexpressions");

// 			cambiarContenido.style.display ="none";
// 			cambiarContenido2.style.display ="inline";

		
// }

// function getVocabulary(){
// 	let cambiarContenido2 = document.querySelector(".ogvocabulario");
// 	let cambiarContenido = document.querySelector(".ogexpressions");

// 			cambiarContenido.style.display ="none";
// 			cambiarContenido2.style.display ="inline";
		
// }



// function exp(){
// 	console.log("expresion");
// }

// function voc(){
// 	console.log("vocabulario");
// }


// //randoms
// var numberOfWords;
// var myarray = [];
// var answerArray = [];
// var exerciseDone = false;
// var rnd1;
// var rnd2;
// var rnd3;
// var rnd4;
// var rnd5;
// var rnd6;
// var rnd7;
// var rnd8;
// var rnd9;
// var rnd10;



// function generarRnds(){
// 	for (i = 0; i  < 100; i++) {
// 		rnd = Math.floor(Math.random() * numberOfWords);
// 		//console.log(rnd);
// 			if (rnd != myarray[0] && rnd != myarray[1] && rnd != myarray[2] && rnd != myarray[3] && rnd != myarray[4] && rnd != myarray[5] && rnd != myarray[6] && rnd != myarray[7] && rnd != myarray[8] && rnd != myarray[9] && rnd != myarray[10] && myarray.length < numberOfWords) {
// 				myarray.push(rnd);
// 			}
// 	}
	
// }



// function asignarPalabras(){
// 	primerOrden = [oracionArray[myarray[0]],oracionArray[myarray[1]],oracionArray[myarray[2]],oracionArray[myarray[3]],oracionArray[myarray[4]],oracionArray[myarray[5]],oracionArray[myarray[6]]];
// 	console.log(primerOrden);
// 	myarray = [];
// }

// function ordenarPalabras(){
// 	let cambiarContenido = document.querySelector(".ogcontenedor");
// 	let ponerInstrucciones = document.querySelector(".oginstructions");

// 	ponerInstrucciones.innerHTML = '<h4>Rearrange the words in each exercise to create correct sentences.</h4>';

// 	if (numberOfWords == 3) {
// 		cambiarContenido.innerHTML = '<hr>'+
// 									 '<button id="ogbuttonmargin" class="ui button">'+primerOrden[0]+'</button>'+
// 						         	 '<button id="ogbuttonmargin" class="ui button">'+primerOrden[1]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[2]+'</button>';
// 	}
// 	if (numberOfWords == 4) {
// 		cambiarContenido.innerHTML = '<hr>'+
// 									 '<button id="ogbuttonmargin" class="ui button">'+primerOrden[0]+'</button>'+
// 						         	 '<button id="ogbuttonmargin" class="ui button">'+primerOrden[1]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[2]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[3]+'</button>';
// 	}
// 	if (numberOfWords == 5) {
// 		cambiarContenido.innerHTML = '<hr>'+
// 									 '<button onclick="pressButton0();" id="ogbutton0" class="ui button">'+primerOrden[0]+'</button>'+
// 						         	 '<button onclick="pressButton1();" id="ogbutton1" class="ui button">'+primerOrden[1]+'</button>'+
// 						             '<button onclick="pressButton2();" id="ogbutton2" class="ui button">'+primerOrden[2]+'</button>'+
// 						             '<button onclick="pressButton3();" id="ogbutton3" class="ui button">'+primerOrden[3]+'</button>'+
// 						             '<button onclick="pressButton4();" id="ogbutton4" class="ui button">'+primerOrden[4]+'</button>'+
// 						             '<br><br>'+
// 						             		'<div class="ogbuttoncontainer2">'+
// 												'<div class="ui buttons">'+
// 												  '<button onclick="reset();" class="ui left attached button">Reset</button>'+
// 												  '<button onclick="checkAnswer();" id="ogcheckbutton"class="ui right attached blue button">Check</button>'+
// 												'</div>'+
// 											'</div>'+

// 											'<br><div class="ogcentered"> <div class="ognextex">'+
												
// 											'</div> </div>';
// 	}
// 	if (numberOfWords == 6) {
// 		cambiarContenido.innerHTML = '<hr>'+
// 									 '<button onclick="pressButton0();" id="ogbutton0" class="ui button">'+primerOrden[0]+'</button>'+
// 						         	 '<button onclick="pressButton1();" id="ogbutton1" class="ui button">'+primerOrden[1]+'</button>'+
// 						             '<button onclick="pressButton2();" id="ogbutton2" class="ui button">'+primerOrden[2]+'</button>'+
// 						             '<button onclick="pressButton3();" id="ogbutton3" class="ui button">'+primerOrden[3]+'</button>'+
// 						             '<button onclick="pressButton4();" id="ogbutton4" class="ui button">'+primerOrden[4]+'</button>'+
// 						             '<button onclick="pressButton5();" id="ogbutton5" class="ui button">'+primerOrden[5]+'</button>'+
// 						             '<br><br>'+
// 						             		'<div class="ogbuttoncontainer2">'+
// 												'<div class="ui buttons">'+
// 												  '<button onclick="reset();" class="ui left attached button">Reset</button>'+
// 												  '<button onclick="checkAnswer();" id="ogcheckbutton"class="ui right attached blue button">Check</button>'+
// 												'</div>'+
// 											'</div>'+

// 											'<br><div class="ogcentered"> <div class="ognextex">'+
												
// 											'</div> </div>';
// 	}
// 	if (numberOfWords == 7) {
// 		cambiarContenido.innerHTML = '<hr>'+
// 									 '<button id="ogbuttonmargin" class="ui button">'+primerOrden[0]+'</button>'+
// 						         	 '<button id="ogbuttonmargin" class="ui button">'+primerOrden[1]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[2]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[3]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[4]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[5]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[6]+'</button>';
// 	}
// 	if (numberOfWords == 8) {
// 		cambiarContenido.innerHTML = '<hr>'+
// 									 '<button id="ogbuttonmargin" class="ui button">'+primerOrden[0]+'</button>'+
// 						         	 '<button id="ogbuttonmargin" class="ui button">'+primerOrden[1]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[2]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[3]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[4]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[5]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[6]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[7]+'</button>';
// 	}
// 	if (numberOfWords == 9) {
// 		cambiarContenido.innerHTML = '<hr>'+
// 									 '<button id="ogbuttonmargin" class="ui button">'+primerOrden[0]+'</button>'+
// 						         	 '<button id="ogbuttonmargin" class="ui button">'+primerOrden[1]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[2]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[3]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[4]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[5]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[6]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[7]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[8]+'</button>';
// 	}
// 	if (numberOfWords == 10) {
// 		cambiarContenido.innerHTML = '<hr>'+
// 									 '<button id="ogbuttonmargin" class="ui button">'+primerOrden[0]+'</button>'+
// 						         	 '<button id="ogbuttonmargin" class="ui button">'+primerOrden[1]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[2]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[3]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[4]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[5]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[6]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[7]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[8]+'</button>'+
// 						             '<button id="ogbuttonmargin" class="ui button">'+primerOrden[9]+'</button>';
// 	}
						 
// }

// function pressButton0(){
// let getText = document.querySelector("#ogbutton0");
// answerArray.push(getText.textContent)
// console.log(answerArray);
// let putWord = document.querySelector(".ogtext");
// putWord.innerHTML = answerArray.join(" ");
// getText.className="ui disabled button";
// }

// function pressButton1(){
// let getText = document.querySelector("#ogbutton1");
// answerArray.push(getText.textContent)
// console.log(answerArray);
// let putWord = document.querySelector(".ogtext");
// putWord.innerHTML = answerArray.join(" ");
// getText.className="ui disabled button";
// }

// function pressButton2(){
// let getText = document.querySelector("#ogbutton2");
// answerArray.push(getText.textContent)
// console.log(answerArray);
// let putWord = document.querySelector(".ogtext");
// putWord.innerHTML = answerArray.join(" ");
// getText.className="ui disabled button";
// }

// function pressButton3(){
// let getText = document.querySelector("#ogbutton3");
// answerArray.push(getText.textContent)
// console.log(answerArray);
// let putWord = document.querySelector(".ogtext");
// putWord.innerHTML = answerArray.join(" ");
// getText.className="ui disabled button";
// }
// function pressButton4(){
// let getText = document.querySelector("#ogbutton4");
// answerArray.push(getText.textContent)
// console.log(answerArray);
// let putWord = document.querySelector(".ogtext");
// putWord.innerHTML = answerArray.join(" ");
// getText.className="ui disabled button";
// }
// function pressButton5(){
// let getText = document.querySelector("#ogbutton5");
// answerArray.push(getText.textContent)
// console.log(answerArray);
// let putWord = document.querySelector(".ogtext");
// putWord.innerHTML = answerArray.join(" ");
// getText.className="ui disabled button";
// }
// function pressButton6(){
// let getText = document.querySelector("#ogbutton6");
// answerArray.push(getText.textContent)
// console.log(answerArray);
// let putWord = document.querySelector(".ogtext");
// putWord.innerHTML = answerArray.join(" ");
// getText.className="ui disabled button";
// }
// function pressButton7(){
// let getText = document.querySelector("#ogbutton7");
// answerArray.push(getText.textContent)
// console.log(answerArray);
// let putWord = document.querySelector(".ogtext");
// putWord.innerHTML = answerArray.join(" ");
// getText.className="ui disabled button";
// }
// function pressButton8(){
// let getText = document.querySelector("#ogbutton8");
// answerArray.push(getText.textContent)
// console.log(answerArray);
// let putWord = document.querySelector(".ogtext");
// putWord.innerHTML = answerArray.join(" ");
// getText.className="ui disabled button";
// }
// function pressButton9(){
// let getText = document.querySelector("#ogbutton9");
// answerArray.push(getText.textContent)
// console.log(answerArray);
// let putWord = document.querySelector(".ogtext");
// putWord.innerHTML = answerArray.join(" ");
// getText.className="ui disabled button";
// }
// function clearBoard(){
// 	let putWord = document.querySelector(".ogtext");
// 	putWord.innerHTML = "<br>";	
// }

// function checkAnswer(){
// let getCheckButton = document.querySelector("#ogcheckbutton");
// let nextExcercise = document.querySelector(".ognextex");

// 	if (answerArray.toString() == oracionArray.toString() && answerArray.length == oracionArray.length) {
// 		console.log("ganaste");
// 		getCheckButton.className ="ui green button";
// 		getCheckButton.innerHTML ="Correct!";
// 		nextExcercise.style.display = "inline";
		




// 	}
// 	else if(answerArray.toString() != oracionArray.toString() && answerArray.length == oracionArray.length){
// 		console.log("perdiste");
// 		getCheckButton.className ="ui red button";
// 		getCheckButton.innerHTML ="Try again!";
// 	}


// }

// function nextOne(numero){
// 	let SigEj = document.querySelector(".ognextex");
// 	SigEj.innerHTML =  '<button onclick="ejercicio'+numero+'();" id="ogsigejercicio" class="ui right labeled icon blue button">'+
// 						'<i class="right arrow icon"></i>'+
// 						'Next'+
// 						'</button>';
// }
// var isPlaying = false;
// function playAudio(audionum){

// 	var snd = new Audio("color"+audionum+".mp3");
	

// 	if (isPlaying == false) {
// 		isPlaying = true;
// 		snd.play();
		
	
// 	}
	
// 	snd.onended = function() {parar()};

// 	function parar(){
// 		isPlaying = false;
// 		console.log("lmao");
// }

// }






// function reset(){
// 	let getCheckButton = document.querySelector("#ogcheckbutton").innerHTML = "Check";
// 	let getCheckButton2 = document.querySelector("#ogcheckbutton").className = "ui blue button";
// 	clearBoard();
// 	answerArray = [];
// 	let resetb1 = document.querySelector("#ogbutton0").className="ui button";
// 	let resetb2 = document.querySelector("#ogbutton1").className="ui button";
// 	let resetb3 = document.querySelector("#ogbutton2").className="ui button";
// 	let resetb4 = document.querySelector("#ogbutton3").className="ui button";
// 	let resetb5 = document.querySelector("#ogbutton4").className="ui button";
// 	let resetb6 = document.querySelector("#ogbutton5").className="ui button";
// 	let resetb7 = document.querySelector("#ogbutton6").className="ui button";
// 	let resetb8 = document.querySelector("#ogbutton7").className="ui button";
// 	let resetb9 = document.querySelector("#ogbutton8").className="ui button";
// 	let resetb10 = document.querySelector("#ogbutton9").className="ui button";
	

// }


		


// function ejercicio3(){
// 	clearBoard();
// 	oracionArray = ["english", "is", "a", "very", "useful", "language"];
// 	answerArray = [];
// 	primerOrden = [];
// 	numberOfWords = 6;
// 	generarRnds();
// 	console.log(myarray);
// 	asignarPalabras();
// 	ordenarPalabras();
// 	nextOne(4);

// }

// function ejercicio4(){
// 	clearBoard();
// 	oracionArray = ["we", "are", "doing", "our", "homework"];
// 	answerArray = [];
// 	primerOrden = [];
// 	numberOfWords = 5;
// 	generarRnds();
// 	console.log(myarray);
// 	asignarPalabras();
// 	ordenarPalabras();
// 	nextOne(3);
// }





// /////////////////////////////////////


// //Group of Words


// function getGroup2(){
// 	console.log("lmao");
// 	let cambiarContenido = document.querySelector(".oggroup");
// 	let cambiarContenido2 = document.querySelector(".oggroup2");
// 	let cambiarContenido3 = document.querySelector(".oggroup3");
// 	let cambiarContenido4 = document.querySelector(".oggroup4");

// 			cambiarContenido.style.display ="none";
// 			cambiarContenido3.style.display ="none";
// 			cambiarContenido4.style.display ="none";
// 			cambiarContenido2.style.display ="inline";

		
// }

// function getGroup1(){
// 	console.log("lmao");
// 	let cambiarContenido2 = document.querySelector(".oggroup");
// 	let cambiarContenido = document.querySelector(".oggroup2");
// 	let cambiarContenido3 = document.querySelector(".oggroup3");
// 	let cambiarContenido4 = document.querySelector(".oggroup4");

// 			cambiarContenido.style.display ="none";
// 			cambiarContenido3.style.display ="none";
// 			cambiarContenido4.style.display ="none";
// 			cambiarContenido2.style.display ="inline";

		
// }

// function getGroup3(){
// 	console.log("lmao");
// 	let cambiarContenido2 = document.querySelector(".oggroup");
// 	let cambiarContenido = document.querySelector(".oggroup2");
// 	let cambiarContenido3 = document.querySelector(".oggroup3");
// 	let cambiarContenido4 = document.querySelector(".oggroup4");

// 			cambiarContenido.style.display ="none";
// 			cambiarContenido3.style.display ="inline";
// 			cambiarContenido2.style.display ="none";
// 			cambiarContenido4.style.display ="none";	
// }

// function getGroup4(){
// 	console.log("lmao");
// 	let cambiarContenido2 = document.querySelector(".oggroup");
// 	let cambiarContenido = document.querySelector(".oggroup2");
// 	let cambiarContenido3 = document.querySelector(".oggroup3");
// 	let cambiarContenido4 = document.querySelector(".oggroup4");

// 			cambiarContenido.style.display ="none";
// 			cambiarContenido3.style.display ="none";
// 			cambiarContenido2.style.display ="none";
// 			cambiarContenido4.style.display ="inline";	
// }





// ///////
// //Ejercicio A AN THE

// let ExcerciseNo = 1;
// let ExcerciseAnswer;
// let ExcerciseAnswer2;
// let ExcerciseAnswer3;
// let doubleAnswer;
// let turno = true;

// checkDouble();

// function checkDouble(){
// 	if (ExcerciseNo == 2 || ExcerciseNo == 3 || ExcerciseNo == 4 || ExcerciseNo == 7 || ExcerciseNo == 8) {
// 		doubleAnswer = true;
// 	}
// 	else{
// 		doubleAnswer = false;
// 	}
// 	console.log(doubleAnswer);
// }

// function returnColors(){
// 	let getButton = document.querySelector("#abutton");
// 	let getButton2 = document.querySelector("#anbutton");
// 	let getButton3 = document.querySelector("#thebutton");
// 	let getButtonx = document.querySelector("#abuttonx");
// 	let getButton2x = document.querySelector("#anbuttonx");
// 	let getButton3x = document.querySelector("#thebuttonx");

// 	getButton.className="fluid ui button";
// 	getButton2.className="fluid ui button";
// 	getButton3.className="fluid ui button";

// 	//switchButtons();

// }

// function returnColors2(){
// 	let getButton = document.querySelector("#abutton");
// 	let getButton2 = document.querySelector("#anbutton");


// 	getButton.className="fluid ui button";
// 	getButton2.className="fluid ui button";


// 	//switchButtons();

// }

// function pressButtonU1A(){
// 	let getButton = document.querySelector("#abutton");
// 	let getButton2 = document.querySelector("#anbutton");
// 	let getButton3 = document.querySelector("#thebutton");
// 	let getSpace = document.querySelector(".ogspace");
// 	let getSpace2 = document.querySelector(".ogspace2");

// 	getButton.className="fluid ui blue button";
// 	getButton2.className="fluid ui button";
// 	getButton3.className="fluid ui button";

// 	//ExcerciseAnswer = "a";

// 	if (doubleAnswer == true) {
// 			if (turno == true) {
// 				ExcerciseAnswer = "a";
// 				getSpace.textContent =ExcerciseAnswer;
// 				getSpace2.style.border = "4px solid #1b6195";
// 				getSpace.style.border = "none";
// 				console.log(ExcerciseAnswer);
// 				turno = false;
// 			}
// 			else if (turno == false) {
// 				ExcerciseAnswer2 = "a";
// 				getSpace2.textContent =ExcerciseAnswer2;
// 				getSpace.style.border = "4px solid #1b6195";
// 				getSpace2.style.border = "none";
// 				console.log(ExcerciseAnswer);
// 				turno = true;
// 			}
// 		} else if (doubleAnswer == false) {
// 			ExcerciseAnswer = "a";
// 			getSpace.textContent =ExcerciseAnswer;
			
// 			console.log(ExcerciseAnswer);
// 		}


// 	setTimeout(returnColors, 250);
// }

// function pressButtonU1An(){
// 	let getButton = document.querySelector("#abutton");
// 	let getButton2 = document.querySelector("#anbutton");
// 	let getButton3 = document.querySelector("#thebutton");
// 	let getSpace = document.querySelector(".ogspace");
// 	let getSpace2 = document.querySelector(".ogspace2");
// 	getButton.className="fluid ui button";
// 	getButton2.className="fluid ui blue button";
// 	getButton3.className="fluid ui button";


// 	//ExcerciseAnswer = "an";


// 	if (doubleAnswer == true) {
// 			if (turno == true) {
// 				ExcerciseAnswer = "an";
// 				getSpace.textContent =ExcerciseAnswer;
// 				getSpace2.style.border = "4px solid #1b6195";
// 				getSpace.style.border = "none";
// 				console.log(ExcerciseAnswer);
// 				turno = false;
// 			}
// 			else if (turno == false) {
// 				ExcerciseAnswer2 = "an";
// 				getSpace2.textContent =ExcerciseAnswer2;
// 				getSpace.style.border = "4px solid #1b6195";
// 				getSpace2.style.border = "none";
// 				console.log(ExcerciseAnswer);
// 				turno = true;
// 			}
// 		} else if (doubleAnswer == false) {
// 			ExcerciseAnswer = "an";
// 			getSpace.textContent =ExcerciseAnswer;
// 			console.log(ExcerciseAnswer);
// 		}


// 	setTimeout(returnColors, 250);
// }

// function pressButtonU1The(){
// 	let getButton = document.querySelector("#abutton");
// 	let getButton2 = document.querySelector("#anbutton");
// 	let getButton3 = document.querySelector("#thebutton");
// 	let getSpace = document.querySelector(".ogspace");
// 	let getSpace2 = document.querySelector(".ogspace2");
// 	getButton.className="fluid ui button";
// 	getButton2.className="fluid ui button";
// 	getButton3.className="fluid ui blue button";

// 	//ExcerciseAnswer2 = "the";


// 	if (doubleAnswer == true) {
// 			if (turno == true) {
// 				ExcerciseAnswer = "the";
// 				getSpace.textContent =ExcerciseAnswer;
// 				getSpace2.style.border = "4px solid #1b6195";
// 				getSpace.style.border = "none";
// 				console.log(ExcerciseAnswer);
// 				turno = false;
// 			}
// 			else if (turno == false) {
// 				ExcerciseAnswer2 = "the";
// 				getSpace2.textContent =ExcerciseAnswer2;
// 				getSpace.style.border = "4px solid #1b6195";
// 				getSpace2.style.border = "none";
// 				console.log(ExcerciseAnswer);
// 				turno = true;
// 			}
// 		} else if (doubleAnswer == false) {
// 			ExcerciseAnswer = "the";
// 			getSpace.textContent =ExcerciseAnswer;
// 			console.log(ExcerciseAnswer);
// 		}


// 	setTimeout(returnColors, 250);
// }







// function returnToNormal(){
// 	let getCheck = document.querySelector("#checkAnswerU1");
// 	getCheck.className = "fluid ui blue button";
// 	getCheck.textContent ="Check";

// }

// let checkState = document.querySelector("#checkAnswerU1");
// let checkNextBtn = document.querySelector("#ogdiss");

// let isCovered = true;
// function coverNext(){
// if (isCovered == true) {
// 	checkNextBtn.className = "fluid ui blue disabled button";
// } else if (isCovered == false) {
// 	checkNextBtn.className = "fluid ui blue button";
// }

// }

// function checkAnswerU1(){
// 	let getButton = document.querySelector("#abutton");
// 	let getButton2 = document.querySelector("#anbutton");
// 	let getButton3 = document.querySelector("#thebutton");
// 	let getButtonx = document.querySelector("#abuttonx");
// 	let getButton2x = document.querySelector("#anbuttonx");
// 	let getButton3x = document.querySelector("#thebuttonx");
// 	let getCheck = document.querySelector("#checkAnswerU1");
// 	let getNext = document.querySelector("#ogdiss");
// 	console.log(ExcerciseNo);
// 	console.log(ExcerciseAnswer +" "+ ExcerciseAnswer2);

// 	if (ExcerciseNo == 1) {

// 		if (ExcerciseAnswer == "an") {
// 			console.log("ganaste");
// 			getCheck.className = "fluid ui green button";
// 			getCheck.textContent ="Correct!";
// 			getButton.id="lmao";
// 			getButton2.id="lmao";
// 			getButton3.id="lmao";
// 			isCovered = false;
// 			coverNext();


// 		}
// 		else{
// 			console.log("incorrecto");
// 			getCheck.className = "fluid ui red button";
// 			getCheck.textContent ="Incorrect";
// 			setTimeout(returnToNormal, 2000);
// 		}
// 	}


// 	if (ExcerciseNo == 2) {
// 		if (ExcerciseAnswer == "the" && ExcerciseAnswer2== "the") {
// 			console.log("ganaste");
// 			getCheck.className = "fluid ui green button";
// 			getCheck.textContent ="Correct!";
// 			getButton.id="lmao";
// 			getButton2.id="lmao";
// 			getButton3.id="lmao";
// 			isCovered = false;
// 			coverNext();

// 		}
// 		else{
// 			console.log("incorrecto");
// 			getCheck.className = "fluid ui red button";
// 			getCheck.textContent ="Incorrect";
// 			setTimeout(returnToNormal, 2000);
// 		}
// 	}

// 	if (ExcerciseNo == 3) {
// 		if (ExcerciseAnswer == "the" && ExcerciseAnswer2== "the") {
// 			console.log("ganaste");
// 			getCheck.className = "fluid ui green button";
// 			getCheck.textContent ="Correct!";
// 			getButton.id="lmao";
// 			getButton2.id="lmao";
// 			getButton3.id="lmao";
// 			isCovered = false;
// 			coverNext();

// 		}
// 		else{
// 			console.log("incorrecto");
// 			getCheck.className = "fluid ui red button";
// 			getCheck.textContent ="Incorrect";
// 			setTimeout(returnToNormal, 2000);
// 		}
// 	}

// 	if (ExcerciseNo == 4) {
// 		if (ExcerciseAnswer == "a" && ExcerciseAnswer2 == "the") {
// 			console.log("ganaste");
// 			getCheck.className = "fluid ui green button";
// 			getCheck.textContent ="Correct!";
// 			getButton.id="lmao";
// 			getButton2.id="lmao";
// 			getButton3.id="lmao";
// 			isCovered = false;
// 			coverNext();

// 		}
// 		else{
// 			console.log("incorrecto");
// 			getCheck.className = "fluid ui red button";
// 			getCheck.textContent ="Incorrect";
// 			setTimeout(returnToNormal, 2000);
// 		}
// 	}

// 	if (ExcerciseNo == 5) {
// 		if (ExcerciseAnswer == "the") {
// 			console.log("ganaste");
// 			getCheck.className = "fluid ui green button";
// 			getCheck.textContent ="Correct!";
// 			getButton.id="lmao";
// 			getButton2.id="lmao";
// 			getButton3.id="lmao";
// 			isCovered = false;
// 			coverNext();

// 		}
// 		else{
// 			console.log("incorrecto");
// 			getCheck.className = "fluid ui red button";
// 			getCheck.textContent ="Incorrect";
// 			setTimeout(returnToNormal, 2000);
// 		}
// 	}
// 	if (ExcerciseNo == 6) {
// 		if (ExcerciseAnswer == "the") {
// 			console.log("ganaste");
// 			getCheck.className = "fluid ui green button";
// 			getCheck.textContent ="Correct!";
// 			getButton.id="lmao";
// 			getButton2.id="lmao";
// 			getButton3.id="lmao";
// 			isCovered = false;
// 			coverNext();

// 		}
// 		else{
// 			console.log("incorrecto");
// 			getCheck.className = "fluid ui red button";
// 			getCheck.textContent ="Incorrect";
// 			setTimeout(returnToNormal, 2000);
// 		}
// 	}
// 	if (ExcerciseNo == 7) {
// 		if (ExcerciseAnswer == "a" && ExcerciseAnswer2 == "the") {
// 			console.log("ganaste");
// 			getCheck.className = "fluid ui green button";
// 			getCheck.textContent ="Correct!";
// 			getButton.id="lmao";
// 			getButton2.id="lmao";
// 			getButton3.id="lmao";
// 			isCovered = false;
// 			coverNext();

// 		}
// 		else{
// 			console.log("incorrecto");
// 			getCheck.className = "fluid ui red button";
// 			getCheck.textContent ="Incorrect";
// 			setTimeout(returnToNormal, 2000);
// 		}
// 	}

// 	if (ExcerciseNo == 8) {
// 		if (ExcerciseAnswer == "the" && ExcerciseAnswer2 == "the") {
// 			console.log("ganaste");
// 			getCheck.className = "fluid ui green button";
// 			getCheck.textContent ="Correct!";
// 			getButton.id="lmao";
// 			getButton2.id="lmao";
// 			getButton3.id="lmao";
// 			isCovered = false;
// 			coverNext();

// 		}
// 		else{
// 			console.log("incorrecto");
// 			getCheck.className = "fluid ui red button";
// 			getCheck.textContent ="Incorrect";
// 			setTimeout(returnToNormal, 2000);
// 		}
// 	}
// 	if (ExcerciseNo == 9) {
// 		if (ExcerciseAnswer == "a") {
// 			console.log("ganaste");
// 			getCheck.className = "fluid ui green button";
// 			getCheck.textContent ="Correct!";
// 			getButton.id="lmao";
// 			getButton2.id="lmao";
// 			getButton3.id="lmao";
// 			isCovered = false;
// 			coverNext();

// 		}
// 		else{
// 			console.log("incorrecto");
// 			getCheck.className = "fluid ui red button";
// 			getCheck.textContent ="Incorrect";
// 			setTimeout(returnToNormal, 2000);
// 		}
// 	}
// 	if (ExcerciseNo == 10) {
// 		if (ExcerciseAnswer == "the") {
// 			console.log("ganaste");
// 			getCheck.className = "fluid ui green button";
// 			getCheck.textContent ="Correct!";
// 			getButton.id="lmao";
// 			getButton2.id="lmao";
// 			getButton3.id="lmao";
// 			isCovered = false;
// 			coverNext();

// 		}
// 		else{
// 			console.log("incorrecto");
// 			getCheck.className = "fluid ui red button";
// 			getCheck.textContent ="Incorrect";
// 			setTimeout(returnToNormal, 2000);
// 		}
// 	}

// }

// function nextExcercise(){
// 	turno = true;
// 	isCovered = true;
// 	coverNext();
// 	ExcerciseNo = ExcerciseNo+1;
// 	console.log(ExcerciseNo);
// 	console.log("bruh");
// 	let getExcercise = document.querySelector(".ogchange");
// 	let getButton = document.querySelector("#ogdiss");
	

// 	checkDouble();

// 	if (ExcerciseNo == 2) {

// 		getExcercise.innerHTML =     '<h4 id="ogtext">2. <button class="ogspace">?</button> English book is on <button class="ogspace2">?</button> the table.</h4>'+
// 									'<div class="ogcentered2">'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1A();" id="abutton" class="fluid ui button">a</button></div>'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1An();" id="anbutton"class="fluid ui button">an</button></div>'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1The();" id="thebutton" class="fluid ui button">the</button></div>'+
// 										'<div class="ogbox2"><button id="checkAnswerU1" onclick="checkAnswerU1();" class="fluid blue ui button">Check</button></div>'+
// 									'</div>';
// 	}

// 		if (ExcerciseNo == 3) {
// 		getExcercise.innerHTML =     '<h4 id="ogtext">3. <button class="ogspace">?</button> children are in <button class="ogspace2">?</button> yard.</h4>'+
// 									'<div class="ogcentered2">'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1A();" id="abutton" class="fluid ui button">a</button></div>'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1An();" id="anbutton"class="fluid ui button">an</button></div>'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1The();" id="thebutton" class="fluid ui button">the</button></div>'+
// 										'<div class="ogbox2"><button id="checkAnswerU1" onclick="checkAnswerU1();" class="fluid blue ui button">Check</button></div>'+
// 									'</div>';
// 	}

// 	if (ExcerciseNo == 4) {
// 		getExcercise.innerHTML =     '<h4 id="ogtext">4. There is <button class="ogspace">?</button> pen on <button class="ogspace2">?</button> the floor.</h4>'+
// 									'<div class="ogcentered2">'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1A();" id="abutton" class="fluid ui button">a</button></div>'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1An();" id="anbutton"class="fluid ui button">an</button></div>'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1The();" id="thebutton" class="fluid ui button">the</button></div>'+
// 										'<div class="ogbox2"><button id="checkAnswerU1" onclick="checkAnswerU1();" class="fluid blue ui button">Check</button></div>'+
// 									'</div>';
// 	}

// 	if (ExcerciseNo == 5) {
// 		getExcercise.innerHTML =     '<h4 id="ogtext">5. <button class="ogspace">?</button> tree is green.</h4>'+
// 									'<div class="ogcentered2">'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1A();" id="abutton" class="fluid ui button">a</button></div>'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1An();" id="anbutton"class="fluid ui button">an</button></div>'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1The();" id="thebutton" class="fluid ui button">the</button></div>'+
// 										'<div class="ogbox2"><button id="checkAnswerU1" onclick="checkAnswerU1();" class="fluid blue ui button">Check</button></div>'+
// 									'</div>';
// 	}
// 	if (ExcerciseNo == 6) {
// 		getExcercise.innerHTML =     '<h4 id="ogtext">6. Are you in <button class="ogspace">?</button> living room? </h4>'+
// 									'<div class="ogcentered2">'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1A();" id="abutton" class="fluid ui button">a</button></div>'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1An();" id="anbutton"class="fluid ui button">an</button></div>'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1The();" id="thebutton" class="fluid ui button">the</button></div>'+
// 										'<div class="ogbox2"><button id="checkAnswerU1" onclick="checkAnswerU1();" class="fluid blue ui button">Check</button></div>'+
// 									'</div>';
// 	}
// 	if (ExcerciseNo == 7) {
// 		getExcercise.innerHTML =     '<h4 id="ogtext">7. There is <button class="ogspace">?</button> dress on <button class="ogspace2">?</button> bed.</h4>'+
// 									'<div class="ogcentered2">'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1A();" id="abutton" class="fluid ui button">a</button></div>'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1An();" id="anbutton"class="fluid ui button">an</button></div>'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1The();" id="thebutton" class="fluid ui button">the</button></div>'+
// 										'<div class="ogbox2"><button id="checkAnswerU1" onclick="checkAnswerU1();" class="fluid blue ui button">Check</button></div>'+
// 									'</div>';
// 	}

// 	if (ExcerciseNo == 8) {
// 		getExcercise.innerHTML =     '<h4 id="ogtext">8. <button class="ogspace">?</button> baby is in <button class="ogspace2">?</button> room.</h4>'+
// 									'<div class="ogcentered2">'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1A();" id="abutton" class="fluid ui button">a</button></div>'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1An();" id="anbutton"class="fluid ui button">an</button></div>'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1The();" id="thebutton" class="fluid ui button">the</button></div>'+
// 										'<div class="ogbox2"><button id="checkAnswerU1" onclick="checkAnswerU1();" class="fluid blue ui button">Check</button></div>'+
// 									'</div>';
// 	}

// 	if (ExcerciseNo == 9) {
// 		getExcercise.innerHTML =     '<h4 id="ogtext">9. That is <button class="ogspace">?</button> beautiful car.</h4>'+
// 									'<div class="ogcentered2">'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1A();" id="abutton" class="fluid ui button">a</button></div>'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1An();" id="anbutton"class="fluid ui button">an</button></div>'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1The();" id="thebutton" class="fluid ui button">the</button></div>'+
// 										'<div class="ogbox2"><button id="checkAnswerU1" onclick="checkAnswerU1();" class="fluid blue ui button">Check</button></div>'+
// 									'</div>';
// 	}
// 	if (ExcerciseNo == 10) {
// 		getExcercise.innerHTML =     '<h4 id="ogtext">10. <button class="ogspace">?</button> house is big.</h4>'+
// 									'<div class="ogcentered2">'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1A();" id="abutton" class="fluid ui button">a</button></div>'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1An();" id="anbutton"class="fluid ui button">an</button></div>'+
// 										'<div class="ogbox1"><button onclick="pressButtonU1The();" id="thebutton" class="fluid ui button">the</button></div>'+
// 										'<div class="ogbox2"><button id="checkAnswerU1" onclick="checkAnswerU1();" class="fluid blue ui button">Check</button></div>'+
// 									'</div>';


// 	}

// 	if (ExcerciseNo == 11) {
// 		window.open(pag3.html);
// 	}

	
// 		}







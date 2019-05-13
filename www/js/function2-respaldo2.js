let turno = true;
let ExcerciseNo = 1;
let ExType = 3;
let ExUnits = 1;
let show;
let RandomExNo = 0;
let NoOrden = RandomExNo+1;
let currentex = (ExUnits+' '+ExType+' '+ExcerciseNo);
let currentype = (ExUnits+' '+ExType);

let listaX;
let lista1=[1,2,3];
let lista2=[4,5,6];
let X = 1;


function asd(){
	console.log(currentlista[5]);
}
/////Ejercicio NEAR FAR//////////
console.log("ejercicio numero"+ ExcerciseNo);
function returnColors(){
	let getButton = document.querySelector("#abutton");
	let getButton2 = document.querySelector("#anbutton");
	let getButton3 = document.querySelector("#abutton2");
	let getButton4 = document.querySelector("#anbutton2");
	let getSpace3 = document.querySelector(".ogspace3");


	getButton.className="fluid ui button";
	getButton2.className="fluid ui button";
	getButton3.className="fluid ui button";
	getButton4.className="fluid ui button";


	//switchButtons();

}
function ExUnit1(){
	ExUnits = 1;
}
function ExUnit2(){
	ExUnits = 2;
}
function pressButton1(){
	let getButton = document.querySelector("#abutton");
	let getButton2 = document.querySelector("#anbutton");
	let getButton3 = document.querySelector("#abutton2");
	let getButton4 = document.querySelector("#anbutton2");
	let getSpace3 = document.querySelector(".ogspace3");
	let getNextB = document.querySelector("#ogdiss2");

	getButton.className="fluid ui blue button";
	getButton2.className="fluid ui button";
	getButton3.className="fluid ui button";
	getButton4.className="fluid ui button";
	getNextB.className="fluid ui blue button";

	if (ExType == 3) {
		ExcerciseAnswer3 = getButton.textContent;
	}

	
	getSpace3.textContent =ExcerciseAnswer3;

	setTimeout(returnColors, 250);
}


function pressButton2(){
	let getButton = document.querySelector("#abutton");
	let getButton2 = document.querySelector("#anbutton");
	let getButton3 = document.querySelector("#abutton2");
	let getButton4 = document.querySelector("#anbutton2");
	let getSpace3 = document.querySelector(".ogspace3");
	let getNextB = document.querySelector("#ogdiss2");

	getButton.className="fluid ui button";
	getButton2.className="fluid ui blue button";
	getButton3.className="fluid ui button";
	getButton4.className="fluid ui button";
	getNextB.className="fluid ui blue button";

	if (ExType == 3) {
		ExcerciseAnswer3 = getButton2.textContent;
	}
	
	getSpace3.textContent =ExcerciseAnswer3;

	setTimeout(returnColors, 250);
}

function pressButton3(){
	let getButton = document.querySelector("#abutton");
	let getButton2 = document.querySelector("#anbutton");
	let getButton3 = document.querySelector("#abutton2");
	let getButton4 = document.querySelector("#anbutton2");
	let getSpace3 = document.querySelector(".ogspace3");
	let getNextB = document.querySelector("#ogdiss2");

	getButton.className="fluid ui button";
	getButton2.className="fluid ui button";
	getButton3.className="fluid ui blue button";
	getButton4.className="fluid ui button";
	getNextB.className="fluid ui blue button";

	if (ExType == 3) {
		ExcerciseAnswer3 = getButton3.textContent;
	}
	
	getSpace3.textContent =ExcerciseAnswer3;

	setTimeout(returnColors, 250);
}

function pressButton4(){
	let getButton = document.querySelector("#abutton");
	let getButton2 = document.querySelector("#anbutton");
	let getButton3 = document.querySelector("#abutton2");
	let getButton4 = document.querySelector("#anbutton2");
	let getSpace3 = document.querySelector(".ogspace3");
	let getNextB = document.querySelector("#ogdiss2");

	getButton.className="fluid ui button";
	getButton2.className="fluid ui button";
	getButton3.className="fluid ui button";
	getButton4.className="fluid ui blue button";
	getNextB.className="fluid ui blue button";

	if (ExType == 3) {
		ExcerciseAnswer3 = getButton4.textContent;
	}
	
	getSpace3.textContent =ExcerciseAnswer3;

	setTimeout(returnColors, 250);
}

function press2Button1(){
	let getButton = document.querySelector("#abutton");
	let getButton2 = document.querySelector("#anbutton");

	let getSpace3 = document.querySelector(".ogspace3");
	let getNextB = document.querySelector("#ogdiss2");

	getButton.className="fluid ui blue button";
	getButton2.className="fluid ui button";

	getNextB.className="fluid ui blue button";

	if (ExType == 1) {
		ExcerciseAnswer3 = getButton.textContent;
	}

	getSpace3.textContent =ExcerciseAnswer3;

	setTimeout(returnColors, 250);
}

function press2Button2(){
	let getButton = document.querySelector("#abutton");
	let getButton2 = document.querySelector("#anbutton");

	let getSpace3 = document.querySelector(".ogspace3");

	let getNextB = document.querySelector("#ogdiss2");

	getButton.className="fluid ui button";
	getButton2.className="fluid ui blue button";

	getNextB.className="fluid ui blue button";

	if (ExType == 1) {
		ExcerciseAnswer3 = getButton2.textContent;
	}
	
	getSpace3.textContent = ExcerciseAnswer3;

	setTimeout(returnColors, 250);
}

function checkDouble(){
	if (ExType == 2) {
		if (ExcerciseNo == 1 || ExcerciseNo == 2 || ExcerciseNo == 3 || ExcerciseNo == 6 || ExcerciseNo == 7) {
		doubleAnswer = true;
		}
		else{
			doubleAnswer = false;
		}
		console.log(doubleAnswer);
	}
	
}

function press3Button1(){
	let getButton = document.querySelector("#abutton");
	let getButton2 = document.querySelector("#anbutton");
	let getButton3 = document.querySelector("#abutton2");

	let getSpace1 = document.querySelector(".ogspace2");
	let getSpace2 = document.querySelector(".ogspace4");
	let getNextB = document.querySelector("#ogdiss2");

	getButton.className="fluid ui blue button";
	getButton2.className="fluid ui button";
	getButton3.className="fluid ui button";

	getNextB.className="fluid ui blue button";
	checkDouble();

	if (ExType == 2) {
		if (doubleAnswer == true) {
				if (turno == true) {
				ExcerciseAnswer3 = getButton.textContent;
				getSpace1.textContent =ExcerciseAnswer3;
				turno = false;
			}

			else if (turno == false) {
				ExcerciseAnswer4 = getButton.textContent;
				getSpace2.textContent =ExcerciseAnswer4;
				turno = true;
			}
		} else{
			ExcerciseAnswer3 = getButton.textContent;
				getSpace1.textContent =ExcerciseAnswer3;
		}
		
		
	}

	setTimeout(returnColors, 250);
}

function press3Button2(){
	let getButton = document.querySelector("#abutton");
	let getButton2 = document.querySelector("#anbutton");
	let getButton3 = document.querySelector("#abutton2");

	let getSpace1 = document.querySelector(".ogspace2");
	let getSpace2 = document.querySelector(".ogspace4");
	let getNextB = document.querySelector("#ogdiss2");

	getButton.className="fluid ui button";
	getButton2.className="fluid ui blue button";
	getButton3.className="fluid ui button";

	getNextB.className="fluid ui blue button";
checkDouble();
	if (ExType == 2) {
		if (doubleAnswer == true) {
				if (turno == true) {
				ExcerciseAnswer3 = getButton2.textContent;
				getSpace1.textContent =ExcerciseAnswer3;
				turno = false;
			}

			else if (turno == false) {
				ExcerciseAnswer4 = getButton2.textContent;
				getSpace2.textContent =ExcerciseAnswer4;
				turno = true;
			}
		} else{
			ExcerciseAnswer3 = getButton2.textContent;
				getSpace1.textContent =ExcerciseAnswer3;
		}
		
		
	}

	setTimeout(returnColors, 250);
}

function press3Button3(){
	let getButton = document.querySelector("#abutton");
	let getButton2 = document.querySelector("#anbutton");
	let getButton3 = document.querySelector("#abutton2");

	let getSpace1 = document.querySelector(".ogspace2");
	let getSpace2 = document.querySelector(".ogspace4");
	let getNextB = document.querySelector("#ogdiss2");

	getButton.className="fluid ui button";
	getButton2.className="fluid ui button";
	getButton3.className="fluid ui blue button";

	getNextB.className="fluid ui blue button";
checkDouble();
	if (ExType == 2) {
		if (doubleAnswer == true) {
				if (turno == true) {
				ExcerciseAnswer3 = getButton3.textContent;
				getSpace1.textContent =ExcerciseAnswer3;
				turno = false;
			}

			else if (turno == false) {
				ExcerciseAnswer4 = getButton3.textContent;
				getSpace2.textContent =ExcerciseAnswer4;
				turno = true;
			}
		} else{
			ExcerciseAnswer3 = getButton3.textContent;
				getSpace1.textContent =ExcerciseAnswer3;
		}
		
		
	}

	setTimeout(returnColors, 250);
}





let arrayRespuestas = [];



function returnToNormal(){
	let getCheck = document.querySelector("#checkAnswerU1");
	getCheck.className = "fluid ui blue button";
	getCheck.textContent ="Check";

}

let checkState = document.querySelector("#checkAnswerU1");
let checkNextBtn = document.querySelector("#ogdiss2");

let isCovered = true;
function coverNext(){
if (isCovered == true) {
	checkNextBtn.className = "fluid ui blue disabled button";
} else if (isCovered == false) {
	checkNextBtn.className = "fluid ui blue button";
}

}





let correct1;
let answer1;
let correct2;
let answer2;
let correct3;
let answer3;
let correct4;
let answer4;
let correct5;
let answer5;
let correct6;
let answer6;
let correct7;
let answer7;
let correct8;
let answer8;
let correct9;
let answer9;
let correct10;
let answer10;

var myarray = [];

let exe1 = myarray[0];
let exe2 = myarray[1];;
let exe3 = myarray[2];;
let exe4 = myarray[3];;
let exe5 = myarray[4];;
let exe6 = myarray[5];;
let exe7 = myarray[6];;
let exe8 = myarray[7];;
let exe9 = myarray[8];;
let exe10 = myarray[9];;



function generarRnds(){
	for (i = 0; i  < 100; i++) {
		rnd = Math.floor(Math.random() * 10);
		//console.log(rnd);
			if (rnd != myarray[0] && rnd != myarray[1] && rnd != myarray[2] && rnd != myarray[3] && rnd != myarray[4] && rnd != myarray[5] && rnd != myarray[6] && rnd != myarray[7] && rnd != myarray[8] && rnd != myarray[9] && rnd != myarray[10] && myarray.length < 10) {
				myarray.push(rnd);
			}
	}
}
	generarRnds();
console.log(myarray);

ExcerciseNo = myarray[RandomExNo];
currentex = (ExUnits+' '+ExType+' '+ExcerciseNo);


let getExcercise = document.querySelector(".ogchange");
let getBotEnd = document.querySelector(".ogbot");
let removeButton = document.querySelector(".ogcentered3");
function Ordenar(){

	if (ExType == 3) {
			if (ExcerciseNo == 0) {

		getExcercise.innerHTML =     '<div class="ogcentered"><h4 class="ogtitle2">NEAR</h4></div>'+
									'<h4 id="ogtext">'+NoOrden+'. <button class="ogspace3">?</button> is my notebook.</h4>'+
										'<div class="ogcentered2">'+
										'<div class="ogbox4"><button onclick="pressButton1();" id="abutton" class="fluid ui button">This</button></div>'+
										'<div class="ogbox4"><button onclick="pressButton2();" id="anbutton"class="fluid ui button">These</button></div>'+
										'<br>'+
										'<div class="ogbox5"><button onclick="pressButton3();" id="abutton2" class="fluid ui button">That</button></div>'+
										'<div class="ogbox5"><button onclick="pressButton4();" id="anbutton2"class="fluid ui button">Those</button></div>'+
										
									'</div>';

	}
	if (ExcerciseNo == 1) {

		getExcercise.innerHTML =     '<div class="ogcentered"><h4 class="ogtitle2">NEAR</h4></div>'+
									'<h4 id="ogtext">'+NoOrden+'. <button class="ogspace3">?</button> are my shoes.</h4>'+
										'<div class="ogcentered2">'+
										'<div class="ogbox4"><button onclick="pressButton1();" id="abutton" class="fluid ui button">This</button></div>'+
										'<div class="ogbox4"><button onclick="pressButton2();" id="anbutton"class="fluid ui button">These</button></div>'+
										'<br>'+
										'<div class="ogbox5"><button onclick="pressButton3();" id="abutton2" class="fluid ui button">That</button></div>'+
										'<div class="ogbox5"><button onclick="pressButton4();" id="anbutton2"class="fluid ui button">Those</button></div>'+
										
									'</div>';
	}
	if (ExcerciseNo == 2) {

		getExcercise.innerHTML =     '<div class="ogcentered"><h4 class="ogtitle2">NEAR</h4></div>'+
									'<h4 id="ogtext">'+NoOrden+'. <button class="ogspace3">?</button> is my pen.</h4>'+
										'<div class="ogcentered2">'+
										'<div class="ogbox4"><button onclick="pressButton1();" id="abutton" class="fluid ui button">This</button></div>'+
										'<div class="ogbox4"><button onclick="pressButton2();" id="anbutton"class="fluid ui button">These</button></div>'+
										'<br>'+
										'<div class="ogbox5"><button onclick="pressButton3();" id="abutton2" class="fluid ui button">That</button></div>'+
										'<div class="ogbox5"><button onclick="pressButton4();" id="anbutton2"class="fluid ui button">Those</button></div>'+
										
									'</div>';
	}
	if (ExcerciseNo == 3) {

		getExcercise.innerHTML =     '<div class="ogcentered"><h4 class="ogtitle2">NEAR</h4></div>'+
									'<h4 id="ogtext">'+NoOrden+'. <button class="ogspace3">?</button> are my books.</h4>'+
										'<div class="ogcentered2">'+
										'<div class="ogbox4"><button onclick="pressButton1();" id="abutton" class="fluid ui button">This</button></div>'+
										'<div class="ogbox4"><button onclick="pressButton2();" id="anbutton"class="fluid ui button">These</button></div>'+
										'<br>'+
										'<div class="ogbox5"><button onclick="pressButton3();" id="abutton2" class="fluid ui button">That</button></div>'+
										'<div class="ogbox5"><button onclick="pressButton4();" id="anbutton2"class="fluid ui button">Those</button></div>'+
										
									'</div>';
	}
	if (ExcerciseNo == 4) {

		getExcercise.innerHTML =     '<div class="ogcentered"><h4 class="ogtitle2">NEAR</h4></div>'+
									'<h4 id="ogtext">'+NoOrden+'. <button class="ogspace3">?</button> is my brother.</h4>'+
										'<div class="ogcentered2">'+
										'<div class="ogbox4"><button onclick="pressButton1();" id="abutton" class="fluid ui button">This</button></div>'+
										'<div class="ogbox4"><button onclick="pressButton2();" id="anbutton"class="fluid ui button">These</button></div>'+
										'<br>'+
										'<div class="ogbox5"><button onclick="pressButton3();" id="abutton2" class="fluid ui button">That</button></div>'+
										'<div class="ogbox5"><button onclick="pressButton4();" id="anbutton2"class="fluid ui button">Those</button></div>'+
										
									'</div>';
	}
	if (ExcerciseNo == 5) {

		getExcercise.innerHTML =     '<div class="ogcentered"><h4 class="ogtitle2">FAR</h4></div>'+
									'<h4 id="ogtext">'+NoOrden+'. <button class="ogspace3">?</button> are my neigbors.</h4>'+
										'<div class="ogcentered2">'+
										'<div class="ogbox4"><button onclick="pressButton1();" id="abutton" class="fluid ui button">This</button></div>'+
										'<div class="ogbox4"><button onclick="pressButton2();" id="anbutton"class="fluid ui button">These</button></div>'+
										'<br>'+
										'<div class="ogbox5"><button onclick="pressButton3();" id="abutton2" class="fluid ui button">That</button></div>'+
										'<div class="ogbox5"><button onclick="pressButton4();" id="anbutton2"class="fluid ui button">Those</button></div>'+
										
									'</div>';
	}
	if (ExcerciseNo == 6) {

		getExcercise.innerHTML =     '<div class="ogcentered"><h4 class="ogtitle2">FAR</h4></div>'+
									'<h4 id="ogtext">'+NoOrden+'. <button class="ogspace3">?</button> is my pet.</h4>'+
										'<div class="ogcentered2">'+
										'<div class="ogbox4"><button onclick="pressButton1();" id="abutton" class="fluid ui button">This</button></div>'+
										'<div class="ogbox4"><button onclick="pressButton2();" id="anbutton"class="fluid ui button">These</button></div>'+
										'<br>'+
										'<div class="ogbox5"><button onclick="pressButton3();" id="abutton2" class="fluid ui button">That</button></div>'+
										'<div class="ogbox5"><button onclick="pressButton4();" id="anbutton2"class="fluid ui button">Those</button></div>'+
										
									'</div>';
	}
	if (ExcerciseNo == 7) {

		getExcercise.innerHTML =     '<div class="ogcentered"><h4 class="ogtitle2">FAR</h4></div>'+
									'<h4 id="ogtext">'+NoOrden+'. <button class="ogspace3">?</button> is my car.</h4>'+
										'<div class="ogcentered2">'+
										'<div class="ogbox4"><button onclick="pressButton1();" id="abutton" class="fluid ui button">This</button></div>'+
										'<div class="ogbox4"><button onclick="pressButton2();" id="anbutton"class="fluid ui button">These</button></div>'+
										'<br>'+
										'<div class="ogbox5"><button onclick="pressButton3();" id="abutton2" class="fluid ui button">That</button></div>'+
										'<div class="ogbox5"><button onclick="pressButton4();" id="anbutton2"class="fluid ui button">Those</button></div>'+
										
									'</div>';
	}
	if (ExcerciseNo == 8) {

		getExcercise.innerHTML =     '<div class="ogcentered"><h4 class="ogtitle2">FAR</h4></div>'+
									'<h4 id="ogtext">'+NoOrden+'. <button class="ogspace3">?</button> are my toys.</h4>'+
										'<div class="ogcentered2">'+
										'<div class="ogbox4"><button onclick="pressButton1();" id="abutton" class="fluid ui button">This</button></div>'+
										'<div class="ogbox4"><button onclick="pressButton2();" id="anbutton"class="fluid ui button">These</button></div>'+
										'<br>'+
										'<div class="ogbox5"><button onclick="pressButton3();" id="abutton2" class="fluid ui button">That</button></div>'+
										'<div class="ogbox5"><button onclick="pressButton4();" id="anbutton2"class="fluid ui button">Those</button></div>'+
										
									'</div>';
	}
	if (ExcerciseNo == 9) {

		getExcercise.innerHTML =     '<div class="ogcentered"><h4 class="ogtitle2">FAR</h4></div>'+
									'<h4 id="ogtext">'+NoOrden+'. <button class="ogspace3">?</button> is my cousin Peter.</h4>'+
										'<div class="ogcentered2">'+
										'<div class="ogbox4"><button onclick="pressButton1();" id="abutton" class="fluid ui button">This</button></div>'+
										'<div class="ogbox4"><button onclick="pressButton2();" id="anbutton"class="fluid ui button">These</button></div>'+
										'<br>'+
										'<div class="ogbox5"><button onclick="pressButton3();" id="abutton2" class="fluid ui button">That</button></div>'+
										'<div class="ogbox5"><button onclick="pressButton4();" id="anbutton2"class="fluid ui button">Those</button></div>'+
										
									'</div>';
	}

	if (ExcerciseNo == 10) {

		console.log(listaderespuestas);

		getExcercise.innerHTML =   '<div><img class="oggreenred" src="imgs/'+listadecorrects[0]+'.png"> <p class="oganswer"> 1. '+listaderespuestas[0]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[1]+'.png"> <p class="oganswer"> 2. '+listaderespuestas[1]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[2]+'.png"> <p class="oganswer"> 3. '+listaderespuestas[2]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[3]+'.png"> <p class="oganswer"> 4. '+listaderespuestas[3]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[4]+'.png"> <p class="oganswer"> 5. '+listaderespuestas[4]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[5]+'.png"> <p class="oganswer"> 6. '+listaderespuestas[5]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[6]+'.png"> <p class="oganswer"> 7. '+listaderespuestas[6]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[7]+'.png"> <p class="oganswer"> 8. '+listaderespuestas[7]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[8]+'.png"> <p class="oganswer"> 9. '+listaderespuestas[8]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[9]+'.png"> <p class="oganswer"> 10. '+listaderespuestas[9]+'</p> </div>';

								

	}
				if (ExcerciseNo == 10) {
							getBotEnd.innerHTML =	'<div onclick="newType();">'+
													'<div class="ogendcont">'+
														'<img class="ogendimg" src="imgs2/actividades/resultado-01.png">'+
													'</div>'+
													'<div class="ogendcont2">'+
														'<img class="ogendimg" src="imgs2/actividades/resultado-02.png">'+
													'</div>'+
													'<div class="ogendtext">'+
														'<h2>'+numerodecorrectas+'/10</h2>'+
														'<h3>Frase motivadora</h3>'+
													'</div>'+
													'</div>';


					removeButton.innerHTML = '';
					}
					else {

					getBotEnd.innerHTML =	'';
					removeButton.innerHTML = '<div class="ogbox3"><button id="ogdiss2" onclick="nextExercise3();" class="fluid ui blue disabled button">Next</button></div>';
					}
	}



	if (ExType == 1) {

		if (ExcerciseNo == 0) {
					getExcercise.innerHTML =   '<h4 id="ogtext">'+NoOrden+'. They <button class="ogspace3">?</button> absent today.</h4>'+
														'<div class="ogcentered2">'+
														'<div class="ogbox4"><button onclick="press2Button1();" id="abutton" class="fluid ui button">is</button></div>'+
														'<div class="ogbox4"><button onclick="press2Button2();" id="anbutton"class="fluid ui button">are</button></div>'+
													'</div>';
		}

		if (ExcerciseNo == 1) {
					getExcercise.innerHTML =    '<h4 id="ogtext">'+NoOrden+'. The door <button class="ogspace3">?</button> open.</h4>'+
														'<div class="ogcentered2">'+
														'<div class="ogbox4"><button onclick="press2Button1();" id="abutton" class="fluid ui button">is</button></div>'+
														'<div class="ogbox4"><button onclick="press2Button2();" id="anbutton"class="fluid ui button">are</button></div>'+
													'</div>';
		}

		if (ExcerciseNo == 2) {
					getExcercise.innerHTML =     '<h4 id="ogtext">'+NoOrden+'. You <button class="ogspace3">?</button> in the city.</h4>'+
														'<div class="ogcentered2">'+
														'<div class="ogbox4"><button onclick="press2Button1();" id="abutton" class="fluid ui button">is</button></div>'+
														'<div class="ogbox4"><button onclick="press2Button2();" id="anbutton"class="fluid ui button">are</button></div>'+
													'</div>';
		}
		if (ExcerciseNo == 3) {
					getExcercise.innerHTML =    '<h4 id="ogtext">'+NoOrden+'. They <button class="ogspace3">?</button> parents.</h4>'+
														'<div class="ogcentered2">'+
														'<div class="ogbox4"><button onclick="press2Button1();" id="abutton" class="fluid ui button">am</button></div>'+
														'<div class="ogbox4"><button onclick="press2Button2();" id="anbutton"class="fluid ui button">are</button></div>'+
													'</div>';
		}
		if (ExcerciseNo == 4) {
					getExcercise.innerHTML =     '<h4 id="ogtext">'+NoOrden+'. Katy and John <button class="ogspace3">?</button> cousins.</h4>'+
														'<div class="ogcentered2">'+
														'<div class="ogbox4"><button onclick="press2Button1();" id="abutton" class="fluid ui button">am</button></div>'+
														'<div class="ogbox4"><button onclick="press2Button2();" id="anbutton"class="fluid ui button">are</button></div>'+
													'</div>';
		}

		if (ExcerciseNo == 5) {
					getExcercise.innerHTML =    '<h4 id="ogtext">'+NoOrden+'. William and Robert <button class="ogspace3">?</button> good policemen.</h4>'+
														'<div class="ogcentered2">'+
														'<div class="ogbox4"><button onclick="press2Button1();" id="abutton" class="fluid ui button">is</button></div>'+
														'<div class="ogbox4"><button onclick="press2Button2();" id="anbutton"class="fluid ui button">are</button></div>'+
													'</div>';
		}

		if (ExcerciseNo == 6) {
					getExcercise.innerHTML =     '<h4 id="ogtext">'+NoOrden+'. I <button class="ogspace3">?</button> your uncle.</h4>'+
														'<div class="ogcentered2">'+
														'<div class="ogbox4"><button onclick="press2Button1();" id="abutton" class="fluid ui button">is</button></div>'+
														'<div class="ogbox4"><button onclick="press2Button2();" id="anbutton"class="fluid ui button">am</button></div>'+
													'</div>';
		}
		if (ExcerciseNo == 7) {
					getExcercise.innerHTML =    '<h4 id="ogtext">'+NoOrden+'. Miss Johnson <button class="ogspace3">?</button> a terrific teacher.</h4>'+
														'<div class="ogcentered2">'+
														'<div class="ogbox4"><button onclick="press2Button1();" id="abutton" class="fluid ui button">is</button></div>'+
														'<div class="ogbox4"><button onclick="press2Button2();" id="anbutton"class="fluid ui button">are</button></div>'+
													'</div>';
		}
		if (ExcerciseNo == 8) {
					getExcercise.innerHTML =     '<h4 id="ogtext">'+NoOrden+'. The chair <button class="ogspace3">?</button> red.</h4>'+
														'<div class="ogcentered2">'+
														'<div class="ogbox4"><button onclick="press2Button1();" id="abutton" class="fluid ui button">is</button></div>'+
														'<div class="ogbox4"><button onclick="press2Button2();" id="anbutton"class="fluid ui button">are</button></div>'+
													'</div>';
		}
		if (ExcerciseNo == 9) {
					getExcercise.innerHTML =    '<h4 id="ogtext">'+NoOrden+'. It <button class="ogspace3">?</button> a good book.</h4>'+
														'<div class="ogcentered2">'+
														'<div class="ogbox4"><button onclick="press2Button1();" id="abutton" class="fluid ui button">is</button></div>'+
														'<div class="ogbox4"><button onclick="press2Button2();" id="anbutton"class="fluid ui button">are</button></div>'+
													'</div>';
		}
		if (ExcerciseNo == 10) {

		console.log(listaderespuestas);

		getExcercise.innerHTML =   '<div><img class="oggreenred" src="imgs/'+listadecorrects[0]+'.png"> <p class="oganswer"> 1. '+listaderespuestas[0]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[1]+'.png"> <p class="oganswer"> 2. '+listaderespuestas[1]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[2]+'.png"> <p class="oganswer"> 3. '+listaderespuestas[2]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[3]+'.png"> <p class="oganswer"> 4. '+listaderespuestas[3]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[4]+'.png"> <p class="oganswer"> 5. '+listaderespuestas[4]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[5]+'.png"> <p class="oganswer"> 6. '+listaderespuestas[5]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[6]+'.png"> <p class="oganswer"> 7. '+listaderespuestas[6]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[7]+'.png"> <p class="oganswer"> 8. '+listaderespuestas[7]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[8]+'.png"> <p class="oganswer"> 9. '+listaderespuestas[8]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[9]+'.png"> <p class="oganswer"> 10. '+listaderespuestas[9]+'</p> </div>';
								

	}

	if (ExcerciseNo == 10) {
							getBotEnd.innerHTML =	'<div onclick="newType();">'+
													'<div class="ogendcont">'+
														'<img class="ogendimg" src="imgs2/actividades/resultado-01.png">'+
													'</div>'+
													'<div class="ogendcont2">'+
														'<img class="ogendimg" src="imgs2/actividades/resultado-02.png">'+
													'</div>'+
													'<div class="ogendtext">'+
														'<h2>'+numerodecorrectas+'/10</h2>'+
														'<h3>Frase motivadora</h3>'+
													'</div>'+
													'</div>';


					removeButton.innerHTML = '';
					}
					else {

					getBotEnd.innerHTML =	'';
					removeButton.innerHTML = '<div class="ogbox3"><button id="ogdiss2" onclick="nextExercise3();" class="fluid ui blue disabled button">Next</button></div>';
					}



	}

	if (ExType == 2) {
		if (ExcerciseNo == 0) {
			getExcercise.innerHTML =    '<h4 id="ogtext">'+NoOrden+'. There is <button class="ogspace2">?</button> eraser on the desk.</h4>'+
														'<div class="ogcentered2">'+
														'<div class="ogbox6"><button onclick="press3Button1();" id="abutton" class="fluid ui button">a</button></div>'+
														'<div class="ogbox6"><button onclick="press3Button2();" id="anbutton"class="fluid ui button">an</button></div>'+
														'<div class="ogbox6"><button onclick="press3Button3();" id="abutton2"class="fluid ui button">the</button></div>'+
													'</div>';
		}
		if (ExcerciseNo == 1) {
			getExcercise.innerHTML =    '<h4 id="ogtext">'+NoOrden+'. <button class="ogspace2">?</button> English book is on <button class="ogspace4">?</button> table.</h4>'+
														'<div class="ogcentered2">'+
														'<div class="ogbox6"><button onclick="press3Button1();" id="abutton" class="fluid ui button">a</button></div>'+
														'<div class="ogbox6"><button onclick="press3Button2();" id="anbutton"class="fluid ui button">an</button></div>'+
														'<div class="ogbox6"><button onclick="press3Button3();" id="abutton2"class="fluid ui button">the</button></div>'+
													'</div>';
		}
		if (ExcerciseNo == 2) {
			getExcercise.innerHTML =    '<h4 id="ogtext">'+NoOrden+'. <button class="ogspace2">?</button> children are in <button class="ogspace4">?</button> yard.</h4>'+
														'<div class="ogcentered2">'+
														'<div class="ogbox6"><button onclick="press3Button1();" id="abutton" class="fluid ui button">a</button></div>'+
														'<div class="ogbox6"><button onclick="press3Button2();" id="anbutton"class="fluid ui button">an</button></div>'+
														'<div class="ogbox6"><button onclick="press3Button3();" id="abutton2"class="fluid ui button">the</button></div>'+
													'</div>';
		}
		if (ExcerciseNo == 3) {
			getExcercise.innerHTML =     '<h4 id="ogtext">'+NoOrden+'. There is <button class="ogspace2">?</button> pen on <button class="ogspace4">?</button> counter.</h4>'+
														'<div class="ogcentered2">'+
														'<div class="ogbox6"><button onclick="press3Button1();" id="abutton" class="fluid ui button">a</button></div>'+
														'<div class="ogbox6"><button onclick="press3Button2();" id="anbutton"class="fluid ui button">an</button></div>'+
														'<div class="ogbox6"><button onclick="press3Button3();" id="abutton2"class="fluid ui button">the</button></div>'+
													'</div>';
		}
		if (ExcerciseNo == 4) {
			getExcercise.innerHTML =    '<h4 id="ogtext">'+NoOrden+'. <button class="ogspace2">?</button> tree is green.</h4>'+
														'<div class="ogcentered2">'+
														'<div class="ogbox6"><button onclick="press3Button1();" id="abutton" class="fluid ui button">a</button></div>'+
														'<div class="ogbox6"><button onclick="press3Button2();" id="anbutton"class="fluid ui button">an</button></div>'+
														'<div class="ogbox6"><button onclick="press3Button3();" id="abutton2"class="fluid ui button">the</button></div>'+
													'</div>';
		}
		if (ExcerciseNo == 5) {
			getExcercise.innerHTML =    '<h4 id="ogtext">'+NoOrden+'. Are you in <button class="ogspace2">?</button> living room?</h4>'+
														'<div class="ogcentered2">'+
														'<div class="ogbox6"><button onclick="press3Button1();" id="abutton" class="fluid ui button">a</button></div>'+
														'<div class="ogbox6"><button onclick="press3Button2();" id="anbutton"class="fluid ui button">an</button></div>'+
														'<div class="ogbox6"><button onclick="press3Button3();" id="abutton2"class="fluid ui button">the</button></div>'+
													'</div>';
		}
		if (ExcerciseNo == 6) {
			getExcercise.innerHTML =     '<h4 id="ogtext">'+NoOrden+'. There is <button class="ogspace2">?</button> dress on <button class="ogspace4">?</button> bed.</h4>'+
														'<div class="ogcentered2">'+
														'<div class="ogbox6"><button onclick="press3Button1();" id="abutton" class="fluid ui button">a</button></div>'+
														'<div class="ogbox6"><button onclick="press3Button2();" id="anbutton"class="fluid ui button">an</button></div>'+
														'<div class="ogbox6"><button onclick="press3Button3();" id="abutton2"class="fluid ui button">the</button></div>'+
													'</div>';
		}
		if (ExcerciseNo == 7) {
			getExcercise.innerHTML =     '<h4 id="ogtext">'+NoOrden+'. <button class="ogspace2">?</button> baby is in <button class="ogspace4">?</button> room.</h4>'+
														'<div class="ogcentered2">'+
														'<div class="ogbox6"><button onclick="press3Button1();" id="abutton" class="fluid ui button">a</button></div>'+
														'<div class="ogbox6"><button onclick="press3Button2();" id="anbutton"class="fluid ui button">an</button></div>'+
														'<div class="ogbox6"><button onclick="press3Button3();" id="abutton2"class="fluid ui button">the</button></div>'+
													'</div>';
		}
		if (ExcerciseNo == 8) {
			getExcercise.innerHTML =    '<h4 id="ogtext">'+NoOrden+'. That is <button class="ogspace2">?</button> beautiful car.</h4>'+
														'<div class="ogcentered2">'+
														'<div class="ogbox6"><button onclick="press3Button1();" id="abutton" class="fluid ui button">a</button></div>'+
														'<div class="ogbox6"><button onclick="press3Button2();" id="anbutton"class="fluid ui button">an</button></div>'+
														'<div class="ogbox6"><button onclick="press3Button3();" id="abutton2"class="fluid ui button">the</button></div>'+
													'</div>';
		}
		if (ExcerciseNo == 9) {
			getExcercise.innerHTML =    '<h4 id="ogtext">'+NoOrden+'. <button class="ogspace2">?</button> house is big.</h4>'+
														'<div class="ogcentered2">'+
														'<div class="ogbox6"><button onclick="press3Button1();" id="abutton" class="fluid ui button">a</button></div>'+
														'<div class="ogbox6"><button onclick="press3Button2();" id="anbutton"class="fluid ui button">an</button></div>'+
														'<div class="ogbox6"><button onclick="press3Button3();" id="abutton2"class="fluid ui button">the</button></div>'+
													'</div>';
		}
		if (ExcerciseNo == 10) {

		console.log(listaderespuestas);

		getExcercise.innerHTML =   '<div><img class="oggreenred" src="imgs/'+listadecorrects[0]+'.png"> <p class="oganswer"> 1. '+listaderespuestas[0]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[1]+'.png"> <p class="oganswer"> 2. '+listaderespuestas[1]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[2]+'.png"> <p class="oganswer"> 3. '+listaderespuestas[2]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[3]+'.png"> <p class="oganswer"> 4. '+listaderespuestas[3]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[4]+'.png"> <p class="oganswer"> 5. '+listaderespuestas[4]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[5]+'.png"> <p class="oganswer"> 6. '+listaderespuestas[5]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[6]+'.png"> <p class="oganswer"> 7. '+listaderespuestas[6]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[7]+'.png"> <p class="oganswer"> 8. '+listaderespuestas[7]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[8]+'.png"> <p class="oganswer"> 9. '+listaderespuestas[8]+'</p> </div>'+
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[9]+'.png"> <p class="oganswer"> 10. '+listaderespuestas[9]+'</p> </div>';
								

	}
	if (ExcerciseNo == 10) {
							getBotEnd.innerHTML =	'<div onclick="newType();">'+
													'<div class="ogendcont">'+
														'<img class="ogendimg" src="imgs2/actividades/resultado-01.png">'+
													'</div>'+
													'<div class="ogendcont2">'+
														'<img class="ogendimg" src="imgs2/actividades/resultado-02.png">'+
													'</div>'+
													'<div class="ogendtext">'+
														'<h2>'+numerodecorrectas+'/10</h2>'+
														'<h3>Frase motivadora</h3>'+
													'</div>'+
													'</div>';


					removeButton.innerHTML = '';
					}
					else {

					getBotEnd.innerHTML =	'';
					removeButton.innerHTML = '<div class="ogbox3"><button id="ogdiss2" onclick="nextExercise3();" class="fluid ui blue disabled button">Next</button></div>';
					}
			
		
		
	}

}
Calculate();

let listaderespuestas = [];
let listadecorrects = [];
let numerodecorrectas = 0;
let answers1 = "aylmao";


function nextExercise3(){

currentlista = ('unit'+ExUnits+'answers1');
currentlista = ('unit'+ExUnits+'answers2');
console.log("c lista   "+currentlista);

if (ExType == 3) {
	if (ExcerciseNo == 0) {
		arrayRespuestas.push(ExcerciseAnswer3);
		console.log("el array "+arrayRespuestas);
		answer1 = "This is my notebook.";
		listaderespuestas.push(answer1);
		if (ExcerciseAnswer3 == "This") {
			correct1 = true;
			listadecorrects.push(correct1);
			numerodecorrectas = numerodecorrectas+1;
			
			console.log(answer1);
		}
		else{
			correct1 = false;
			listadecorrects.push(correct1);
			
		}

		console.log("ex1"+correct1);
}

if (ExcerciseNo == 1) {
		arrayRespuestas.push(ExcerciseAnswer3);
		console.log("el array "+arrayRespuestas);
		answer2 = "These are my shoes.";
		listaderespuestas.push(answer2);
		if (ExcerciseAnswer3 == "These") {
			correct2 = true;
			listadecorrects.push(correct2);
			numerodecorrectas = numerodecorrectas+1;
		}
		else{
			correct2 = false;
			listadecorrects.push(correct2);
		}

		console.log("ex1"+correct1);
}

if (ExcerciseNo == 2) {
		arrayRespuestas.push(ExcerciseAnswer3);
		console.log("el array "+arrayRespuestas);
		answer3 = "This is my pen.";
		listaderespuestas.push(answer3);
		if (ExcerciseAnswer3 == "This") {
			correct3 = true;
			listadecorrects.push(correct3);
			numerodecorrectas = numerodecorrectas+1;
		}
		else{
			correct3 = false;
			listadecorrects.push(correct3);
		}

		console.log("ex1"+correct1);
}
if (ExcerciseNo == 3) {
		arrayRespuestas.push(ExcerciseAnswer3);
		console.log("el array "+arrayRespuestas);
		answer4 = "These are my books.";
		listaderespuestas.push(answer4);
		if (ExcerciseAnswer3 == "These") {
			correct4 = true;
			listadecorrects.push(correct4);
			numerodecorrectas = numerodecorrectas+1;
		}
		else{
			correct4 = false;
			listadecorrects.push(correct4);
		}

		console.log("ex1"+correct1);
}

if (ExcerciseNo == 4) {
		arrayRespuestas.push(ExcerciseAnswer3);
		console.log("el array "+arrayRespuestas);
		answer5 = "This is my brother.";
		listaderespuestas.push(answer5);
		if (ExcerciseAnswer3 == "This") {
			correct5 = true;
			listadecorrects.push(correct5);
			numerodecorrectas = numerodecorrectas+1;
		}
		else{
			correct5 = false;
			listadecorrects.push(correct5);
		}

		console.log("ex1"+correct1);
}

if (ExcerciseNo == 5) {
		arrayRespuestas.push(ExcerciseAnswer3);
		console.log("el array "+arrayRespuestas);
		answer6 = "Those are my neigbors.";
		listaderespuestas.push(answer6);
		if (ExcerciseAnswer3 == "Those") {
			correct6 = true;
			listadecorrects.push(correct6);
			numerodecorrectas = numerodecorrectas+1;
		}
		else{
			correct6 = false;
			listadecorrects.push(correct6);
		}

		console.log("ex1"+correct1);
}

if (ExcerciseNo == 6) {
		arrayRespuestas.push(ExcerciseAnswer3);
		console.log("el array "+arrayRespuestas);
		answer7 = "That is my pet.";
		listaderespuestas.push(answer7);
		if (ExcerciseAnswer3 == "That") {
			correct7 = true;
			listadecorrects.push(correct7);
			numerodecorrectas = numerodecorrectas+1;
		}
		else{
			correct7 = false;
			listadecorrects.push(correct7);
		}

		console.log("ex1"+correct1);
}
if (ExcerciseNo == 7) {
		arrayRespuestas.push(ExcerciseAnswer3);
		console.log("el array "+arrayRespuestas);
		answer8 = "That is my car.";
		listaderespuestas.push(answer8);
		if (ExcerciseAnswer3 == "That") {
			correct8 = true;
			listadecorrects.push(correct8);
			numerodecorrectas = numerodecorrectas+1;
		}
		else{
			correct8 = false;
			listadecorrects.push(correct8);
		}

		console.log("ex1"+correct1);
}

if (ExcerciseNo == 8) {
		arrayRespuestas.push(ExcerciseAnswer3);
		console.log("el array "+arrayRespuestas);
		answer9 = "Those are my toys.";
		listaderespuestas.push(answer9);
		if (ExcerciseAnswer3 == "Those") {
			correct9 = true;
			listadecorrects.push(correct9);
			numerodecorrectas = numerodecorrectas+1;
		}
		else{
			correct9 = false;
			listadecorrects.push(correct9);
		}

		console.log("ex1"+correct1);
}

if (ExcerciseNo == 9) {
		arrayRespuestas.push(ExcerciseAnswer3);
		console.log("el array "+arrayRespuestas);
		answer10 = "That is my cousin Peter.";
		listaderespuestas.push(answer10);
		if (ExcerciseAnswer3 == "That") {
			correct10 = true;
			listadecorrects.push(correct10);
			numerodecorrectas = numerodecorrectas+1;
		}
		else{
			correct10 = false;
			listadecorrects.push(correct10);
		}

		console.log("ex1"+correct1);
}
}

// if (ExType == 1) {
// 		if (ExcerciseNo == 0) {
// 		arrayRespuestas.push(ExcerciseAnswer3);
// 		console.log("el array "+arrayRespuestas);
// 		answer1 = "They are absent today.";
// 		listaderespuestas.push(answer1);
// 		if (ExcerciseAnswer3 == "are") {
// 			correct1 = true;
// 			listadecorrects.push(correct1);
// 			numerodecorrectas = numerodecorrectas+1;
			
// 			console.log(answer1);
// 		}
// 		else{
// 			correct1 = false;
// 			listadecorrects.push(correct1);
			
// 		}

// 		console.log("ex1"+correct1);
// 	}
// 	if (ExcerciseNo == 1) {
// 		arrayRespuestas.push(ExcerciseAnswer3);
// 		console.log("el array "+arrayRespuestas);
// 		answer1 = "The door is open.";
// 		listaderespuestas.push(answer1);
// 		if (ExcerciseAnswer3 == "is") {
// 			correct1 = true;
// 			listadecorrects.push(correct1);
// 			numerodecorrectas = numerodecorrectas+1;
			
// 			console.log(answer1);
// 		}
// 		else{
// 			correct1 = false;
// 			listadecorrects.push(correct1);
			
// 		}

// 		console.log("ex1"+correct1);
// 	}
// 	if (ExcerciseNo == 2) {
// 		arrayRespuestas.push(ExcerciseAnswer3);
// 		console.log("el array "+arrayRespuestas);
// 		answer1 = "You are in the city.";
// 		listaderespuestas.push(answer1);
// 		if (ExcerciseAnswer3 == "are") {
// 			correct1 = true;
// 			listadecorrects.push(correct1);
// 			numerodecorrectas = numerodecorrectas+1;
			
// 			console.log(answer1);
// 		}
// 		else{
// 			correct1 = false;
// 			listadecorrects.push(correct1);
			
// 		}

// 		console.log("ex1"+correct1);
// 	}
// 	if (ExcerciseNo == 3) {
// 		arrayRespuestas.push(ExcerciseAnswer3);
// 		console.log("el array "+arrayRespuestas);
// 		answer1 = "They are my parents.";
// 		listaderespuestas.push(answer1);
// 		if (ExcerciseAnswer3 == "are") {
// 			correct1 = true;
// 			listadecorrects.push(correct1);
// 			numerodecorrectas = numerodecorrectas+1;
			
// 			console.log(answer1);
// 		}
// 		else{
// 			correct1 = false;
// 			listadecorrects.push(correct1);
			
// 		}

// 		console.log("ex1"+correct1);
// 	}
// 	if (ExcerciseNo == 4) {
// 		arrayRespuestas.push(ExcerciseAnswer3);
// 		console.log("el array "+arrayRespuestas);
// 		answer1 = "Katy and John are cousins.";
// 		listaderespuestas.push(answer1);
// 		if (ExcerciseAnswer3 == "are") {
// 			correct1 = true;
// 			listadecorrects.push(correct1);
// 			numerodecorrectas = numerodecorrectas+1;
			
// 			console.log(answer1);
// 		}
// 		else{
// 			correct1 = false;
// 			listadecorrects.push(correct1);
			
// 		}

// 		console.log("ex1"+correct1);
// 	}
// 	if (ExcerciseNo == 5) {
// 		arrayRespuestas.push(ExcerciseAnswer3);
// 		console.log("el array "+arrayRespuestas);
// 		answer1 = "William and Robert are good policemen.";
// 		listaderespuestas.push(answer1);
// 		if (ExcerciseAnswer3 == "are") {
// 			correct1 = true;
// 			listadecorrects.push(correct1);
// 			numerodecorrectas = numerodecorrectas+1;
			
// 			console.log(answer1);
// 		}
// 		else{
// 			correct1 = false;
// 			listadecorrects.push(correct1);
			
// 		}

// 		console.log("ex1"+correct1);
// 	}
// 	if (ExcerciseNo == 6) {
// 		arrayRespuestas.push(ExcerciseAnswer3);
// 		console.log("el array "+arrayRespuestas);
// 		answer1 = "I am your uncle.";
// 		listaderespuestas.push(answer1);
// 		if (ExcerciseAnswer3 == "am") {
// 			correct1 = true;
// 			listadecorrects.push(correct1);
// 			numerodecorrectas = numerodecorrectas+1;
			
// 			console.log(answer1);
// 		}
// 		else{
// 			correct1 = false;
// 			listadecorrects.push(correct1);
			
// 		}

// 		console.log("ex1"+correct1);
// 	}
// 	if (ExcerciseNo == 7) {
// 		arrayRespuestas.push(ExcerciseAnswer3);
// 		console.log("el array "+arrayRespuestas);
// 		answer1 = "Miss Johnson is a terrific teacher.";
// 		listaderespuestas.push(answer1);
// 		if (ExcerciseAnswer3 == "is") {
// 			correct1 = true;
// 			listadecorrects.push(correct1);
// 			numerodecorrectas = numerodecorrectas+1;
			
// 			console.log(answer1);
// 		}
// 		else{
// 			correct1 = false;
// 			listadecorrects.push(correct1);
			
// 		}

// 		console.log("ex1"+correct1);
// 	}
// 	if (ExcerciseNo == 8) {
// 		arrayRespuestas.push(ExcerciseAnswer3);
// 		console.log("el array "+arrayRespuestas);
// 		answer1 = "The chair is red.";
// 		listaderespuestas.push(answer1);
// 		if (ExcerciseAnswer3 == "is") {
// 			correct1 = true;
// 			listadecorrects.push(correct1);
// 			numerodecorrectas = numerodecorrectas+1;
			
// 			console.log(answer1);
// 		}
// 		else{
// 			correct1 = false;
// 			listadecorrects.push(correct1);
			
// 		}

// 		console.log("ex1"+correct1);
// 	}
// 	if (ExcerciseNo == 9) {
// 		arrayRespuestas.push(ExcerciseAnswer3);
// 		console.log("el array "+arrayRespuestas);
// 		answer1 = "It is a good book.";
// 		listaderespuestas.push(answer1);
// 		if (ExcerciseAnswer3 == "is") {
// 			correct1 = true;
// 			listadecorrects.push(correct1);
// 			numerodecorrectas = numerodecorrectas+1;
			
// 			console.log(answer1);
// 		}
// 		else{
// 			correct1 = false;
// 			listadecorrects.push(correct1);
			
// 		}

// 		console.log("ex1"+correct1);
// 	}
// }

checkUnit();
if (ExUnits == 1) {currentlista = unit1answers1; currentlista2 = unit1answers2;}

		if (ExGenero == "2r") {
		if (ExcerciseNo == 0) {
			arrayRespuestas.push(ExcerciseAnswer3);
			if (ExType==1) {answer1 = currentlista[1];}
			else if (ExType==2) {answer1 = currentlista[11];}
			listaderespuestas.push(answer1);
			if (ExType==1) {
					if (ExcerciseAnswer3==currentlista2[1]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
			else if (ExType==2) {
				if (ExcerciseAnswer3==currentlista2[11]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
			
		}



		if (ExcerciseNo == 1) {
			arrayRespuestas.push(ExcerciseAnswer3);
			if (ExType==1) {answer2 = currentlista[2];}
			else if (ExType==2) {answer2 = currentlista[12];}
			listaderespuestas.push(answer2);
			if (ExType==1) {
					if (ExcerciseAnswer3==currentlista2[2]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
			else if (ExType==2) {
				if (ExcerciseAnswer3==currentlista2[12]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
		}


		if (ExcerciseNo == 2) {
			arrayRespuestas.push(ExcerciseAnswer3);
			if (ExType==1) {answer3 = currentlista[3];}
			else if (ExType==2) {answer3 = currentlista[13];}
			listaderespuestas.push(answer3);
			if (ExType==1) {
					if (ExcerciseAnswer3==currentlista2[3]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
			else if (ExType==2) {
				if (ExcerciseAnswer3==currentlista2[13]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
		}


		if (ExcerciseNo == 3) {
			arrayRespuestas.push(ExcerciseAnswer3);
			if (ExType==1) {answer4 = currentlista[4];}
			else if (ExType==2) {answer4 = currentlista[14];}
			listaderespuestas.push(answer4);
			if (ExType==1) {
					if (ExcerciseAnswer3==currentlista2[4]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
			else if (ExType==2) {
				if (ExcerciseAnswer3==currentlista2[14]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
		}


		if (ExcerciseNo == 4) {
			arrayRespuestas.push(ExcerciseAnswer3);
			if (ExType==1) {answer5 = currentlista[5];}
			else if (ExType==2) {answer5 = currentlista[15];}
			listaderespuestas.push(answer5);
			if (ExType==1) {
					if (ExcerciseAnswer3==currentlista2[5]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
			else if (ExType==2) {
				if (ExcerciseAnswer3==currentlista2[15]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
		}


		if (ExcerciseNo == 5) {
			arrayRespuestas.push(ExcerciseAnswer3);
			if (ExType==1) {answer6 = currentlista[6];}
			else if (ExType==2) {answer6 = currentlista[16];}
			listaderespuestas.push(answer6);
			if (ExType==1) {
					if (ExcerciseAnswer3==currentlista2[6]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
			else if (ExType==2) {
				if (ExcerciseAnswer3==currentlista2[16]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
		}


		if (ExcerciseNo == 6) {
			arrayRespuestas.push(ExcerciseAnswer3);
			if (ExType==1) {answer7 = currentlista[7];}
			else if (ExType==2) {answer7 = currentlista[17];}
			listaderespuestas.push(answer7);
			if (ExType==1) {
					if (ExcerciseAnswer3==currentlista2[7]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
			else if (ExType==2) {
				if (ExcerciseAnswer3==currentlista2[17]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
		}


		if (ExcerciseNo == 7) {
			arrayRespuestas.push(ExcerciseAnswer3);
			if (ExType==1) {answer8 = currentlista[8];}
			else if (ExType==2) {answer8 = currentlista[18];}
			listaderespuestas.push(answer8);
			if (ExType==1) {
					if (ExcerciseAnswer3==currentlista2[8]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
			else if (ExType==2) {
				if (ExcerciseAnswer3==currentlista2[18]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
		}


		if (ExcerciseNo == 8) {
			arrayRespuestas.push(ExcerciseAnswer3);
			if (ExType==1) {answer9 = currentlista[9];}
			else if (ExType==2) {answer9 = currentlista[19];}
			listaderespuestas.push(answer9);
			if (ExType==1) {
					if (ExcerciseAnswer3==currentlista2[9]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
			else if (ExType==2) {
				if (ExcerciseAnswer3==currentlista2[19]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
		}


		if (ExcerciseNo == 9) {
			arrayRespuestas.push(ExcerciseAnswer3);
			if (ExType==1) {answer10 = currentlista[10];}
			else if (ExType==2) {answer10 = currentlista[20];}
			listaderespuestas.push(answer10);
			if (ExType==1) {
					if (ExcerciseAnswer3==currentlista2[10]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
			else if (ExType==2) {
				if (ExcerciseAnswer3==currentlista2[20]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
		}

	}










if (ExType == 2) {
	if (ExcerciseNo == 0) {
		answer1 = "There is an eraser on the desk.";
		listaderespuestas.push(answer1);

		if (ExcerciseAnswer3 == "an" ) {
			correct1 = true;
			listadecorrects.push(correct1);
			numerodecorrectas = numerodecorrectas+1;
			
			console.log(answer1);
		}
		else{
			correct1 = false;
			listadecorrects.push(correct1);
			
		}

		console.log("ex1"+correct1);
	}
	if (ExcerciseNo == 1) {
		answer1 = "The English book is on the table.";
		listaderespuestas.push(answer1);

		if (ExcerciseAnswer3 == "the" && ExcerciseAnswer4 == "the") {
			correct1 = true;
			listadecorrects.push(correct1);
			numerodecorrectas = numerodecorrectas+1;
			
			console.log(answer1);
		}
		else{
			correct1 = false;
			listadecorrects.push(correct1);
			
		}

	}
	if (ExcerciseNo == 2) {
		answer1 = "The children are in the yard.";
		listaderespuestas.push(answer1);

		if (ExcerciseAnswer3 == "the" && ExcerciseAnswer4 == "the") {
			correct1 = true;
			listadecorrects.push(correct1);
			numerodecorrectas = numerodecorrectas+1;
			
			console.log(answer1);
		}
		else{
			correct1 = false;
			listadecorrects.push(correct1);
			
		}
	}
	if (ExcerciseNo == 3) {
		answer1 = "There is a pen on the counter.";
		listaderespuestas.push(answer1);

		if (ExcerciseAnswer3 == "a" && ExcerciseAnswer4 == "the") {
			correct1 = true;
			listadecorrects.push(correct1);
			numerodecorrectas = numerodecorrectas+1;
			
			console.log(answer1);
		}
		else{
			correct1 = false;
			listadecorrects.push(correct1);
			
		}
	}
	if (ExcerciseNo == 4) {
		answer1 = "The tree is green.";
		listaderespuestas.push(answer1);

		if (ExcerciseAnswer3 == "the") {
			correct1 = true;
			listadecorrects.push(correct1);
			numerodecorrectas = numerodecorrectas+1;
			
			console.log(answer1);
		}
		else{
			correct1 = false;
			listadecorrects.push(correct1);
			
		}
	}
	if (ExcerciseNo == 5) {
		answer1 = "Are you in the living room?";
		listaderespuestas.push(answer1);

		if (ExcerciseAnswer3 == "the") {
			correct1 = true;
			listadecorrects.push(correct1);
			numerodecorrectas = numerodecorrectas+1;
			
			console.log(answer1);
		}
		else{
			correct1 = false;
			listadecorrects.push(correct1);
			
		}
	}
	if (ExcerciseNo == 6) {
		answer1 = "There is a dress on the bed.";
		listaderespuestas.push(answer1);

		if (ExcerciseAnswer3 == "a" && ExcerciseAnswer4 == "the") {
			correct1 = true;
			listadecorrects.push(correct1);
			numerodecorrectas = numerodecorrectas+1;
			
			console.log(answer1);
		}
		else{
			correct1 = false;
			listadecorrects.push(correct1);
			
		}
	}
	if (ExcerciseNo == 7) {
		answer1 = "The baby is in the room.";
		listaderespuestas.push(answer1);

		if (ExcerciseAnswer3 == "the" && ExcerciseAnswer4 == "the") {
			correct1 = true;
			listadecorrects.push(correct1);
			numerodecorrectas = numerodecorrectas+1;
			
			console.log(answer1);
		}
		else{
			correct1 = false;
			listadecorrects.push(correct1);
			
		}
	}
	if (ExcerciseNo == 8) {
		answer1 = "That is a beautiful car.";
		listaderespuestas.push(answer1);

		if (ExcerciseAnswer3 == "a") {
			correct1 = true;
			listadecorrects.push(correct1);
			numerodecorrectas = numerodecorrectas+1;
			
			console.log(answer1);
		}
		else{
			correct1 = false;
			listadecorrects.push(correct1);
			
		}
	}
	if (ExcerciseNo == 9) {
		answer1 = "The house is big.";
		listaderespuestas.push(answer1);

		if (ExcerciseAnswer3 == "the") {
			correct1 = true;
			listadecorrects.push(correct1);
			numerodecorrectas = numerodecorrectas+1;
			
			console.log(answer1);
		}
		else{
			correct1 = false;
			listadecorrects.push(correct1);
			
		}
	}
}




	turno = true;
	isCovered = true;
	coverNext();
	RandomExNo = RandomExNo+1;
	NoOrden = RandomExNo+1;
	ExcerciseNo = myarray[RandomExNo];
	currentex = (ExUnits+' '+ExType+' '+ExcerciseNo);
	console.log("numero ejercicio" + ExcerciseNo);
	console.log("numero random" + RandomExNo);
	console.log(myarray[RandomExNo]);
	let getExcercise = document.querySelector(".ogchange");
	let getBottom = document.querySelector(".ogend");

	let returntogray = document.querySelector("#ogdiss2");


	returntogray.className="fluid ui blue disabled button";
	

	checkDouble();

	if (ExcerciseNo == undefined) {
		ExcerciseNo = 10;
	}
	Calculate();


	


	


}

function newType(){

    ExType = ExType + 1;
	generarRnds();
	RandomExNo = 0;
	NoOrden = RandomExNo+1;
	ExcerciseNo = myarray[RandomExNo];
	currentex = (ExUnits+' '+ExType+' '+ExcerciseNo);
	listadecorrects = [];
	listaderespuestas = [];
	numerodecorrectas = 0;
	Calculate();

}

let turno = true;
let ExcerciseNo = 1;

let RandomExNo = 0;
let NoOrden = RandomExNo+1;
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

function pressButtonThis(){
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

	ExcerciseAnswer3 = "This";
	getSpace3.textContent =ExcerciseAnswer3;

	setTimeout(returnColors, 250);
}


function pressButtonThese(){
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

	ExcerciseAnswer3 = "These";
	getSpace3.textContent =ExcerciseAnswer3;

	setTimeout(returnColors, 250);
}

function pressButtonThat(){
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

	ExcerciseAnswer3 = "That";
	getSpace3.textContent =ExcerciseAnswer3;

	setTimeout(returnColors, 250);
}

function pressButtonThose(){
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

	ExcerciseAnswer3 = "Those";
	getSpace3.textContent =ExcerciseAnswer3;

	setTimeout(returnColors, 250);
}

let arrayRespuestas = [];
function checkAnswerThisThese(){
	let getButton = document.querySelector("#abutton");
	let getButton2 = document.querySelector("#anbutton");
	let getCheck = document.querySelector("#checkAnswerU1");
	


if (ExcerciseNo == 1) {
	if (ExcerciseAnswer3 == "This") {
		console.log("la saco bien");
	}
}

if (ExcerciseNo == 2) {
		if (ExcerciseAnswer3 == "These") {
					arrayRespuestas.push(ExcerciseAnswer3);
		console.log("el array "+arrayRespuestas);
		console.log("ganaste");
		getCheck.className = "fluid ui green button";
		getCheck.textContent ="Correct!";
		getButton.id="lmao";
		getButton2.id="lmao";
		console.log(isCovered);
		isCovered = false;
		coverNext();
		console.log(isCovered);
	} else{
		console.log("incorrecto");
		getCheck.className = "fluid ui red button";
		getCheck.textContent ="Incorrect";
		setTimeout(returnToNormal, 2000);
	}
}

}


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


function checkDouble(){
	if (ExcerciseNo == 2 || ExcerciseNo == 3 || ExcerciseNo == 4 || ExcerciseNo == 7 || ExcerciseNo == 8) {
		doubleAnswer = true;
	}
	else{
		doubleAnswer = false;
	}
	console.log(doubleAnswer);
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

let getExcercise = document.querySelector(".ogchange");
let getBotEnd = document.querySelector(".ogbot");
let removeButton = document.querySelector(".ogcentered3");
function Ordenar(){
	if (ExcerciseNo == 0) {

		getExcercise.innerHTML =     '<div class="ogcentered"><h4 class="ogtitle2">NEAR</h4></div>'+
									'<h4 id="ogtext">'+NoOrden+'. <button class="ogspace3">?</button> is my notebook.</h4>'+
										'<div class="ogcentered2">'+
										'<div class="ogbox4"><button onclick="pressButtonThis();" id="abutton" class="fluid ui button">This</button></div>'+
										'<div class="ogbox4"><button onclick="pressButtonThese();" id="anbutton"class="fluid ui button">These</button></div>'+
										'<br>'+
										'<div class="ogbox5"><button onclick="pressButtonThat();" id="abutton2" class="fluid ui button">That</button></div>'+
										'<div class="ogbox5"><button onclick="pressButtonThose();" id="anbutton2"class="fluid ui button">Those</button></div>'+
										
									'</div>';
	}
	if (ExcerciseNo == 1) {

		getExcercise.innerHTML =     '<div class="ogcentered"><h4 class="ogtitle2">NEAR</h4></div>'+
									'<h4 id="ogtext">'+NoOrden+'. <button class="ogspace3">?</button> are my shoes.</h4>'+
										'<div class="ogcentered2">'+
										'<div class="ogbox4"><button onclick="pressButtonThis();" id="abutton" class="fluid ui button">This</button></div>'+
										'<div class="ogbox4"><button onclick="pressButtonThese();" id="anbutton"class="fluid ui button">These</button></div>'+
										'<br>'+
										'<div class="ogbox5"><button onclick="pressButtonThat();" id="abutton2" class="fluid ui button">That</button></div>'+
										'<div class="ogbox5"><button onclick="pressButtonThose();" id="anbutton2"class="fluid ui button">Those</button></div>'+
										
									'</div>';
	}
	if (ExcerciseNo == 2) {

		getExcercise.innerHTML =     '<div class="ogcentered"><h4 class="ogtitle2">NEAR</h4></div>'+
									'<h4 id="ogtext">'+NoOrden+'. <button class="ogspace3">?</button> is my pen.</h4>'+
										'<div class="ogcentered2">'+
										'<div class="ogbox4"><button onclick="pressButtonThis();" id="abutton" class="fluid ui button">This</button></div>'+
										'<div class="ogbox4"><button onclick="pressButtonThese();" id="anbutton"class="fluid ui button">These</button></div>'+
										'<br>'+
										'<div class="ogbox5"><button onclick="pressButtonThat();" id="abutton2" class="fluid ui button">That</button></div>'+
										'<div class="ogbox5"><button onclick="pressButtonThose();" id="anbutton2"class="fluid ui button">Those</button></div>'+
										
									'</div>';
	}
	if (ExcerciseNo == 3) {

		getExcercise.innerHTML =     '<div class="ogcentered"><h4 class="ogtitle2">NEAR</h4></div>'+
									'<h4 id="ogtext">'+NoOrden+'. <button class="ogspace3">?</button> are my books.</h4>'+
										'<div class="ogcentered2">'+
										'<div class="ogbox4"><button onclick="pressButtonThis();" id="abutton" class="fluid ui button">This</button></div>'+
										'<div class="ogbox4"><button onclick="pressButtonThese();" id="anbutton"class="fluid ui button">These</button></div>'+
										'<br>'+
										'<div class="ogbox5"><button onclick="pressButtonThat();" id="abutton2" class="fluid ui button">That</button></div>'+
										'<div class="ogbox5"><button onclick="pressButtonThose();" id="anbutton2"class="fluid ui button">Those</button></div>'+
										
									'</div>';
	}
	if (ExcerciseNo == 4) {

		getExcercise.innerHTML =     '<div class="ogcentered"><h4 class="ogtitle2">NEAR</h4></div>'+
									'<h4 id="ogtext">'+NoOrden+'. <button class="ogspace3">?</button> is my brother.</h4>'+
										'<div class="ogcentered2">'+
										'<div class="ogbox4"><button onclick="pressButtonThis();" id="abutton" class="fluid ui button">This</button></div>'+
										'<div class="ogbox4"><button onclick="pressButtonThese();" id="anbutton"class="fluid ui button">These</button></div>'+
										'<br>'+
										'<div class="ogbox5"><button onclick="pressButtonThat();" id="abutton2" class="fluid ui button">That</button></div>'+
										'<div class="ogbox5"><button onclick="pressButtonThose();" id="anbutton2"class="fluid ui button">Those</button></div>'+
										
									'</div>';
	}
	if (ExcerciseNo == 5) {

		getExcercise.innerHTML =     '<div class="ogcentered"><h4 class="ogtitle2">FAR</h4></div>'+
									'<h4 id="ogtext">'+NoOrden+'. <button class="ogspace3">?</button> are my neigbors.</h4>'+
										'<div class="ogcentered2">'+
										'<div class="ogbox4"><button onclick="pressButtonThis();" id="abutton" class="fluid ui button">This</button></div>'+
										'<div class="ogbox4"><button onclick="pressButtonThese();" id="anbutton"class="fluid ui button">These</button></div>'+
										'<br>'+
										'<div class="ogbox5"><button onclick="pressButtonThat();" id="abutton2" class="fluid ui button">That</button></div>'+
										'<div class="ogbox5"><button onclick="pressButtonThose();" id="anbutton2"class="fluid ui button">Those</button></div>'+
										
									'</div>';
	}
	if (ExcerciseNo == 6) {

		getExcercise.innerHTML =     '<div class="ogcentered"><h4 class="ogtitle2">FAR</h4></div>'+
									'<h4 id="ogtext">'+NoOrden+'. <button class="ogspace3">?</button> is my pet.</h4>'+
										'<div class="ogcentered2">'+
										'<div class="ogbox4"><button onclick="pressButtonThis();" id="abutton" class="fluid ui button">This</button></div>'+
										'<div class="ogbox4"><button onclick="pressButtonThese();" id="anbutton"class="fluid ui button">These</button></div>'+
										'<br>'+
										'<div class="ogbox5"><button onclick="pressButtonThat();" id="abutton2" class="fluid ui button">That</button></div>'+
										'<div class="ogbox5"><button onclick="pressButtonThose();" id="anbutton2"class="fluid ui button">Those</button></div>'+
										
									'</div>';
	}
	if (ExcerciseNo == 7) {

		getExcercise.innerHTML =     '<div class="ogcentered"><h4 class="ogtitle2">FAR</h4></div>'+
									'<h4 id="ogtext">'+NoOrden+'. <button class="ogspace3">?</button> is my car.</h4>'+
										'<div class="ogcentered2">'+
										'<div class="ogbox4"><button onclick="pressButtonThis();" id="abutton" class="fluid ui button">This</button></div>'+
										'<div class="ogbox4"><button onclick="pressButtonThese();" id="anbutton"class="fluid ui button">These</button></div>'+
										'<br>'+
										'<div class="ogbox5"><button onclick="pressButtonThat();" id="abutton2" class="fluid ui button">That</button></div>'+
										'<div class="ogbox5"><button onclick="pressButtonThose();" id="anbutton2"class="fluid ui button">Those</button></div>'+
										
									'</div>';
	}
	if (ExcerciseNo == 8) {

		getExcercise.innerHTML =     '<div class="ogcentered"><h4 class="ogtitle2">FAR</h4></div>'+
									'<h4 id="ogtext">'+NoOrden+'. <button class="ogspace3">?</button> are my toys.</h4>'+
										'<div class="ogcentered2">'+
										'<div class="ogbox4"><button onclick="pressButtonThis();" id="abutton" class="fluid ui button">This</button></div>'+
										'<div class="ogbox4"><button onclick="pressButtonThese();" id="anbutton"class="fluid ui button">These</button></div>'+
										'<br>'+
										'<div class="ogbox5"><button onclick="pressButtonThat();" id="abutton2" class="fluid ui button">That</button></div>'+
										'<div class="ogbox5"><button onclick="pressButtonThose();" id="anbutton2"class="fluid ui button">Those</button></div>'+
										
									'</div>';
	}
	if (ExcerciseNo == 9) {

		getExcercise.innerHTML =     '<div class="ogcentered"><h4 class="ogtitle2">FAR</h4></div>'+
									'<h4 id="ogtext">'+NoOrden+'. <button class="ogspace3">?</button> is my cousin Peter.</h4>'+
										'<div class="ogcentered2">'+
										'<div class="ogbox4"><button onclick="pressButtonThis();" id="abutton" class="fluid ui button">This</button></div>'+
										'<div class="ogbox4"><button onclick="pressButtonThese();" id="anbutton"class="fluid ui button">These</button></div>'+
										'<br>'+
										'<div class="ogbox5"><button onclick="pressButtonThat();" id="abutton2" class="fluid ui button">That</button></div>'+
										'<div class="ogbox5"><button onclick="pressButtonThose();" id="anbutton2"class="fluid ui button">Those</button></div>'+
										
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

		getBotEnd.innerHTML =	'<div onclick="nextExercise3();">'+
										'<div class="ogendcont">'+
											'<img class="ogendimg" src="imgs2/actividades/resultado-01.png">'+
										'</div>'+
										'<div class="ogendcont2">'+
											'<img class="ogendimg" src="imgs2/actividades/resultado-02.png">'+
										'</div>'+
										'<div class="ogendtext">'+
											'<h2>'+numerodecorrectas+'/10</h2>'+
											'<h3>Frase motivadora</h3>'+
											'<button class="ui blue button" onclick="nextExercise3();">Bruh</button>'+
										'</div>'+
										'</div>';


		removeButton.innerHTML = '';								

	}
}
Ordenar();

let listaderespuestas = [];
let listadecorrects = [];
let numerodecorrectas = 0;
let answers1 = "aylmao";


function nextExercise3(){


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



	turno = true;
	isCovered = true;
	coverNext();
	RandomExNo = RandomExNo+1;
	NoOrden = RandomExNo+1;
	ExcerciseNo = myarray[RandomExNo];
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
	Ordenar();


	


	


}

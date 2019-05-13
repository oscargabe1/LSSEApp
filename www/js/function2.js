let turno = true;
let ExcerciseNo = 1;
let ExType = 1;
let DeterminarUnidad;
let ExAnswer;
let blue1 = false; let blue2 = false; let blue3 = false; let blue4 = false;
let blue5 = false; let blue6 = false; let blue7 = false; let blue8 = false;

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
	
	console.log(currentype);
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

	
		ExcerciseAnswer3 = getButton.textContent;
	

	
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


		ExcerciseAnswer3 = getButton2.textContent;
	
	
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

	
		ExcerciseAnswer3 = getButton3.textContent;
	
	
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


		ExcerciseAnswer3 = getButton4.textContent;
	
	
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

	
ExcerciseAnswer3 = getButton.textContent;
	
		
	

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


		ExcerciseAnswer3 = getButton2.textContent;

	
		
	
	
	getSpace3.textContent = ExcerciseAnswer3;

	setTimeout(returnColors, 250);

}

function pmb1(){
	let mb = document.querySelector("#ogbutton0");
	let getNextB = document.querySelector("#ogdiss2");
	let getSpace3 = document.querySelector(".ogspace3");
	mb.className="ui blue button"
	getNextB.className="fluid ui blue button";
	ExcerciseAnswer3 = mb.textContent;
	getSpace3.textContent = ExcerciseAnswer3;
	setTimeout(function(){ mb.className="ui button" }, 250);
	console.log(ExcerciseAnswer3);
}
function pmb2(){
	let mb = document.querySelector("#ogbutton1");
	let getNextB = document.querySelector("#ogdiss2");
	let getSpace3 = document.querySelector(".ogspace3");
	mb.className="ui blue button"
	getNextB.className="fluid ui blue button";
	ExcerciseAnswer3 = mb.textContent;
	getSpace3.textContent = ExcerciseAnswer3;
	setTimeout(function(){ mb.className="ui button" }, 250);
	console.log(ExcerciseAnswer3);
}
function pmb3(){
	let mb = document.querySelector("#ogbutton2");
	let getNextB = document.querySelector("#ogdiss2");
	let getSpace3 = document.querySelector(".ogspace3");
	mb.className="ui blue button"
	getNextB.className="fluid ui blue button";
	ExcerciseAnswer3 = mb.textContent;
	getSpace3.textContent = ExcerciseAnswer3;
	setTimeout(function(){ mb.className="ui button" }, 250);
	console.log(ExcerciseAnswer3);
}
function pmb4(){
	let mb = document.querySelector("#ogbutton3");
	let getNextB = document.querySelector("#ogdiss2");
	let getSpace3 = document.querySelector(".ogspace3");
	mb.className="ui blue button"
	getNextB.className="fluid ui blue button";
	ExcerciseAnswer3 = mb.textContent;
	getSpace3.textContent = ExcerciseAnswer3;
	setTimeout(function(){ mb.className="ui button" }, 250);
	console.log(ExcerciseAnswer3);
}
function pmb5(){
	let mb = document.querySelector("#ogbutton4");
	let getNextB = document.querySelector("#ogdiss2");
	let getSpace3 = document.querySelector(".ogspace3");
	mb.className="ui blue button"
	getNextB.className="fluid ui blue button";
	ExcerciseAnswer3 = mb.textContent;
	getSpace3.textContent = ExcerciseAnswer3;
	setTimeout(function(){ mb.className="ui button" }, 250);
	console.log(ExcerciseAnswer3);
}
function pmb6(){
	let mb = document.querySelector("#ogbutton5");
	let getNextB = document.querySelector("#ogdiss2");
	let getSpace3 = document.querySelector(".ogspace3");
	mb.className="ui blue button"
	getNextB.className="fluid ui blue button";
	ExcerciseAnswer3 = mb.textContent;
	getSpace3.textContent = ExcerciseAnswer3;
	setTimeout(function(){ mb.className="ui button" }, 250);
	console.log(ExcerciseAnswer3);
}
function pmb7(){
	let mb = document.querySelector("#ogbutton6");
	let getNextB = document.querySelector("#ogdiss2");
	let getSpace3 = document.querySelector(".ogspace3");
	mb.className="ui blue button"
	getNextB.className="fluid ui blue button";
	ExcerciseAnswer3 = mb.textContent;
	getSpace3.textContent = ExcerciseAnswer3;
	setTimeout(function(){ mb.className="ui button" }, 250);
	console.log(ExcerciseAnswer3);
}
function pmb8(){
	let mb = document.querySelector("#ogbutton7");
	let getNextB = document.querySelector("#ogdiss2");
	let getSpace3 = document.querySelector(".ogspace3");
	mb.className="ui blue button"
	getNextB.className="fluid ui blue button";
	ExcerciseAnswer3 = mb.textContent;
	getSpace3.textContent = ExcerciseAnswer3;
	setTimeout(function(){ mb.className="ui button" }, 250);
	console.log(ExcerciseAnswer3);
}
function pmb9(){
	let mb = document.querySelector("#ogbutton8");
	let getNextB = document.querySelector("#ogdiss2");
	let getSpace3 = document.querySelector(".ogspace3");
	mb.className="ui blue button"
	getNextB.className="fluid ui blue button";
	ExcerciseAnswer3 = mb.textContent;
	getSpace3.textContent = ExcerciseAnswer3;
	setTimeout(function(){ mb.className="ui button" }, 250);
	console.log(ExcerciseAnswer3);
}

function bb1(){
	let mb = document.querySelector("#ogbutton0");
	let getNextB = document.querySelector("#ogdiss2");
	getNextB.className="fluid ui blue button";
	if (blue1==false) {
		mb.className ="ui blue button";
		blue1=true;
	}
		else if (blue1==true) {
			mb.className ="ui button" ;
			blue1=false;}
	}
function bb2(){
	let mb = document.querySelector("#ogbutton1");
	let getNextB = document.querySelector("#ogdiss2");
	getNextB.className="fluid ui blue button";
	if (blue2==false) { mb.className ="ui blue button"; blue2=true;}
		else if (blue2==true) { mb.className ="ui button"; blue2=false;}
	}
function bb3(){
	let mb = document.querySelector("#ogbutton2");
	let getNextB = document.querySelector("#ogdiss2");
	getNextB.className="fluid ui blue button";
	if (blue3==false) { mb.className ="ui blue button"; blue3=true;}
		else if (blue3==true) { mb.className ="ui button"; blue3=false;}
	}
function bb4(){
	let mb = document.querySelector("#ogbutton3");
	let getNextB = document.querySelector("#ogdiss2");
	getNextB.className="fluid ui blue button";
	if (blue4==false) { mb.className ="ui blue button"; blue4=true;}
		else if (blue4==true) { mb.className ="ui button"; blue4=false;}
	}
function bb5(){
	let mb = document.querySelector("#ogbutton4");
	let getNextB = document.querySelector("#ogdiss2");
	getNextB.className="fluid ui blue button";
	if (blue5==false) { mb.className ="ui blue button"; blue5=true;}
		else if (blue5==true) { mb.className ="ui button"; blue5=false;}
	}
function bb6(){
	let mb = document.querySelector("#ogbutton5");
	let getNextB = document.querySelector("#ogdiss2");
	getNextB.className="fluid ui blue button";
	if (blue6==false) { mb.className ="ui blue button"; blue6=true;}
		else if (blue6==true) { mb.className ="ui button"; blue6=false;}
	}
function bb7(){
	let mb = document.querySelector("#ogbutton6");
	let getNextB = document.querySelector("#ogdiss2");
	getNextB.className="fluid ui blue button";
	if (blue7==false) { mb.className ="ui blue button"; blue7=true;}
		else if (blue7==true) { mb.className ="ui button"; blue7=false;}
	}
function bb8(){
	let mb = document.querySelector("#ogbutton7");
	let getNextB = document.querySelector("#ogdiss2");
	getNextB.className="fluid ui blue button";
	if (blue8==false) { mb.className ="ui blue button"; blue8=true;}
		else if (blue8==true) { mb.className ="ui button"; blue8=false;}
	}	


function checkDouble(){
	if (ExUnits==1 && ExType == 2) {
		if (ExcerciseNo == 1 || ExcerciseNo == 2 || ExcerciseNo == 3 || ExcerciseNo == 6 || ExcerciseNo == 7) {
		doubleAnswer = true;
		}
		else{
			doubleAnswer = false;
		}
		console.log(doubleAnswer);
	}
	else if (ExUnits==9 && ExType==1) {
		doubleAnswer=false;
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
currentype = (ExUnits+' '+ExType);


let getExcercise = document.querySelector(".ogchange");
let getBotEnd = document.querySelector(".ogbot");
let removeButton = document.querySelector(".ogcentered3");

Calculate();

let listaderespuestas = [];
let listadecorrects = [];
let listamultr=[];

let answers1 = "aylmao";




function newType(){
	if (currentype == '1 3'||currentype == '2 2') {}
		else{
				console.log("NEW TYPE"+ExType);
    ExType = ExType + 1;
    console.log("NEW TYPE"+ExType);
	generarRnds();
	RandomExNo = 0;
	NoOrden = RandomExNo+1;
	ExcerciseNo = myarray[RandomExNo];
	currentex = (ExUnits+' '+ExType+' '+ExcerciseNo);
	currentype = (ExUnits+' '+ExType);
	listadecorrects = [];
	listaderespuestas = [];
	numerodecorrectas = 0;
	Calculate();
	console.log("NEW TYPE"+ExType);
		}

	

}

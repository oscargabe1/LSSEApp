function ShowResults(){

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
					removeButton.innerHTML = '<div class="ogbox3"><button id="ogdiss2" onclick="Calificar();" class="fluid ui blue disabled button">Next</button></div>';
					}
}

function GenerarEjercicios(){
console.log(ExType);
console.log(ExUnits);
console.log(ExcerciseNo);
	if (ExType == 1) {

		if (ExUnits == 1) {
			if (ExcerciseNo == 0) {
					getExcercise.innerHTML =  '<h4 id="ogtext">'+NoOrden+'. They <button class="ogspace3">?</button> absent today.</h4>'+
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
		}

	ShowResults();
		


	
	}

	if (ExType == 2) {
		if (ExUnits == 1) {
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
		}
	ShowResults();
	}

	if (ExType == 3) {
		if (ExUnits == 1) {
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
			getExcercise.innerHTML =    '<div class="ogcentered"><h4 class="ogtitle2">NEAR</h4></div>'+
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
			getExcercise.innerHTML =    '<div class="ogcentered"><h4 class="ogtitle2">NEAR</h4></div>'+
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
		if (ExcerciseNo == 4) {'<div class="ogcentered"><h4 class="ogtitle2">NEAR</h4></div>'+
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
			getExcercise.innerHTML =   '<div class="ogcentered"><h4 class="ogtitle2">FAR</h4></div>'+
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
			getExcercise.innerHTML =    '<div class="ogcentered"><h4 class="ogtitle2">FAR</h4></div>'+
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
			getExcercise.innerHTML =    '<div class="ogcentered"><h4 class="ogtitle2">FAR</h4></div>'+
									'<h4 id="ogtext">'+NoOrden+'. <button class="ogspace3">?</button> is my cousin Peter.</h4>'+
										'<div class="ogcentered2">'+
										'<div class="ogbox4"><button onclick="pressButton1();" id="abutton" class="fluid ui button">This</button></div>'+
										'<div class="ogbox4"><button onclick="pressButton2();" id="anbutton"class="fluid ui button">These</button></div>'+
										'<br>'+
										'<div class="ogbox5"><button onclick="pressButton3();" id="abutton2" class="fluid ui button">That</button></div>'+
										'<div class="ogbox5"><button onclick="pressButton4();" id="anbutton2"class="fluid ui button">Those</button></div>'+
										
									'</div>';
		}
		}//Cierra ExUnits1
		ShowResults();
	}//Cierra ExType3
} //Cierra toda la funcion

let unit1ex1 = 'BRUH <button class="ogspace3">?</button> absent today';
	function bruhm(){
console.log(currentex);
		getExcercise.innerHTML =  '<h4 id="ogtext">'+NoOrden+'. '+cur+'.</h4>'+
														'<div class="ogcentered2">'+
														'<div class="ogbox4"><button onclick="press2Button1();" id="abutton" class="fluid ui button">is</button></div>'+
														'<div class="ogbox4"><button onclick="press2Button2();" id="anbutton"class="fluid ui button">are</button></div>'+
													'</div>';
	}


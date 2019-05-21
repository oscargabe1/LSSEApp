let variable1 = 1;
let r1;
let r2;
let r3;
let r4;
let r5;
let r6;
let r7;
let r8;
let ins1;
let ins2;
let ExGenero;
let currentlista;
let currentlista2;
let unit1answers1;
let unit1answers2;
let unit2answers1;
let unit2answers2;
let unit3answers1;
let unit3answers2;
let unit5answers1;
let unit5answers2;
let unit6answers1;
let unit6answers2;
let unit7answers1;
let unit7answers2;
let unit8answers1;
let unit8answers2;
let unit9answers1;
let unit9answers2;
let unit10answers1;
let unit10answers2;
let getIns;
let ExUnits;
let numerodecorrectas = 0;


function ExUnit1(){
	ExUnits = 1;
}
function ExUnit2(){
	ExUnits = 2;
}
function ExUnit3(){
	ExUnits = 3;
}
function ExUnit4(){
	ExUnits = 4;
}
function ExUnit5(){
	ExUnits = 5;
}
function ExUnit6(){
	ExUnits = 6;
}
function ExUnit7(){
	ExUnits = 7;
}
function ExUnit8(){
	ExUnits = 8;
}
function ExUnit9(){
	ExUnits = 9;
}
function ExUnit10(){
	ExUnits = 10;
}
function CheckGenero(){
	if (ExUnits == 1 && ExType == 2  || ExUnits == 9 && ExType == 1) {
		console.log("tipo3");
		ExGenero = "3r";
	}
	else if (ExUnits == 1 && ExType == 3 || ExUnits == 7 && ExType == 3) {
		console.log("tipo4");
		ExGenero = "4r";
	}
	else if (ExUnits == 3 && ExType == 2 || ExUnits == 5 && ExType == 1 || ExUnits == 7 && ExType == 1
			|| ExUnits == 7 && ExType == 2 || ExUnits == 8 && ExType == 1 || ExUnits == 8 && ExType == 2) {
		console.log("tiposubrayar");
	ExGenero = "subr";
	}
	else if (ExUnits==3 && ExType ==3) {ExGenero = "multr"; console.log(ExGenero);}
	else{
		console.log("tipo2");
		ExGenero = "2r";
	}
}

function Calculate(){

	console.log("principio"+ExUnits);
	checkUnit();

	if (currentex == '1 1 0') {show = 'They <button class="ogspace3">?</button> absent today.'; r1 = 'is'; r2='are'}
	else if (currentex == '1 1 1') {show = 'The door <button class="ogspace3">?</button> open.'; r1 = 'is'; r2='are'}
	else if (currentex == '1 1 2') {show = 'You <button class="ogspace3">?</button> in the city.'; r1 = 'is'; r2='are'}
	else if (currentex == '1 1 3') {show = 'They <button class="ogspace3">?</button> my parents.'; r1 = 'am'; r2='are'}
	else if (currentex == '1 1 4') {show = 'Katy and John <button class="ogspace3">?</button> cousins.'; r1 = 'am'; r2='are'}
	else if (currentex == '1 1 5') {show = 'William and Robert <button class="ogspace3">?</button> good policemen.'; r1 = 'is'; r2='are'}
	else if (currentex == '1 1 6') {show = 'I <button class="ogspace3">?</button> your uncle.'; r1 = 'is'; r2='am'}
	else if (currentex == '1 1 7') {show = 'Miss Johnson <button class="ogspace3">?</button> a terrific teacher.'; r1 = 'is'; r2='are'}
	else if (currentex == '1 1 8') {show = 'The chair <button class="ogspace3">?</button> red.'; r1 = 'is'; r2='are'}
	else if (currentex == '1 1 9') {show = 'It <button class="ogspace3">?</button> a good book.'; r1 = 'is'; r2='are'}
	else if (currentex == '1 2 0') {show = 'There is <button class="ogspace2">?</button> eraser on the desk.'; r1 = 'a'; r2='an'; r3='the'}
	else if (currentex == '1 2 1') {show = '<button class="ogspace2">?</button> English book is on <button class="ogspace4">?</button> table.'; r1 = 'a'; r2='an'; r3='the'}
	else if (currentex == '1 2 2') {show = '<button class="ogspace2">?</button> children are in <button class="ogspace4">?</button> yard.'; r1 = 'a'; r2='an'; r3='the'}
	else if (currentex == '1 2 3') {show = 'There is <button class="ogspace2">?</button> pen on <button class="ogspace4">?</button> counter.'; r1 = 'a'; r2='an'; r3='the'}
	else if (currentex == '1 2 4') {show = '<button class="ogspace2">?</button> tree is green.'; r1 = 'a'; r2='an'; r3='the'}
	else if (currentex == '1 2 5') {show = 'Are you in <button class="ogspace2">?</button> living room?'; r1 = 'a'; r2='an'; r3='the'}
	else if (currentex == '1 2 6') {show = 'There is <button class="ogspace2">?</button> dress on <button class="ogspace4">?</button> bed.'; r1 = 'a'; r2='an'; r3='the'}
	else if (currentex == '1 2 7') {show = '<button class="ogspace2">?</button> baby is in <button class="ogspace4">?</button> room.'; r1 = 'a'; r2='an'; r3='the'}
	else if (currentex == '1 2 8') {show = 'That is <button class="ogspace2">?</button> beautiful car.'; r1 = 'a'; r2='an'; r3='the'}
	else if (currentex == '1 2 9') {show = '<button class="ogspace2">?</button> house is big.'; r1 = 'a'; r2='an'; r3='the'}
	else if (currentex == '1 3 0') {show = '<button class="ogspace3">?</button> is my notebook.'; ins2='NEAR'; r1 = 'This'; r2='These'; r3='That'; r4='Those'}
	else if (currentex == '1 3 1') {show = '<button class="ogspace3">?</button> are my shoes.'; ins2='NEAR'; r1 = 'This'; r2='These'; r3='That'; r4='Those'}
	else if (currentex == '1 3 2') {show = '<button class="ogspace3">?</button> is my pen.'; ins2='NEAR'; r1 = 'This'; r2='These'; r3='That'; r4='Those'}
	else if (currentex == '1 3 3') {show = '<button class="ogspace3">?</button> are my books.'; ins2='NEAR'; r1 = 'This'; r2='These'; r3='That'; r4='Those'}
	else if (currentex == '1 3 4') {show = '<button class="ogspace3">?</button> is my brother.'; ins2='NEAR'; r1 = 'This'; r2='These'; r3='That'; r4='Those'}
	else if (currentex == '1 3 5') {show = '<button class="ogspace3">?</button> are my neigbors.'; ins2='FAR'; r1 = 'This'; r2='These'; r3='That'; r4='Those'}
	else if (currentex == '1 3 6') {show = '<button class="ogspace3">?</button> is my pet.'; ins2='FAR'; r1 = 'This'; r2='These'; r3='That'; r4='Those'}
	else if (currentex == '1 3 7') {show = '<button class="ogspace3">?</button> is my car.'; ins2='FAR'; r1 = 'This'; r2='These'; r3='That'; r4='Those'}
	else if (currentex == '1 3 8') {show = '<button class="ogspace3">?</button> are my toys.'; ins2='FAR'; r1 = 'This'; r2='These'; r3='That'; r4='Those'}
	else if (currentex == '1 3 9') {show = '<button class="ogspace3">?</button> is my cousin Peter.'; ins2='FAR'; r1 = 'This'; r2='These'; r3='That'; r4='Those'}

	else if (currentex == '2 1 0') {show = 'There are <button class="ogspace3">?</button> rooms.'; r1 = 'much'; r2='many'}
	else if (currentex == '2 1 1') {show = 'There is <button class="ogspace3">?</button> coffee in the coffeepot.'; r1 = 'much'; r2='many'}
	else if (currentex == '2 1 2') {show = 'There are <button class="ogspace3">?</button> glasses of water.'; r1 = 'much'; r2='many'}
	else if (currentex == '2 1 3') {show = 'There is not <button class="ogspace3">?</button> sugar in my tea.'; r1 = 'much'; r2='many'}
	else if (currentex == '2 1 4') {show = 'This dish has <button class="ogspace3">?</button> spice.'; r1 = 'much'; r2='many'}
	else if (currentex == '2 1 5') {show = 'There are <button class="ogspace3">?</button> cups of coffee.'; r1 = 'much'; r2='many'}
	else if (currentex == '2 1 6') {show = 'There are <button class="ogspace3">?</button> toys in the store.'; r1 = 'much'; r2='many'}
	else if (currentex == '2 1 7') {show = 'There is <button class="ogspace3">?</button> flour in the canister.'; r1 = 'much'; r2='many'}
	else if (currentex == '2 1 8') {show = 'There are <button class="ogspace3">?</button> reasons for being absent.'; r1 = 'much'; r2='many'}
	else if (currentex == '2 1 9') {show = 'He has <button class="ogspace3">?</button> things to do.'; r1 = 'much'; r2='many'}
	else if (currentex == '2 2 0') {show = '<button class="ogspace3">?</button> are you waiting for?'; r1 = 'Who'; r2='Whom'; ins2='I am waiting for Alice.'}
	else if (currentex == '2 2 1') {show = '<button class="ogspace3">?</button> is your teacher?'; r1 = 'Who'; r2='Whom'; ins2='My teacher is Mr. Jones.'}
	else if (currentex == '2 2 2') {show = '<button class="ogspace3">?</button> is at the door?'; r1 = 'Who'; r2='Whom'; ins2='My neighbor is at the door.'}
	else if (currentex == '2 2 3') {show = '<button class="ogspace3">?</button> are they asking for?'; r1 = 'Who'; r2='Whom'; ins2='They are asking for Mr. Lewis.'}
	else if (currentex == '2 2 4') {show = '<button class="ogspace3">?</button> are you talking to?'; r1 = 'Who'; r2='Whom'; ins2='I am talking to Susan.'}
	else if (currentex == '2 2 5') {show = '<button class="ogspace3">?</button> is your friend?'; r1 = 'Who'; r2='Whom'; ins2='Johny is my friend.'}
	else if (currentex == '2 2 6') {show = '<button class="ogspace3">?</button> are they calling?'; r1 = 'Who'; r2='Whom'; ins2='They are calling the principal.'}
	else if (currentex == '2 2 7') {show = '<button class="ogspace3">?</button> are you?'; r1 = 'Who'; r2='Whom'; ins2='I am Peter.'}
	else if (currentex == '2 2 8') {show = '<button class="ogspace3">?</button> gave you this?'; r1 = 'Who'; r2='Whom'; ins2='My mom gave me this.'}
	else if (currentex == '2 2 9') {show = '<button class="ogspace3">?</button> did she play with?'; r1 = 'Who'; r2='Whom'; ins2='She played with Susan. '}

	else if (currentex == '3 1 0') {show = 'Alice is <button class="ogspace3">?</button> in the park.'; r1 = 'plaing'; r2='playing'}
	else if (currentex == '3 1 1') {show = 'Tom and John are <button class="ogspace3">?</button> English.'; r1 = 'studying'; r2='studing'}
	else if (currentex == '3 1 2') {show = 'We are <button class="ogspace3">?</button> a party.'; r1 = 'planing'; r2='planning'}
	else if (currentex == '3 1 3') {show = 'She is <button class="ogspace3">?</button> to you.'; r1 = 'referring'; r2='refering'}
	else if (currentex == '3 1 4') {show = 'They are <button class="ogspace3">?</button> a new restaurant.'; r1 = 'opening'; r2='openning'}
	else if (currentex == '3 1 5') {show = 'You are <button class="ogspace3">?</button> him an expensive present.'; r1 = 'giving'; r2='givving'}
	else if (currentex == '3 1 6') {show = 'He is <button class="ogspace3">?</button> the car in the parking lot.'; r1 = 'putting'; r2='puting'}
	else if (currentex == '3 1 7') {show = 'They are <button class="ogspace3">?</button> their new apartment.'; r1 = 'enjoying'; r2='enjoing'}
	else if (currentex == '3 1 8') {show = 'We are <button class="ogspace3">?</button> to feel sick.'; r1 = 'beginning'; r2='begining'}
	else if (currentex == '3 1 9') {show = 'I am <button class="ogspace3">?</button> my shoelace.'; r1 = 'tying'; r2='taying'}
	else if (currentex == '3 2 0') {show = 'They are burning all the papers.<br><button class="ogspace3">?</button>'; n1='6'; r1 = 'They'; r2='are'; r3='burning'; r4='all'; r5='the'; r6='papers'}
	else if (currentex == '3 2 1') {show = 'They were not arresting him last night.<br><button class="ogspace3">?</button>'; n1='7'; r1 = 'They'; r2='were'; r3='not'; r4='arresting'; r5='him'; r6='last'; r7='night'}
	else if (currentex == '3 2 2') {show = 'We were attending the ceremony.<br><button class="ogspace3">?</button>'; n1='5';  r1 = 'We'; r2='were'; r3='attending'; r4='the'; r5='ceremony'}
	else if (currentex == '3 2 3') {show = 'They are working together.<br><button class="ogspace3">?</button>'; n1='4'; r1 = 'They'; r2='are'; r3='working'; r4='together'}
	else if (currentex == '3 2 4') {show = 'Is she eating in the living room?<br><button class="ogspace3">?</button>'; n1='7'; r1 = 'Is'; r2='she'; r3='eating'; r4='in'; r5='the'; r6='living'; r7='room'}
	else if (currentex == '3 2 5') {show = 'She is not brushing her hair.<br><button class="ogspace3">?</button>'; n1='5'; r1 = 'She'; r2='is'; r3='not'; r4='brushing'; r5='her'; r6='hair'}
	else if (currentex == '3 2 6') {show = 'She was not breathing.<br><button class="ogspace3">?</button>'; n1='4'; r1 = 'She'; r2='was'; r3='not'; r4='breathing'}
	else if (currentex == '3 2 7') {show = 'God is blessing you.<br><button class="ogspace3">?</button>'; n1='4'; r1 = 'God'; r2='is'; r3='blessing'; r4='you'}
	else if (currentex == '3 2 8') {show = 'Are you asking me?<br><button class="ogspace3">?</button>'; n1='4'; r1 = 'Are'; r2='you'; r3='asking'; r4='me'}
	else if (currentex == '3 2 9') {show = 'You were not answering the questions.<br><button class="ogspace3">?</button>'; n1='6'; r1 = 'You'; r2='were'; r3='not'; r4='answering'; r5='the'; r6='questions'}
	else if (currentex == '3 3 0') {show = 'Patty and Louise are good friends.'; n1='6'; r1 = 'Patty'; r2='and'; r3='Louise'; r4='are'; r5='good'; r6='friends'}
	else if (currentex == '3 3 1') {show = 'She is tall and beautiful.'; n1='5'; r1 = 'She'; r2='is'; r3='tall'; r4='and'; r5='beautiful'}
	else if (currentex == '3 3 2') {show = 'They bought a new television.'; n1='5'; r1 = 'They'; r2='bought'; r3='a'; r4='new'; r5='television'}
	else if (currentex == '3 3 3') {show = 'He is a clever, smart and handsome lawyer.'; n1='8'; r1 = 'He'; r2='is'; r3='a'; r4='clever'; r5='smart'; r6='and'; r7='handsome'; r8='lawyer'}
	else if (currentex == '3 3 4') {show = 'My pet is aggresive and terrible with people.'; n1='8'; r1 = 'My'; r2='pet'; r3='is'; r4='aggresive'; r5='and'; r6='terrible'; r7='with'; r8='people'}
	else if (currentex == '3 3 5') {show = 'I like red high heel shoes.'; n1='6'; r1 = 'I'; r2='like'; r3='red'; r4='high'; r5='heel'; r6='shoes'}
	else if (currentex == '3 3 6') {show = 'We have a red sports car.'; n1='6'; r1 = 'We'; r2='have'; r3='a'; r4='red'; r5='sports'; r6='car'}
	else if (currentex == '3 3 7') {show = 'We are a huge and happy family.'; n1='7'; r1 = 'We'; r2='are'; r3='a'; r4='huge'; r5='and'; r6='happy'; r7='family'}
	else if (currentex == '3 3 8') {show = 'You are good and kind.'; n1='5'; r1 = 'You'; r2='are'; r3='good'; r4='and'; r5='kind'}
	else if (currentex == '3 3 9') {show = 'His attitude is rude and impolite.'; n1='7'; r1 = 'His'; r2='attitude'; r3='is'; r4='rude'; r5='and'; r6='impolite'}

	//no hay ejercicios en el 4

	else if (currentex == '5 1 0') {show = 'Everyone was having a good time at the party.<br><button class="ogspace3">?</button>'; n1='8'; r1 = 'Everyone'; r2='was'; r3='having'; r4='good'; r5='time'; r6='at'; r7='the'; r8='party'}
	else if (currentex == '5 1 1') {show = 'Someone was calling you last night.<br><button class="ogspace3">?</button>'; n1='6'; r1 = 'Someone'; r2='was'; r3='calling'; r4='you'; r5='last'; r6='time'}
	else if (currentex == '5 1 2') {show = 'Nobody is seeing the show because it is boring.<br><button class="ogspace3">?</button>'; n1='8'; r1 = 'Nobody'; r2='seeing'; r3='the'; r4='show'; r5='because'; r6='it'; r7='is'; r8='boring'}
	else if (currentex == '5 1 3') {show = 'Both of my parents are at the concert.<br><button class="ogspace3">?</button>'; n1='8'; r1 = 'Both'; r2='of'; r3='my'; r4='parents'; r5='are'; r6='at'; r7='the'; r8='concert'}
	else if (currentex == '5 1 4') {show = 'They love each other very much.<br><button class="ogspace3">?</button>'; n1='6'; r1 = 'They'; r2='love'; r3='each'; r4='other'; r5='very'; r6='much'}
	else if (currentex == '5 1 5') {show = 'They were playing against the others.<br><button class="ogspace3">?</button>'; n1='6'; r1 = 'They'; r2='were'; r3='playing'; r4='against'; r5='the'; r6='others'}
	else if (currentex == '5 1 6') {show = 'Several companies are on strike.<br><button class="ogspace3">?</button>'; n1='5'; r1 = 'Several'; r2='companies'; r3='are'; r4='on'; r5='strike'}
	else if (currentex == '5 1 7') {show = 'His mistakes were just a few.<br><button class="ogspace3">?</button>'; n1='6'; r1 = 'His'; r2='mistakes'; r3='were'; r4='just'; r5='a'; r6='few'}
	else if (currentex == '5 1 8') {show = 'Somebody was knocking at the door.<br><button class="ogspace3">?</button>'; n1='6'; r1 = 'Somebody'; r2='was'; r3='knocking'; r4='at'; r5='the'; r6='door'}
	else if (currentex == '5 1 9') {show = 'Neither one of us is correct.<br><button class="ogspace3">?</button>'; n1='6'; r1 = 'Neither'; r2='one'; r3='of'; r4='us'; r5='is'; r6='door'}
	else if (currentex == '5 2 0') {show = 'I live <button class="ogspace3">?</button> you from school.'; r1 = 'farther than'; r2='the farthest'}
	else if (currentex == '5 2 1') {show = 'It is <button class="ogspace3">?</button> important of all.'; r1 = 'less than'; r2='the least'}
	else if (currentex == '5 2 2') {show = 'I love you <button class="ogspace3">?</button> anyone.'; r1 = 'more than'; r2='the most'}
	else if (currentex == '5 2 3') {show = 'He is <button class="ogspace3">?</button> singer.'; r1 = 'better than'; r2='the best'}
	else if (currentex == '5 2 4') {show = 'This movie is <button class="ogspace3">?</button> of all.'; r1 = 'worse than'; r2='the worst'}
	else if (currentex == '5 2 5') {show = 'He is <button class="ogspace3">?</button> his brothers.'; r1 = 'taller than'; r2='the tallest'}
	else if (currentex == '5 2 6') {show = 'My dish is <button class="ogspace3">?</button> yours.'; r1 = 'tastier than'; r2='the tastiest'}
	else if (currentex == '5 2 7') {show = 'We play <button class="ogspace3">?</button> any other team.'; r1 = 'better than'; r2='the best'}
	else if (currentex == '5 2 8') {show = 'She gave me <button class="ogspace3">?</button> gift.'; r1 = 'better than'; r2='the best'}
	else if (currentex == '5 2 9') {show = 'Her dog is <button class="ogspace3">?</button> the rest.'; r1 = 'bigger than'; r2='the biggest'}

	else if (currentex == '6 1 0') {show = 'Sonia <button class="ogspace3">?</button> hunt deer.'; r1 = 'do not'; r2='does not'}
	else if (currentex == '6 1 1') {show = 'I <button class="ogspace3">?</button> follow the instructions.'; r1 = 'do not'; r2='does not'}
	else if (currentex == '6 1 2') {show = 'They <button class="ogspace3">?</button> improve their grades.'; r1 = 'do not'; r2='does not'}
	else if (currentex == '6 1 3') {show = 'Animals <button class="ogspace3">?</button> know how to speak.'; r1 = 'do not'; r2='does not'}
	else if (currentex == '6 1 4') {show = 'She <button class="ogspace3">?</button> hang her dirty clothes.'; r1 = 'do not'; r2='does not'}
	else if (currentex == '6 1 5') {show = 'Mark <button class="ogspace3">?</button> like lemon pie.'; r1 = 'do not'; r2='does not'}
	else if (currentex == '6 1 6') {show = 'My parents <button class="ogspace3">?</button> like him.'; r1 = 'do not'; r2='does not'}
	else if (currentex == '6 1 7') {show = 'Susan <button class="ogspace3">?</button> eat meat.'; r1 = 'do not'; r2='does not'}
	else if (currentex == '6 1 8') {show = 'The children <button class="ogspace3">?</button> like to work.'; r1 = 'do not'; r2='does not'}
	else if (currentex == '6 1 9') {show = 'Pat <button class="ogspace3">?</button> play basketball anymore.'; r1 = 'do not'; r2='does not'}
	else if (currentex == '6 2 0') {show = 'The book <button class="ogspace3">?</button> I will read is yours.'; r1 = 'that'; r2='whom'}
	else if (currentex == '6 2 1') {show = 'The teacher with <button class="ogspace3">?</button> we were studying is sick.'; r1 = 'wich'; r2='whom'}
	else if (currentex == '6 2 2') {show = 'It is Esther <button class="ogspace3">?</button> is calling you.'; r1 = 'what'; r2='who'}
	else if (currentex == '6 2 3') {show = 'The car <button class="ogspace3">?</button> John uses is mine.'; r1 = 'whose'; r2='that'}
	else if (currentex == '6 2 4') {show = 'The girls <button class="ogspace3">?</button> are in my class are good students.'; r1 = 'who'; r2='whom'}
	else if (currentex == '6 2 5') {show = 'John is the boy <button class="ogspace3">?</button> my sister is dating.'; r1 = 'wich'; r2='whom'}
	else if (currentex == '6 2 6') {show = 'The man <button class="ogspace3">?</button> I was talking to is not my relative.'; r1 = 'who'; r2='whom'}
	else if (currentex == '6 2 7') {show = 'The books <button class="ogspace3">?</button> arrived are the best books around.'; r1 = 'that'; r2='what'}
	else if (currentex == '6 2 8') {show = 'Both of the trips <button class="ogspace3">?</button> we chose were canceled.'; r1 = 'whose'; r2='that'}
	else if (currentex == '6 2 9') {show = 'The students <button class="ogspace3">?</button> are here today are studying English.'; r1 = 'that'; r2='which'}

	else if (currentex == '7 1 0') {show = 'I always <button class="ogspace3">?</button> you the truth.';n1="4"; r1 = 'say'; r2='said'; r3 ='tell'; r4='told'}
	else if (currentex == '7 1 1') {show = 'John <button class="ogspace3">?</button> that he feels tired today.';n1="4"; r1 = 'says'; r2='said'; r3 ='tells'; r4='told'}
	else if (currentex == '7 1 2') {show = 'Mary <button class="ogspace3">?</button> that her sister was sick.';n1="4"; r1 = 'says'; r2='said'; r3 ='tells'; r4='told'}
	else if (currentex == '7 1 3') {show = 'She <button class="ogspace3">?</button> that she was going to the doctor.';n1="4"; r1 = 'says'; r2='said'; r3 ='tells'; r4='told'}
	else if (currentex == '7 1 4') {show = 'Peter <button class="ogspace3">?</button> that he is coming next week.';n1="4"; r1 = 'says'; r2='said'; r3 ='tells'; r4='told'}
	else if (currentex == '7 1 5') {show = 'They <button class="ogspace3">?</button> that they were busy.';n1="4"; r1 = 'say'; r2='said'; r3 ='tell'; r4='told'}
	else if (currentex == '7 1 6') {show = 'He <button class="ogspace3">?</button> us the same jokes all the time.';n1="4"; r1 = 'says'; r2='said'; r3 ='tells'; r4='told'}
	else if (currentex == '7 1 7') {show = 'They <button class="ogspace3">?</button> us that you lived in Montana.';n1="4"; r1 = 'say'; r2='said'; r3 ='tell'; r4='told'}
	else if (currentex == '7 1 8') {show = 'We <button class="ogspace3">?</button> you to be quiet.';n1="4"; r1 = 'say'; r2='said'; r3 ='tell'; r4='told'}
	else if (currentex == '7 1 9') {show = 'Alice and John <button class="ogspace3">?</button> them to bring their car.';n1="4"; r1 = 'say'; r2='said'; r3 ='tell'; r4='told'}
	else if (currentex == '7 2 0') {show = 'We all enjoyed <button class="ogspace3">?</button> very much at the party.'; n1='8'; r1 = 'myself'; r2='yourself'; r3='himself'; r4='herself'; r5='itself'; r6='ourselves'; r7='yourselves'; r8='themselves'}
	else if (currentex == '7 2 1') {show = 'I want to do the homework by <button class="ogspace3">?</button> .'; n1='8'; r1 = 'myself'; r2='yourself'; r3='himself'; r4='herself'; r5='itself'; r6='ourselves'; r7='yourselves'; r8='themselves'}
	else if (currentex == '7 2 2') {show = 'My father shaves <button class="ogspace3">?</button> every morning.'; n1='8'; r1 = 'myself'; r2='yourself'; r3='himself'; r4='herself'; r5='itself'; r6='ourselves'; r7='yourselves'; r8='themselves'}
	else if (currentex == '7 2 3') {show = 'He says that he, <button class="ogspace3">?</button> , will give you the present.'; n1='8'; r1 = 'myself'; r2='yourself'; r3='himself'; r4='herself'; r5='itself'; r6='ourselves'; r7='yourselves'; r8='themselves'}
	else if (currentex == '7 2 4') {show = 'The girl looked at <button class="ogspace3">?</button> in the mirror.'; n1='8'; r1 = 'myself'; r2='yourself'; r3='himself'; r4='herself'; r5='itself'; r6='ourselves'; r7='yourselves'; r8='themselves'}
	else if (currentex == '7 2 5') {show = 'I bought a new English book for <button class="ogspace3">?</button> .'; n1='8'; r1 = 'myself'; r2='yourself'; r3='himself'; r4='herself'; r5='itself'; r6='ourselves'; r7='yourselves'; r8='themselves'}
	else if (currentex == '7 2 6') {show = 'Mr. Jones <button class="ogspace3">?</button> will give a speech to the students.'; n1='8'; r1 = 'myself'; r2='yourself'; r3='himself'; r4='herself'; r5='itself'; r6='ourselves'; r7='yourselves'; r8='themselves'}
	else if (currentex == '7 2 7') {show = 'Alice ate the cookies by <button class="ogspace3">?</button> .'; n1='8'; r1 = 'myself'; r2='yourself'; r3='himself'; r4='herself'; r5='itself'; r6='ourselves'; r7='yourselves'; r8='themselves'}
	else if (currentex == '7 2 8') {show = 'My youngest brother can jump the fence by <button class="ogspace3">?</button> .'; n1='8'; r1 = 'myself'; r2='yourself'; r3='himself'; r4='herself'; r5='itself'; r6='ourselves'; r7='yourselves'; r8='themselves'}
	else if (currentex == '7 2 9') {show = 'They are painting their house by <button class="ogspace3">?</button> .'; n1='8'; r1 = 'myself'; r2='yourself'; r3='himself'; r4='herself'; r5='itself'; r6='ourselves'; r7='yourselves'; r8='themselves'}
	else if (currentex == '7 3 0') {show = 'Surprised <button class="ogspace3">?</button>'; r1 = 'Sad'; r2='Excited'; r3='Amazed'; r4="Alone"}
	else if (currentex == '7 3 1') {show = 'Scared <button class="ogspace3">?</button>'; r1 = 'Alone'; r2='Afraid'; r3='Nervous'; r4="Sad"}
	else if (currentex == '7 3 2') {show = 'Glad <button class="ogspace3">?</button>'; r1 = 'Sad'; r2='Surprised'; r3='Happy'; r4="Nervous"}
	else if (currentex == '7 3 3') {show = 'Sad <button class="ogspace3">?</button>'; r1 = 'Unhappy'; r2='Nervous'; r3='Worried'; r4="Calmed"}
	else if (currentex == '7 3 4') {show = 'Anxious <button class="ogspace3">?</button>'; r1 = 'Calmed'; r2='Surprised'; r3='Desperate'; r4="Happy"}
	else if (currentex == '7 3 5') {show = 'Upset <button class="ogspace3">?</button>'; r1 = 'Angry'; r2='Happy'; r3='Excited'; r4="Attractive"}
	else if (currentex == '7 3 6') {show = 'Huge <button class="ogspace3">?</button>'; r1 = 'Enormous'; r2='Glad'; r3='Nervous'; r4="Small"}
	else if (currentex == '7 3 7') {show = 'Appealing <button class="ogspace3">?</button>'; r1 = 'Surprised'; r2='Attractive'; r3='Amazed'; r4="Calmed"}
	else if (currentex == '7 3 8') {show = 'Worried <button class="ogspace3">?</button>'; r1 = 'Tired'; r2='Energetic'; r3='Sad'; r4="Preocupied"}
	else if (currentex == '7 3 9') {show = 'Tired <button class="ogspace3">?</button>'; r1 = 'Nervous'; r2='Exhausted'; r3='Worried'; r4="Energetic"}

	else if (currentex == '8 1 0') {show = 'We walked down the road.<br><button class="ogspace3">?</button>'; n1='5'; r1 = 'We'; r2='walked'; r3='down'; r4='the'; r5='road'}
	else if (currentex == '8 1 1') {show = 'He lives by the river.<br><button class="ogspace3">?</button>'; n1='5'; r1 = 'He'; r2='lives'; r3='by'; r4='the'; r5='river'}
	else if (currentex == '8 1 2') {show = 'He ran around the block.<br><button class="ogspace3">?</button>'; n1='5'; r1 = 'He'; r2='ran'; r3='around'; r4='the'; r5='block'}
	else if (currentex == '8 1 3') {show = 'She walked along the aisle.<br><button class="ogspace3">?</button>'; n1='5'; r1 = 'She'; r2='walked'; r3='along'; r4='the'; r5='aisle'}
	else if (currentex == '8 1 4') {show = 'My house is past the church.<br><button class="ogspace3">?</button>'; n1='6'; r1 = 'My'; r2='house'; r3='is'; r4='past'; r5='the'; r6='church'}
	else if (currentex == '8 1 5') {show = 'I can see him through the window.<br><button class="ogspace3">?</button>'; n1='7'; r1 = 'I'; r2='can'; r3='see'; r4='him'; r5='through'; r6='the'; r7='window'}
	else if (currentex == '8 1 6') {show = 'The school is across the street.<br><button class="ogspace3">?</button>'; n1='6'; r1 = 'The'; r2='school'; r3='is'; r4='across'; r5='the'; r6='street'}
	else if (currentex == '8 1 7') {show = 'The blue line goes up.<br><button class="ogspace3">?</button>'; n1='5'; r1 = 'The'; r2='blue'; r3='line'; r4='goes'; r5='up'}
	else if (currentex == '8 1 8') {show = 'He was coming toward her.<br><button class="ogspace3">?</button>'; n1='5'; r1 = 'He'; r2='was'; r3='coming'; r4='toward'; r5='her'}
	else if (currentex == '8 1 9') {show = 'Tom is at the back of the library.<br><button class="ogspace3">?</button>'; n1='8'; r1 = 'Tom'; r2='is'; r3='at'; r4='the'; r5='back'; r6='of'; r7='the'; r8='library'}
	else if (currentex == '8 2 0') {show = 'He lives here since January.<br><button class="ogspace3">?</button>'; n1='5'; r1 = 'He'; r2='lives'; r3='here'; r4='since'; r5='January'}
	else if (currentex == '8 2 1') {show = 'She waited for half an hour.<br><button class="ogspace3">?</button>'; n1='6'; r1 = 'She'; r2='waited'; r3='for'; r4='half'; r5='an'; r6='hour'}
	else if (currentex == '8 2 2') {show = 'They didn´t get here until this afternoon.<br><button class="ogspace3">?</button>'; n1='7'; r1 = 'They'; r2='didn´t'; r3='get'; r4='here'; r5='until'; r6='this'; r7="afternoon"}
	else if (currentex == '8 2 3') {show = 'We were awake through the night.<br><button class="ogspace3">?</button>';n1='6'; r1 = 'We'; r2='were'; r3='awake'; r4='through'; r5='the'; r6='night'}
	else if (currentex == '8 2 4') {show = 'They will arrive by tomorrow.<br><button class="ogspace3">?</button>';n1='5'; r1 = 'They'; r2='will'; r3='arrive'; r4='by'; r5='tomorrow'}
	else if (currentex == '8 2 5') {show = 'He called about fifteen times.<br><button class="ogspace3">?</button>';n1='5'; r1 = 'He'; r2='called'; r3='about'; r4='fifteen'; r5='times'}
	else if (currentex == '8 2 6') {show = 'She studied after lunch.<br><button class="ogspace3">?</button>';n1='4'; r1 = 'She'; r2='studied'; r3='after'; r4='lunch'}
	else if (currentex == '8 2 7') {show = 'Call me before you leave town.<br><button class="ogspace3">?</button>';n1='6'; r1 = 'Call'; r2='me'; r3='before'; r4='you'; r5='leave'; r6='town'}
	else if (currentex == '8 2 8') {show = 'He came at noon.<br><button class="ogspace3">?</button>';n1='4'; r1 = 'He'; r2='came'; r3='at'; r4='noon'}
	else if (currentex == '8 2 9') {show = 'Dinner is server around five o´clock.<br><button class="ogspace3">?</button>';n1='6'; r1 = 'Dinner'; r2='is'; r3='served'; r4='around'; r5='five'; r6='o´clock'}
	else if (currentex == '8 3 0') {show = 'I am writing you <button class="ogspace3">?</button> your proposal.'; r1 = 'with regard to'; r2='instead of'}
	else if (currentex == '8 3 1') {show = '<button class="ogspace3">?</button> our records, we have not recieved your payments.'; r1 = 'According to'; r2='In consideration'}
	else if (currentex == '8 3 2') {show = 'My parents are safe <button class="ogspace3">?</button> the accident.'; r1 = 'instead of'; r2='in spite of'}
	else if (currentex == '8 3 3') {show = '<button class="ogspace3">?</button> reading the book, Sally and I went to see the movie.'; r1 = 'In spite of'; r2='Instead of'}
	else if (currentex == '8 3 4') {show = 'Kelly was interviewed <button class="ogspace3">?</button>  her job performance.'; r1 = 'in regard to'; r2='in case of'}
	else if (currentex == '8 3 5') {show = '<button class="ogspace3">?</button> the new state regulations, smoking is not allowed here anymore.'; r1 = 'By way of'; r2='In accordance with'}
	else if (currentex == '8 3 6') {show = '<button class="ogspace3">?</button> what her brother thinks, she believes she can be a pilot.'; r1 = 'Because of'; r2='Contrary to'}
	else if (currentex == '8 3 7') {show = '<button class="ogspace3">?</button> your own health, quit smoking.'; r1 = 'In case of'; r2='For the sake of'}
	else if (currentex == '8 3 8') {show = '<button class="ogspace3">?</button> any emergency, call me at Edward’s house.'; r1 = 'In respect to'; r2='In case of'}
	else if (currentex == '8 3 9') {show = '<button class="ogspace3">?</button> the present letter I request your approval.'; r1 = 'By means of'; r2='On account of'}

	else if (currentex == '9 1 0') {show = 'John eats at home, and I do <button class="ogspace2">?</button> .'; r1 = 'also'; r2='too'; r3='so'}
	else if (currentex == '9 1 1') {show = 'Helen speaks English. Susan <button class="ogspace2">?</button> speaks English.'; r1 = 'also'; r2='too'; r3='so'}
	else if (currentex == '9 1 2') {show = 'He wants to dance and <button class="ogspace2">?</button> do I.'; r1 = 'also'; r2='too'; r3='so'}
	else if (currentex == '9 1 3') {show = 'The blouse was expensive and <button class="ogspace2">?</button> the jacket.'; r1 = 'also'; r2='too'; r3='so'}
	else if (currentex == '9 1 4') {show = 'Sheila likes dogs. Me <button class="ogspace2">?</button> .'; r1 = 'also'; r2='too'; r3='so'}
	else if (currentex == '9 1 5') {show = 'They study at the community college and <button class="ogspace2">?</button> do we.'; r1 = 'also'; r2='too'; r3='so'}
	else if (currentex == '9 1 6') {show = 'Alice wants a salad but <button class="ogspace2">?</button> a steak.'; r1 = 'also'; r2='too'; r3='so'}
	else if (currentex == '9 1 7') {show = 'I prefer mystery novels and <button class="ogspace2">?</button> does Peter.'; r1 = 'also'; r2='too'; r3='so'}
	else if (currentex == '9 1 8') {show = 'She will arrive tomorrow. John will <button class="ogspace2">?</button> arrive tomorrow.'; r1 = 'also'; r2='too'; r3='so'}
	else if (currentex == '9 1 9') {show = 'I like fruit. Paul <button class="ogspace2">?</button> likes fruit.'; r1 = 'also'; r2='too'; r3='so'}
	else if (currentex == '9 2 0') {show = 'He is a <button class="ogspace3">?</button> pianist.'; r1 = 'good'; r2='well'}
	else if (currentex == '9 2 1') {show = 'These exercises are <button class="ogspace3">?</button> for you.'; r1 = 'good'; r2='well'}
	else if (currentex == '9 2 2') {show = 'She speaks French very <button class="ogspace3">?</button> .'; r1 = 'good'; r2='well'}
	else if (currentex == '9 2 3') {show = 'My brother is a <button class="ogspace3">?</button> student.'; r1 = 'good'; r2='well'}
	else if (currentex == '9 2 4') {show = 'His brother is also a <button class="ogspace3">?</button> tennis player.'; r1 = 'good'; r2='well'}
	else if (currentex == '9 2 5') {show = 'He plays the piano very <button class="ogspace3">?</button> .'; r1 = 'good'; r2='well'}
	else if (currentex == '9 2 6') {show = 'The book is very <button class="ogspace3">?</button> written.'; r1 = 'good'; r2='well'}
	else if (currentex == '9 2 7') {show = 'Mary does her homework <button class="ogspace3">?</button> .'; r1 = 'good'; r2='well'}
	else if (currentex == '9 2 8') {show = 'John plays tennis <button class="ogspace3">?</button> .'; r1 = 'good'; r2='well'}
	else if (currentex == '9 2 9') {show = 'Mary cooks quite <button class="ogspace3">?</button> .'; r1 = 'good'; r2='well'}
	else if (currentex == '9 3 0') {show = 'They came <button class="ogspace3">?</button> stole all our things.'; r1 = 'and'; r2='but'}
	else if (currentex == '9 3 1') {show = 'John was working extra hours, <button class="ogspace3">?</button> he wanted to save money for his tuition.'; r1 = 'or'; r2='for'}
	else if (currentex == '9 3 2') {show = 'Everybody <button class="ogspace3">?</button> Susan got early to class.'; r1 = 'nor'; r2='but'}
	else if (currentex == '9 3 3') {show = 'She is always complaining about her job, <button class="ogspace3">?</button> she continues to work there.'; r1 = 'yet'; r2='so'}
	else if (currentex == '9 3 4') {show = 'You have to study <button class="ogspace3">?</button> you are going to fail the test.'; r1 = 'or'; r2='and'}
	else if (currentex == '9 3 5') {show = 'Helen was sick <button class="ogspace3">?</button> she took some medicine.'; r1 = 'nor'; r2='so'}
	else if (currentex == '9 3 6') {show = 'I am busy <button class="ogspace3">?</button> I will go.'; r1 = 'but'; r2='so'}
	else if (currentex == '9 3 7') {show = 'The homework is hard <button class="ogspace3">?</button> she will still do it.'; r1 = 'nor'; r2='but'}
	else if (currentex == '9 3 8') {show = 'The food smells good <button class="ogspace3">?</button> I will try it.'; r1 = 'so'; r2='but'}
	else if (currentex == '9 3 9') {show = 'We did not go to the park <button class="ogspace3">?</button> the restaurant.'; r1 = 'so'; r2='nor'}
	else if (currentex == '9 4 0') {show = 'He acted <button class="ogspace3">?</button> he was the president of the company.'; r1 = 'as from'; r2='as if'}
	else if (currentex == '9 4 1') {show = 'She called <button class="ogspace3">?</button> she was worried about you.'; r1 = 'because'; r2='although'}
	else if (currentex == '9 4 2') {show = '<button class="ogspace3">?</button> we do our jobs, our boss will not be satisfied.'; r1 = 'Unless'; r2='Since'}
	else if (currentex == '9 4 3') {show = 'He comes to visit <button class="ogspace3">?</button> he feels like it.'; r1 = 'wherever'; r2='whenever'}
	else if (currentex == '9 4 4') {show = 'It is not a good place to live <button class="ogspace3">?</button> he lives now.'; r1 = 'where'; r2='whereas'}
	else if (currentex == '9 4 5') {show = '<button class="ogspace3">?</button> she is far away, she calls to stay in touch.'; r1 = 'In order that'; r2='Even though'}
	else if (currentex == '9 4 6') {show = 'You are going to wash your clothes<button class="ogspace3">?</button> today.'; r1 = 'as if'; r2='as from'}
	else if (currentex == '9 4 7') {show = '<button class="ogspace3">?</button> you know everything, tell me my future.'; r1 = 'Since'; r2='While'}
	else if (currentex == '9 4 8') {show = 'You can go with us <button class="ogspace3">?</button> you behave.'; r1 = 'even though'; r2='as long as'}
	else if (currentex == '9 4 9') {show = 'She told me <button class="ogspace3">?</button> to use the internet.'; r1 = 'in case'; r2='how'}

	else if (currentex == '10 1 0') {show = 'Please, give me <button class="ogspace3">?</button> coffee.'; r1 = 'some'; r2='any'}
	else if (currentex == '10 1 1') {show = 'This tea does not have <button class="ogspace3">?</button> sugar.'; r1 = 'some'; r2='any'}
	else if (currentex == '10 1 2') {show = 'I never have <button class="ogspace3">?</button> trouble with my car.'; r1 = 'some'; r2='any'}
	else if (currentex == '10 1 3') {show = 'I wanted to buy <button class="ogspace3">?</button> new clothes.'; r1 = 'some'; r2='any'}
	else if (currentex == '10 1 4') {show = 'Put <button class="ogspace3">?</button> water in the pitcher.'; r1 = 'some'; r2='any'}
	else if (currentex == '10 1 5') {show = 'Can you give me <button class="ogspace3">?</button> of that food?'; r1 = 'some'; r2='any'}
	else if (currentex == '10 1 6') {show = 'I do not have <button class="ogspace3">?</button> money right now.'; r1 = 'some'; r2='any'}
	else if (currentex == '10 1 7') {show = 'I need <button class="ogspace3">?</button> lemons.'; r1 = 'some'; r2='any'}
	else if (currentex == '10 1 8') {show = 'We do not have <button class="ogspace3">?</button> problem.'; r1 = 'some'; r2='any'}
	else if (currentex == '10 1 9') {show = 'Is there <button class="ogspace3">?</button> reason for your delay?'; r1 = 'some'; r2='any'}





































































	//Crear Instrucciones
	getIns = document.querySelector(".oginstructions");
	if (currentype=='1 1') {ins1='Select the correct form of the verb "to be".'}
	else if (currentype=='1 2') {ins1='Fill in the blanks using “a”, “an”, or “the” according to the sentence.'}
	else if (currentype=='1 3') {ins1='Fill in the blanks according to the correct demonstrative pronoun.'}
	else if (currentype=='2 1') {ins1='Fill in the blanks with the correct word according to the sentence: “much” – “many”.'}
	else if (currentype=='2 2') {ins1='Fill in the blanks with “who” or “whom” according to the question.'}
	else if (currentype=='3 1') {ins1='Select the correct verb according to the rules for present participle verbs.'}	
	else if (currentype=='3 2') {ins1='Select the action verb in the following sentences:'}	
	else if (currentype=='3 3') {ins1='Select the adjectives in the following sentences:'}	
	else if (currentype=='5 1') {ins1='Select the indefinite pronouns in the following sentences:'}
	else if (currentype=='5 2') {ins1='Select the comparative or superlative form in parenthesis that better fits the sentence.'}
	else if (currentype=='6 1') {ins1='Fill in the blanks with the negative form using the auxiliaries: “do not” – “does not”'}
	else if (currentype=='6 2') {ins1='Select the correct relative pronoun according to the sentence.'}
	else if (currentype=='7 1') {ins1='Fill in the blanks with the correct word according to the sentence.'}
	else if (currentype=='7 2') {ins1='Fill in the blanks with the corresponding reflexive pronoun according to the sentence.'}
	else if (currentype=='7 3') {ins1='Choose the best synonym for the following words:'}
	else if (currentype=='8 1') {ins1='Select the prepositions of direction used in the following sentences.'}
	else if (currentype=='8 2') {ins1='Select the prepositions of time used in the following sentences.'}
	else if (currentype=='8 3') {ins1='Select the correct compound preposition according to the sentence.'}
	else if (currentype=='9 1') {ins1='Fill in the blanks with the correct word according to the sentence: “also,” “too,” or “so”.'}
	else if (currentype=='9 2') {ins1='Fill in the blanks with the correct word according to the sentence: “good” or “well”.'}
	else if (currentype=='9 3') {ins1='Select the correct coordinading conjunction according to the sentence.'}
	else if (currentype=='9 4') {ins1='Select the correct subordinating conjunction.'}
	else if (currentype=='10 1') {ins1='Fill in the blanks with the correct word according to the sentence: “some” or “any”.'}
	







	//Crear Respuestas

	unit1answers1 = ["bruh","They are absent today.","The door is open.", "You are in the city.", "They are my parents.",
						"Katy and John are cousins.", "William and Robert are good policemen.","I am your uncle.","Miss Johnson is a terrific teacher.",
						"The chair is red.", "It is a good book.","There is an eraser on the desk.","The English book is on the table.",
						"The children are in the yard.","There is a pen on the counter.","The tree is green.", "Are you in the living room?",
						"There is a dress on the bed.","The baby is in the room.","That is a beautiful car.","The house is big.", 
						"This is my notebook.","These are my shoes.","This is my pen.","These are my books.","This is my brother.","Those are my neigbors.","That is my pet.","That is my car.","Those are my toys.","That is my cousin Peter."];
	unit1answers2 = ["bruh","are","is","are","are","are","are","am","is","is","is",  "an","the","the","a","the","the","a","the","a","the",  "This","These","This","These","This","Those","That","That","Those","That"];
	
	unit2answers1=["bruh", "There are many rooms.","There is much coffee in the coffeepot.","There are many glasses of water.","There is not much sugar in my tea.","The dish has much spice.",
					"There are many cups of coffee.","There are many toys in the store.","There is much flour in the canister.","There are many reasons for being absent.","He has many things to do.",
					"Whom are you waiting for?","Who is your teacher?","Who is at the door?","Whom are they asking for?","Whom are you talking to?",
					"Who is your friend?","Whom are they calling?","Who are you?","Who gave you this?","Whom did she play with?"];
	unit2answers2=["bruh","many","much","many","much","much","many","many","much","many","many", "Whom","Who","Who","Whom","Whom","Who","Whom","Who","Who","Whom"];

	unit3answers1=["bruh","Alice is playing in the park.","Tom and John are studying English.","We are planning a party.","She is referring to you.","They are openning a new restaurant",
					"You are giving him an expensive present.","He is putting the car in the parking lot.","They are enjoying their new apartment.","We are beginning to feel sick.","I am tying my shoelace.",
					"They are burning all the papers.","They were not arresting him last night.","We were attending the ceremony.","They are working together.","Is she eating in the living room?",
					"She is not brushing her hair.","She was not breathing.","God is blessing you.","Are you asking me?","You were not answering the questions."];

	unit3answers2=["bruh","playing","studying","planning","referring","openning","giving","putting","enjoying","beginning","tying", "burning","arresting","attending","working","eating","brushing","breathing","blessing","asking","answering"];

	unit5answers1=["bruh","Everyone was having a good time at the party.","Someone was calling you last night.","Nobody is seeing the show because it is boring.","Both of my parents are at the concert.","They love each other very much.",
					"They were playing against the others.","Several companies are on strike.","His mistakes were just a few."," Somebody was knocking at the door.","Neither one of us is correct.",
					"I live farther than you from school.","It is the least important of all.","I love you more than anyone.","He is the best singer.","This movie is the worst of all.",
					"He is taller than his brothers.","My dish is tastier than yours.","We play better than any other team.","She gave me the best gift.","Her dog is bigger than the rest."]
	unit5answers2=["bruh","Everyone","Someone","Nobody","Both","each other","others","Several","few","Somebody","Neither", "farther than","the least","more than","the best","the worst","taller than","tastier than","better than","the best","bigger than"];


	unit6answers1=["bruh","Sonia does not hunt deer.","I do not follow the instructions.","They do not improve their grades.","Animals do not know how to speak.","She does not hang her dirty clothes",
					"Mark does not like lemon pie.","My parents do not like him.","Susan does not eat meat.","The children do not like to work.","Pat does not play basketball anymore.",
					"The book that I will read is yours.","The teacher with whom we were studying is sick.","It is Esther who is calling you.","The car that John uses is mine.","The girls whom are in my class are good students.",
					"John is the boy whom my sister is dating.","The man whom I was talking to is not my relative.","The books that arrived are the best books around.","Both of the trips that we chose were canceled.","The students that are here today are studying English."];

	unit6answers2=["bruh","does not","do not","do not","do not","does not","does not","do not","does not","do not","does not", "that","whom","who","that","whom","whom","whom","that","that","that"];

	unit7answers1=["bruh","I always tell you the truth.","John says that he feels tired today.","Mary said that her sister was sick.","She said that she wasgoing to the doctor.","Peter said that he is coming next weekend.",
				"They said that they were busy.","He tells us the same jokes all the time.","They told us that you lived in Montana.","We told you to be quiet.","Alice and John told them to bring their car.",
				"We all enjoyed ourselves very much at the party.","I want to do the homework by myself.","My father shaves himself every morning.","He says that he, himself, will give you the present.","The girl looked at herself in the mirror.",
				"I bought a new English book for myself.","Mr. Jones himself will give a speech to the students.","Alice ate the cookies by herself.","My youngest brother can jump the fence by himself.","They are painting their house by themseves.",
				"Surprised - Amazed","Scared - Afraid","Glad - Happy","Sad - Unhappy","Anxious - Desperate","Upset - Angry","Huge - Enormous","Appealing - Attractive","Worried - Preocupied","Tired - Exhausted"];
	
	unit7answers2=["bruh","tell","says","said","said","said","said","tells","told","told","told", "ourselves","myself","himself","himself","herself","myself","himself","herself","himself","themselves",
					"Amazed","Afraid","Happy","Unhappy","Desperate","Angry","Enormous","Attractive","Preocupied","Exhausted"];

	unit8answers1=["bruh","We walked down the road.","He lives by the river.","He ran around the block","She walked along the aisle.","My house is past the church.","I can see him through the window.",
					"The school is across the street.","The blue line goes up.","He was coming toward her.","Tom lives at the back of the library.",
					"He lives here since January.","She waited for half an hour.","They didn´t get here until this afternoon.","We were awake through the night.",
					"They will arrive by tomorrow.","He called about fifteen times.","She studied after lunch.","Call me before you leave town.","He came at noon.","Dinner is server around five o´clock.",
					"I am writing you with regard to your proposal.","According to our records, we have not recieved your payment.","My parents are safe in spite of the accident.","Instead of reading the book, Sally and I went to see the movie.","Kelly was interviewed in regard to her job performance.",
					"In accordance with the new state regulations, smoking is not allowed here anymore.","Contrary to what her brother thinks, she believes she can be a pilot.","For the sake of your own health, quit smoking.","In case of any emergency, call me at Edward´s house.","By means of the present letter I request your approval."];

	unit8answers2=["bruh","down","by","around","along","past","through","across","up","toward","back", "since","for","until","through","by","about","after","before","at","around",
					"with regard to","According to","in spite of","Instead of","in regard to","In accordance with","Contrary to","For the sake of","In case of","By means of"];


	unit9answers1=["bruh","John eats at home, and I do too.","Helen speaks English. Susan also speaks English.","He wants to dance and so do I.","The blouse was expensive and also the jacket.","Sheila likes dogs. Me too.",
				"They study at the community college and so do we.","Alice wants a salad but also a steak.","I prefer mustery novel and so does Peter.","She will arrive tomorrow, John will also arrive tomorrow.","I like fruit. Paul also likes fruit.",
				"He is a good pianist.","These exercises are good for you.","She speaks French very well","My brother is a good student.","His brother is also a good tennis player",
				"He plays the piano very well.","The book is very well written.","Mary dows her homework well.","John plays tennis well.","Mary cooks quite well.",
				"They came and stole all our things.","John was working extra hours, for he wanted to save money for his tuition.","Everybody but Susan got early to class.","She is always complaining about her job, yet she continues to work there.","You have to study or you are going to fail the test.",
				"Helen was sick, so she took some medicine.","I am busy but I will go.","The homework is hard but she will still do it.","The food smells good so I will try it.","We did not go to the park, nor the restaurant.",
				"He acted as if he was the president of the company.","She called because she was worried about you.","Unless we do our jobs, our boss will not be satisfied.","He comes to visit whenever he feels like it.","It is not a good place to live where he lives now.",
				"Even though she is far away, she calls to stay in touch.","You are going to wash your clothes as from today.","Since you know everything, tell me my future,","You can go with us as long as you behave.","She told me how to use the internet."];

	unit9answers2=["bruh","too","also","so","also","too","so","also","so","also","also", "good","good","well","good","good","well","well","well","well","well",
				"and","for","but","yet","or","so","but","but","so","nor", "as if","because","Unless","whenever","where","Even though","as from","Since","as long as","how"];


	unit10answers1=["bruh","Please, give me some coffee.","This tea does not have any sugar.","I never have any trouble with my car.","I wanted to buy some new clothes.","Put some water in the pitcher.",
					"Can you give me some of that food?","I do not have any money right now.","I need some lemons.","We do not have any problem.","Is there any reason for your delay?"];

	unit10answers2=["bruh","some","any","any","some","some","some","any","some","any","any"];

	console.log('current'+currentex);
	console.log(show);

	CheckGenero();

	//Generar Contenido

	getIns.innerHTML = '<h4>'+ins1+'</h4><br></div>';

	console.log("antes de checar"+currentype);

		if (currentype=='2 2') {
				getExcercise.innerHTML = '<div class="ogcentered"><h4 class="ogtitle2">'+ins2+'</h4></div>'+
										'<h4 id="ogtext">'+NoOrden+'. '+show+'</h4>'+
								'<div class="ogcentered2">'+
								'<div class="ogbox4"><button onclick="press2Button1();" id="abutton" class="fluid ui button">'+r1+'</button></div>'+
								'<div class="ogbox4"><button onclick="press2Button2();" id="anbutton"class="fluid ui button">'+r2+'</button></div>'+
							'</div>';
			}

	else if (ExGenero=="2r" && currentype!='2 2') {
			getExcercise.innerHTML = '<h4 id="ogtext">'+NoOrden+'. '+show+'</h4>'+
								'<div class="ogcentered2">'+
								'<div class="ogbox4"><button onclick="press2Button1();" id="abutton" class="fluid ui button">'+r1+'</button></div>'+
								'<div class="ogbox4"><button onclick="press2Button2();" id="anbutton"class="fluid ui button">'+r2+'</button></div>'+
							'</div>';

		console.log("despues de checar"+currentype);
	}
	else if (ExGenero=="3r") {
		
					getExcercise.innerHTML = '<h4 id="ogtext">'+NoOrden+'. '+show+'</h4>'+
								'<div class="ogcentered2">'+
								'<div class="ogbox6"><button onclick="press3Button1();" id="abutton" class="fluid ui button">'+r1+'</button></div>'+
								'<div class="ogbox6"><button onclick="press3Button2();" id="anbutton"class="fluid ui button">'+r2+'</button></div>'+
								'<div class="ogbox6"><button onclick="press3Button3();" id="abutton2"class="fluid ui button">'+r3+'</button></div>'+
							'</div>';
		


	}
	else if (ExGenero=="4r") {
		if (ExUnits==1) {	getExcercise.innerHTML = '<div class="ogcentered"><h4 class="ogtitle2">'+ins2+'</h4></div>'+
									'<h4 id="ogtext">'+NoOrden+'. '+show+'</h4>'+
									'<div class="ogcentered2">'+
									'<div class="ogbox4"><button onclick="pressButton1();" id="abutton" class="fluid ui button">'+r1+'</button></div>'+
									'<div class="ogbox4"><button onclick="pressButton2();" id="anbutton"class="fluid ui button">'+r2+'</button></div>'+
									'<br>'+
									'<div class="ogbox5"><button onclick="pressButton3();" id="abutton2"class="fluid ui button">'+r3+'</button></div>'+
									'<div class="ogbox5"><button onclick="pressButton4();" id="anbutton2"class="fluid ui button">'+r4+'</button></div>'+
								'</div>';
							}
		if (ExUnits==7) {
			getExcercise.innerHTML = '<h4 id="ogtext">'+NoOrden+'. '+show+'</h4>'+
									'<div class="ogcentered2">'+
									'<div class="ogbox4"><button onclick="pressButton1();" id="abutton" class="fluid ui button">'+r1+'</button></div>'+
									'<div class="ogbox4"><button onclick="pressButton2();" id="anbutton"class="fluid ui button">'+r2+'</button></div>'+
									'<br>'+
									'<div class="ogbox5"><button onclick="pressButton3();" id="abutton2"class="fluid ui button">'+r3+'</button></div>'+
									'<div class="ogbox5"><button onclick="pressButton4();" id="anbutton2"class="fluid ui button">'+r4+'</button></div>'+
								'</div>';
		}
	
	}
	else if (ExGenero=="subr") {
		if (n1==4) {
			getExcercise.innerHTML = '<h4 id="ogtext">'+NoOrden+'. '+show+'</h4>'+
									'<div class="ogcentered2">'+
									'<button onclick="pmb1();" id="ogbutton0" class="ui button">'+r1+'</button>'+
									'<button onclick="pmb2();" id="ogbutton1" class="ui button">'+r2+'</button>'+
									'<br>'+
									'<button onclick="pmb3();" id="ogbutton2" class="ui button">'+r3+'</button>'+
									'<button onclick="pmb4();" id="ogbutton3" class="ui button">'+r4+'</button>'+
									'</div>';
		}
			else if (n1==5) {
			getExcercise.innerHTML = '<h4 id="ogtext">'+NoOrden+'. '+show+'</h4>'+
									'<div class="ogcentered2">'+
									'<button onclick="pmb1();" id="ogbutton0" class="ui button">'+r1+'</button>'+
									'<button onclick="pmb2();" id="ogbutton1" class="ui button">'+r2+'</button>'+
									'<button onclick="pmb3();" id="ogbutton2" class="ui button">'+r3+'</button>'+
									'<br>'+
									'<button onclick="pmb4();" id="ogbutton3" class="ui button">'+r4+'</button>'+
									'<button onclick="pmb5();" id="ogbutton4" class="ui button">'+r5+'</button>'+
									'</div>';
			}
			else if (n1==6) {
		getExcercise.innerHTML = '<h4 id="ogtext">'+NoOrden+'. '+show+'</h4>'+
									'<div class="ogcentered2">'+
									'<button onclick="pmb1();" id="ogbutton0" class="ui button">'+r1+'</button>'+
									'<button onclick="pmb2();" id="ogbutton1" class="ui button">'+r2+'</button>'+
									'<button onclick="pmb3();" id="ogbutton2" class="ui button">'+r3+'</button>'+
									'<br>'+
									'<button onclick="pmb4();" id="ogbutton3" class="ui button">'+r4+'</button>'+
									'<button onclick="pmb5();" id="ogbutton4" class="ui button">'+r5+'</button>'+
									'<button onclick="pmb6();" id="ogbutton5" class="ui button">'+r6+'</button>'+
									'</div>';
	}
		else if (n1==7) {
		getExcercise.innerHTML = '<h4 id="ogtext">'+NoOrden+'. '+show+'</h4>'+
									'<div class="ogcentered2">'+
									'<button onclick="pmb1();" id="ogbutton0" class="ui button">'+r1+'</button>'+
									'<button onclick="pmb2();" id="ogbutton1" class="ui button">'+r2+'</button>'+
									'<button onclick="pmb3();" id="ogbutton2" class="ui button">'+r3+'</button>'+
									'<br>'+
									'<button onclick="pmb4();" id="ogbutton3" class="ui button">'+r4+'</button>'+
									'<button onclick="pmb5();" id="ogbutton4" class="ui button">'+r5+'</button>'+
									'<button onclick="pmb6();" id="ogbutton5" class="ui button">'+r6+'</button>'+
									'<br>'+
									'<button onclick="pmb7();" id="ogbutton6" class="ui button">'+r7+'</button>'+
									'</div>';
	}
		else if (n1==8) {
		getExcercise.innerHTML = '<h4 id="ogtext">'+NoOrden+'. '+show+'</h4>'+
									'<div class="ogcentered2">'+
									'<button onclick="pmb1();" id="ogbutton0" class="ui button">'+r1+'</button>'+
									'<button onclick="pmb2();" id="ogbutton1" class="ui button">'+r2+'</button>'+
									'<button onclick="pmb3();" id="ogbutton2" class="ui button">'+r3+'</button>'+
									'<br>'+
									'<button onclick="pmb4();" id="ogbutton3" class="ui button">'+r4+'</button>'+
									'<button onclick="pmb5();" id="ogbutton4" class="ui button">'+r5+'</button>'+
									'<button onclick="pmb6();" id="ogbutton5" class="ui button">'+r6+'</button>'+
									'<br>'+
									'<button onclick="pmb7();" id="ogbutton6" class="ui button">'+r7+'</button>'+
									'<button onclick="pmb8();" id="ogbutton7" class="ui button">'+r8+'</button>'+
									'</div>';
	}
		}




	else if (ExGenero=="multr") {
		if (n1==4) {
			getExcercise.innerHTML = '<h4 id="ogtext">'+NoOrden+'. '+show+'</h4>'+
									'<div class="ogcentered2">'+
									'<button onclick="bb1();" id="ogbutton0" class="ui button">'+r1+'</button>'+
									'<button onclick="bb2();" id="ogbutton1" class="ui button">'+r2+'</button>'+
									'<br>'+
									'<button onclick="bb3();" id="ogbutton2" class="ui button">'+r3+'</button>'+
									'<button onclick="bb4();" id="ogbutton3" class="ui button">'+r4+'</button>'+
									'</div>';
		}
			else if (n1==5) {
			getExcercise.innerHTML = '<h4 id="ogtext">'+NoOrden+'. '+show+'</h4>'+
									'<div class="ogcentered2">'+
									'<button onclick="bb1();" id="ogbutton0" class="ui button">'+r1+'</button>'+
									'<button onclick="bb2();" id="ogbutton1" class="ui button">'+r2+'</button>'+
									'<button onclick="bb3();" id="ogbutton2" class="ui button">'+r3+'</button>'+
									'<br>'+
									'<button onclick="bb4();" id="ogbutton3" class="ui button">'+r4+'</button>'+
									'<button onclick="bb5();" id="ogbutton4" class="ui button">'+r5+'</button>'+
									'</div>';
			}
			else if (n1==6) {
		getExcercise.innerHTML = '<h4 id="ogtext">'+NoOrden+'. '+show+'</h4>'+
									'<div class="ogcentered2">'+
									'<button onclick="bb1();" id="ogbutton0" class="ui button">'+r1+'</button>'+
									'<button onclick="bb2();" id="ogbutton1" class="ui button">'+r2+'</button>'+
									'<button onclick="bb3();" id="ogbutton2" class="ui button">'+r3+'</button>'+
									'<br>'+
									'<button onclick="bb4();" id="ogbutton3" class="ui button">'+r4+'</button>'+
									'<button onclick="bb5();" id="ogbutton4" class="ui button">'+r5+'</button>'+
									'<button onclick="bb6();" id="ogbutton5" class="ui button">'+r6+'</button>'+
									'</div>';
	}
		else if (n1==7) {
		getExcercise.innerHTML = '<h4 id="ogtext">'+NoOrden+'. '+show+'</h4>'+
									'<div class="ogcentered2">'+
									'<button onclick="bb1();" id="ogbutton0" class="ui button">'+r1+'</button>'+
									'<button onclick="bb2();" id="ogbutton1" class="ui button">'+r2+'</button>'+
									'<button onclick="bb3();" id="ogbutton2" class="ui button">'+r3+'</button>'+
									'<br>'+
									'<button onclick="bb4();" id="ogbutton3" class="ui button">'+r4+'</button>'+
									'<button onclick="bb5();" id="ogbutton4" class="ui button">'+r5+'</button>'+
									'<button onclick="bb6();" id="ogbutton5" class="ui button">'+r6+'</button>'+
									'<br>'+
									'<button onclick="bb7();" id="ogbutton6" class="ui button">'+r7+'</button>'+
									'</div>';
	}
		else if (n1==8) {
		getExcercise.innerHTML = '<h4 id="ogtext">'+NoOrden+'. '+show+'</h4>'+
									'<div class="ogcentered2">'+
									'<button onclick="bb1();" id="ogbutton0" class="ui button">'+r1+'</button>'+
									'<button onclick="bb2();" id="ogbutton1" class="ui button">'+r2+'</button>'+
									'<button onclick="bb3();" id="ogbutton2" class="ui button">'+r3+'</button>'+
									'<br>'+
									'<button onclick="bb4();" id="ogbutton3" class="ui button">'+r4+'</button>'+
									'<button onclick="bb5();" id="ogbutton4" class="ui button">'+r5+'</button>'+
									'<button onclick="bb6();" id="ogbutton5" class="ui button">'+r6+'</button>'+
									'<br>'+
									'<button onclick="bb7();" id="ogbutton6" class="ui button">'+r7+'</button>'+
									'<button onclick="bb8();" id="ogbutton7" class="ui button">'+r8+'</button>'+
									'</div>';
	}
	}



		ShowResults();
	}



	function checkUnit(){
		if (ExUnits == 1){currentlista = unit1answers1; currentlista2 = unit1answers2;}
		else if (ExUnits == 2){currentlista = unit2answers1; currentlista2 = unit2answers2;}
		else if (ExUnits == 3){currentlista = unit3answers1; currentlista2 = unit3answers2;}
		else if (ExUnits == 4){currentlista = unit4answers1; currentlista2 = unit4answers2;}
		else if (ExUnits == 5){currentlista = unit5answers1; currentlista2 = unit5answers2;}
		else if (ExUnits == 6){currentlista = unit6answers1; currentlista2 = unit6answers2;}
		else if (ExUnits == 7){currentlista = unit7answers1; currentlista2 = unit7answers2;}
		else if (ExUnits == 8){currentlista = unit8answers1; currentlista2 = unit8answers2;}
		else if (ExUnits == 9){currentlista = unit9answers1; currentlista2 = unit9answers2;}
		else if (ExUnits == 10){currentlista = unit10answers1; currentlista2 = unit10answers2;}
	}
function Generate(){
					getExcercise.innerHTML = '<h4 id="ogtext">'+NoOrden+'. '+show+'.</h4>'+
														'<div class="ogcentered2">'+
														'<div class="ogbox4"><button onclick="press2Button1();" id="abutton" class="fluid ui button">'+r1+'</button></div>'+
														'<div class="ogbox4"><button onclick="press2Button2();" id="anbutton"class="fluid ui button">'+r2+'</button></div>'+
													'</div>';
			
	
}

ExcerciseAnswer4 = "the";

function Calificar(){


	checkUnit();
	if (ExGenero == "2r") {
		if (ExcerciseNo == 0) {
			arrayRespuestas.push(ExcerciseAnswer3);
			if (ExType==1) {answer1 = currentlista[1];}
			else if (ExType==2) {answer1 = currentlista[11];}
			else if (ExType==3) {answer1 = currentlista[21];}
			else if (ExType==4) {answer1 = currentlista[31];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[21]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
			else if (ExType==4) {
				if (ExcerciseAnswer3==currentlista2[31]) {
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
			else if (ExType==3) {answer2 = currentlista[22];}
			else if (ExType==4) {answer2 = currentlista[32];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[22]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
			else if (ExType==4) {
				if (ExcerciseAnswer3==currentlista2[32]) {
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
			else if (ExType==3) {answer3 = currentlista[23];}
			else if (ExType==4) {answer3 = currentlista[33];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[23]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
			else if (ExType==4) {
				if (ExcerciseAnswer3==currentlista2[33]) {
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
			else if (ExType==3) {answer4 = currentlista[24];}
			else if (ExType==4) {answer4 = currentlista[34];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[24]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
			else if (ExType==4) {
				if (ExcerciseAnswer3==currentlista2[34]) {
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
			else if (ExType==3) {answer5 = currentlista[25];}
			else if (ExType==4) {answer5 = currentlista[35];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[25]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
			else if (ExType==4) {
				if (ExcerciseAnswer3==currentlista2[35]) {
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
			else if (ExType==3) {answer6 = currentlista[26];}
			else if (ExType==4) {answer6 = currentlista[36];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[26]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
			else if (ExType==4) {
				if (ExcerciseAnswer3==currentlista2[36]) {
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
			else if (ExType==3) {answer7 = currentlista[27];}
			else if (ExType==4) {answer7 = currentlista[37];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[27]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
			else if (ExType==4) {
				if (ExcerciseAnswer3==currentlista2[37]) {
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
			else if (ExType==3) {answer8 = currentlista[28];}
			else if (ExType==4) {answer8 = currentlista[38];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[28]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
			else if (ExType==4) {
				if (ExcerciseAnswer3==currentlista2[38]) {
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
			else if (ExType==3) {answer9 = currentlista[29];}
			else if (ExType==4) {answer9 = currentlista[39];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[29]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
			else if (ExType==4) {
				if (ExcerciseAnswer3==currentlista2[39]) {
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
			else if (ExType==3) {answer10 = currentlista[30];}
			else if (ExType==4) {answer10 = currentlista[40];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[30]) {
					correct1 = true;
					listadecorrects.push(correct1);
					numerodecorrectas = numerodecorrectas+1;
				}
				else{
					correct1 = false;
					listadecorrects.push(correct1);
				}
			}
			else if (ExType==4) {
				if (ExcerciseAnswer3==currentlista2[40]) {
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




	if (ExGenero == "3r") {

		if (ExcerciseNo==0) {
			if (ExType==1) {answer1 = currentlista[1];}
			else if (ExType==2) {answer1 = currentlista[11];}
			listaderespuestas.push(answer1);
			if (ExType==1) {
					if (ExcerciseAnswer3==currentlista2[1] && ExcerciseAnswer4 == "the") {
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
				if (ExcerciseAnswer3==currentlista2[11] && ExcerciseAnswer4 == "the") {
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


		if (ExcerciseNo==1) {
			if (ExType==1) {answer2 = currentlista[2];}
			else if (ExType==2) {answer2 = currentlista[12];}
			listaderespuestas.push(answer2);
			if (ExType==1) {
					if (ExcerciseAnswer3==currentlista2[2] && ExcerciseAnswer4 == "the") {
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
				if (ExcerciseAnswer3==currentlista2[12] && ExcerciseAnswer4 == "the") {
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


		if (ExcerciseNo==2) {
			if (ExType==1) {answer3 = currentlista[3];}
			else if (ExType==2) {answer3 = currentlista[13];}
			listaderespuestas.push(answer3);
			if (ExType==1) {
					if (ExcerciseAnswer3==currentlista2[3] && ExcerciseAnswer4 == "the") {
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
				if (ExcerciseAnswer3==currentlista2[13] && ExcerciseAnswer4 == "the") {
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


		if (ExcerciseNo==3) {
			if (ExType==1) {answer4 = currentlista[4];}
			else if (ExType==2) {answer4 = currentlista[14];}
			listaderespuestas.push(answer4);
			if (ExType==1) {
					if (ExcerciseAnswer3==currentlista2[4] && ExcerciseAnswer4 == "the") {
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
				if (ExcerciseAnswer3==currentlista2[14] && ExcerciseAnswer4 == "the") {
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


		if (ExcerciseNo==4) {
			if (ExType==1) {answer5 = currentlista[5];}
			else if (ExType==2) {answer5 = currentlista[15];}
			listaderespuestas.push(answer5);
			if (ExType==1) {
					if (ExcerciseAnswer3==currentlista2[5] && ExcerciseAnswer4 == "the") {
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
				if (ExcerciseAnswer3==currentlista2[15] && ExcerciseAnswer4 == "the") {
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


		if (ExcerciseNo==5) {
			if (ExType==1) {answer6 = currentlista[6];}
			else if (ExType==2) {answer6 = currentlista[16];}
			listaderespuestas.push(answer6);
			if (ExType==1) {
					if (ExcerciseAnswer3==currentlista2[6] && ExcerciseAnswer4 == "the") {
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
				if (ExcerciseAnswer3==currentlista2[16] && ExcerciseAnswer4 == "the") {
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


		if (ExcerciseNo==6) {
			if (ExType==1) {answer7 = currentlista[7];}
			else if (ExType==2) {answer7 = currentlista[17];}
			listaderespuestas.push(answer7);
			if (ExType==1) {
					if (ExcerciseAnswer3==currentlista2[7] && ExcerciseAnswer4 == "the") {
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
				if (ExcerciseAnswer3==currentlista2[17] && ExcerciseAnswer4 == "the") {
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


		if (ExcerciseNo==7) {
			if (ExType==1) {answer8 = currentlista[8];}
			else if (ExType==2) {answer8 = currentlista[18];}
			listaderespuestas.push(answer8);
			if (ExType==1) {
					if (ExcerciseAnswer3==currentlista2[8] && ExcerciseAnswer4 == "the") {
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
				if (ExcerciseAnswer3==currentlista2[18] && ExcerciseAnswer4 == "the") {
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


		if (ExcerciseNo==8) {
			if (ExType==1) {answer9 = currentlista[9];}
			else if (ExType==2) {answer9 = currentlista[19];}
			listaderespuestas.push(answer9);
			if (ExType==1) {
					if (ExcerciseAnswer3==currentlista2[9] && ExcerciseAnswer4 == "the") {
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
				if (ExcerciseAnswer3==currentlista2[19] && ExcerciseAnswer4 == "the") {
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


		if (ExcerciseNo==9) {
			if (ExType==1) {answer20 = currentlista[10];}
			else if (ExType==2) {answer20 = currentlista[20];}
			listaderespuestas.push(answer20);
			if (ExType==1) {
					if (ExcerciseAnswer3==currentlista2[10] && ExcerciseAnswer4 == "the") {
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
				if (ExcerciseAnswer3==currentlista2[20] && ExcerciseAnswer4 == "the") {
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


	if (ExGenero == "4r") {


		if (ExcerciseNo==0) {
			if (ExType==1) {answer1 = currentlista[1];}
			else if (ExType==3) {answer1 = currentlista[21];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[21]) {
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

		if (ExcerciseNo==1) {
			if (ExType==1) {answer2 = currentlista[2];}
			else if (ExType==3) {answer2 = currentlista[22];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[22]) {
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

		if (ExcerciseNo==2) {
			if (ExType==1) {answer3 = currentlista[3];}
			else if (ExType==3) {answer3 = currentlista[23];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[23]) {
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


		if (ExcerciseNo==3) {
			if (ExType==1) {answer4 = currentlista[4];}
			else if (ExType==3) {answer4 = currentlista[24];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[24]) {
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

		if (ExcerciseNo==4) {
			if (ExType==1) {answer5 = currentlista[5];}
			else if (ExType==3) {answer5 = currentlista[25];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[25]) {
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

		if (ExcerciseNo==5) {
			if (ExType==1) {answer6 = currentlista[6];}
			else if (ExType==3) {answer6 = currentlista[26];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[26]) {
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

		if (ExcerciseNo==6) {
			if (ExType==1) {answer7 = currentlista[7];}
			else if (ExType==3) {answer7 = currentlista[27];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[27]) {
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

		if (ExcerciseNo==7) {
			if (ExType==1) {answer8 = currentlista[8];}
			else if (ExType==3) {answer8 = currentlista[28];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[28]) {
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


		if (ExcerciseNo==8) {
			if (ExType==1) {answer9 = currentlista[9];}
			else if (ExType==3) {answer9 = currentlista[29];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[29]) {
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

		if (ExcerciseNo==9) {
			if (ExType==1) {answer10 = currentlista[10];}
			else if (ExType==3) {answer10 = currentlista[30];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[30]) {
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


	if (ExGenero=="subr") {
		if (ExcerciseNo == 0) {
			arrayRespuestas.push(ExcerciseAnswer3);
			if (ExType==1) {answer1 = currentlista[1];}
			else if (ExType==2) {answer1 = currentlista[11];}
			else if (ExType==3) {answer1 = currentlista[21];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[21]) {
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
			else if (ExType==3) {answer2 = currentlista[22];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[22]) {
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
			else if (ExType==3) {answer3 = currentlista[23];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[23]) {
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
			else if (ExType==3) {answer4 = currentlista[24];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[24]) {
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
			else if (ExType==3) {answer5 = currentlista[25];}
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
			else if (ExType==3) {
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
			else if (ExType==3) {answer6 = currentlista[26];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[26]) {
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
			else if (ExType==3) {answer7 = currentlista[27];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[27]) {
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
			else if (ExType==3) {answer8 = currentlista[28];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[28]) {
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
			else if (ExType==3) {answer9 = currentlista[29];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[29]) {
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
			else if (ExType==3) {answer10 = currentlista[30];}
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
			else if (ExType==3) {
				if (ExcerciseAnswer3==currentlista2[30]) {
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

//Multiples
if (ExGenero=="multr") {
	if (ExcerciseNo==0) {
		if (ExUnits==3) {
			listaderespuestas.push("Patty and Louise are good friends.");
		if (blue1==false && blue2==false && blue3==false && blue4==false && blue5==true && blue6==false && blue7==false && blue8==false) {
			correct1 = true;
			listadecorrects.push(correct1);
			numerodecorrectas = numerodecorrectas+1;
		}
		else{
			correct1 = false;
			listadecorrects.push(correct1);
			}
		}
		else if (ExUnits==5) {

		}

	}
	if (ExcerciseNo==1) {
		listaderespuestas.push("She is tall and beautiful.");
		if (blue1==false && blue2==false && blue3==true && blue4==false && blue5==true && blue6==false && blue7==false && blue8==false) {
			correct1 = true;
			listadecorrects.push(correct1);
			numerodecorrectas = numerodecorrectas+1;
		}
		else{
			correct1 = false;
			listadecorrects.push(correct1);
		}
	}
	if (ExcerciseNo==2) {
		listaderespuestas.push("They bought a new television.");
		if (blue1==false && blue2==false && blue3==false && blue4==true && blue5==false && blue6==false && blue7==false && blue8==false) {
			correct1 = true;
			listadecorrects.push(correct1);
			numerodecorrectas = numerodecorrectas+1;
		}
		else{
			correct1 = false;
			listadecorrects.push(correct1);
		}
	}
	if (ExcerciseNo==3) {
		listaderespuestas.push("He is a clever, smart and handsome lawyer.");
		if (blue1==false && blue2==false && blue3==false && blue4==true && blue5==true && blue6==false && blue7==true && blue8==false) {
			correct1 = true;
			listadecorrects.push(correct1);
			numerodecorrectas = numerodecorrectas+1;
		}
		else{
			correct1 = false;
			listadecorrects.push(correct1);
		}
	}
	if (ExcerciseNo==4) {
		listaderespuestas.push("My pet is aggressive and terrible with people.");
		if (blue1==false && blue2==false && blue3==false && blue4==true && blue5==false && blue6==true && blue7==false && blue8==false) {
			correct1 = true;
			listadecorrects.push(correct1);
			numerodecorrectas = numerodecorrectas+1;
		}
		else{
			correct1 = false;
			listadecorrects.push(correct1);
		}
	}
	if (ExcerciseNo==5) {
		listaderespuestas.push("I like red high heel shoes.");
		if (blue1==false && blue2==false && blue3==true && blue4==false && blue5==false && blue6==false && blue7==false && blue8==false) {
			correct1 = true;
			listadecorrects.push(correct1);
			numerodecorrectas = numerodecorrectas+1;
		}
		else{
			correct1 = false;
			listadecorrects.push(correct1);
		}
	}
	if (ExcerciseNo==6) {
		listaderespuestas.push("We have a red sports car.");
		if (blue1==false && blue2==false && blue3==false && blue4==true && blue5==false && blue6==false && blue7==false && blue8==false) {
			correct1 = true;
			listadecorrects.push(correct1);
			numerodecorrectas = numerodecorrectas+1;
		}
		else{
			correct1 = false;
			listadecorrects.push(correct1);
		}
	}
	if (ExcerciseNo==7) {
		listaderespuestas.push("We are a huge and happy family.");
		if (blue1==false && blue2==false && blue3==false && blue4==true && blue5==false && blue6==true && blue7==false && blue8==false) {
			correct1 = true;
			listadecorrects.push(correct1);
			numerodecorrectas = numerodecorrectas+1;
		}
		else{
			correct1 = false;
			listadecorrects.push(correct1);
		}
	}
	if (ExcerciseNo==8) {
		listaderespuestas.push("You are good and kind.");
		if (blue1==false && blue2==false && blue3==true && blue4==false && blue5==true && blue6==false && blue7==false && blue8==false) {
			correct1 = true;
			listadecorrects.push(correct1);
			numerodecorrectas = numerodecorrectas+1;
		}
		else{
			correct1 = false;
			listadecorrects.push(correct1);
		}
	}
	if (ExcerciseNo==9) {
		listaderespuestas.push("His attitude is rude and impolite.");
		if (blue1==false && blue2==false && blue3==false && blue4==true && blue5==false && blue6==true && blue7==false && blue8==false) {
			correct1 = true;
			listadecorrects.push(correct1);
			numerodecorrectas = numerodecorrectas+1;
		}
		else{
			correct1 = false;
			listadecorrects.push(correct1);
		}
	}

	if (currentype='3 3') {blue1=false; blue2=false; blue3=false; blue4=false; blue5=false; blue6=false; blue7=false; blue8=false;}


}


console.log("antes"+ExUnits);
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
	console.log(ExGenero);
	console.log(currentex);
	console.log("despues"+ExUnits);

}



let frase1 = "You did great!";
let frase2 = "Not bad!"
let frase3 = "Keep trying!";
let truefrase ="No bad!";
let banner = "banner"
let nina = "nina1"
console.log("unit unit unit"+ExUnits);
function checkFrase(){
	if (numerodecorrectas > 7) {
		truefrase = frase1;
		nina = "nina1";
	}
	else if (numerodecorrectas < 8 && numerodecorrectas > 4) {
		truefrase = frase2;
		nina = "nina2";
	}
	else if (numerodecorrectas < 5) {
		truefrase = frase3;
		nina = "nina3";
	}

	//checar banner

	if (ExUnits==1) {banner = "banner1";}
	else if (ExUnits==2) {banner = "banner2";}
	else if (ExUnits==3) {banner = "banner3";}
	else if (ExUnits==4) {banner = "banner4";}
	else if (ExUnits==5) {banner = "banner5";}
	else if (ExUnits==6) {banner = "banner6";}
	else if (ExUnits==7) {banner = "banner7";}
	else if (ExUnits==8) {banner = "banner8";}
	else if (ExUnits==9) {banner = "banner9";}
	else if (ExUnits==10) {banner = "banner10";}



}

function checkEnd(){

}



function ShowResults(){
//
checkFrase();
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
									'<div><img class="oggreenred" src="imgs/'+listadecorrects[9]+'.png"> <p class="oganswer"> 10. '+listaderespuestas[9]+'</p> </div>'+
									'<br>'+
									'<br>'+
									'<br>'+
									'<br>'+
									'<br>'+
									'<br>'+
									'<br>'+
									'<br>';
			
							getBotEnd.innerHTML =	'<div onclick="newType();">'+
													'<div class="ogendcont">'+
														'<img class="ogendimg" src="imgs2/actividades/'+banner+'.png">'+
													'</div>'+
													'<div class="ogendcont2">'+
														'<img class="ogendimg" src="imgs2/actividades/'+nina+'.png">'+
													'</div>'+
													'<div class="ogendtext">'+
														'<h2>'+numerodecorrectas+'/10</h2>'+
														'<h3>'+truefrase+'</h3>'+
													'</div>'+
													'</div>';


					removeButton.innerHTML = '<br><br><br><br><br><br>';
			

			
		} 
		else {

					getBotEnd.innerHTML =	'';
					removeButton.innerHTML = '<div class="ogbox3"><button id="ogdiss2" onclick="Calificar();" class="fluid ui blue disabled button">Next</button></div>';
					}
}

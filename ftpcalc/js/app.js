

function myFunction(){
	var FTP = document.getElementById("ftp-input").value;
	var a1Results = calcZone1(FTP);
	var a3Results = calcZone2(FTP, a1Results);
	var a5Results = calcZone3(FTP, a3Results);
	var a7Results = calcZone4(FTP, a5Results);
	var a9Results = calcZone5(FTP, a7Results);
	neuro();
	fadeCalc();

	function calcZone1(FTP) {
		a1 = Math.round(FTP * .55);
		document.getElementById("z1").innerHTML = '0 to ' + a1;	
		return a1;
	}

	function calcZone2(FTP, a1Results) {
		 var a2 = (a1Results + 1);
		 a3 = Math.round(FTP * .75);
		document.getElementById("z2").innerHTML = a2 + ' to ' + a3;
		return a3;
	}

	function calcZone3(FTP, a3Results) {
		var a4 = (a3Results + 1);
		a5 = Math.round(FTP * .90);
		document.getElementById("z3").innerHTML = a4 + ' to ' + a5;
		return a5;
	}

	function calcZone4(FTP, a5Results) {
		var a6 = (a5Results + 1);
		a7 = Math.round(FTP * 1.05);
		document.getElementById("z4").innerHTML = a6 + ' to ' + a7;
		return a7;
	}

	function calcZone5(FTP, a7Results) {
		var a8 = (a7Results + 1);
		a9 = Math.round(FTP * 1.20);
		document.getElementById("z5").innerHTML = a8 + ' to ' + a9;
		return a9;
	}

	function neuro() {
		document.getElementById("z6").innerHTML = 'Neuromuscular';
	}

}

//Fade in zone parameters
function fadeCalc() {
	$('.calc').addClass('calc-animate');
	$('.watts').addClass('watts-animate');
}

//Reset the Form 
function resetForm() {
    /*document.getElementById("ftp-input").reset();*/
    document.getElementById("ftp-input").value = '';
	$('.calc').removeClass('calc-animate');
	$('.watts').removeClass('watts-animate');
}

//Waypoints to ease in zone info
var $row = $('.row');

$row.waypoint(function(direction) {
	if (direction == 'down') {
		$row.addClass('js-row-animate');
	} else {
		$row.removeClass('js-row-animate');
	}	
}, {offset: '60%'});




 
























function choosePiece(table) {
	var pn = (Math.floor((Math.random()*11)+1));
	switch (pn) {
		case 1:
			document.getElementById(table + "_2").style.backgroundColor="blue";
			document.getElementById(table + '_5').style.backgroundColor="blue";
			document.getElementById(table + '_8').style.backgroundColor="blue";
			break;
		case 2:
			document.getElementById(table + '_2').style.backgroundColor="blue";
			document.getElementById(table + '_5').style.backgroundColor="blue";
			document.getElementById(table + '_6').style.backgroundColor="blue";
			break;
		case 3:
			document.getElementById(table + '_2').style.backgroundColor="blue";
			document.getElementById(table + '_4').style.backgroundColor="blue";
			document.getElementById(table + '_5').style.backgroundColor="blue";
			document.getElementById(table + '_6').style.backgroundColor="blue";
			document.getElementById(table + '_8').style.backgroundColor="blue";
			break;
		case 4:
			document.getElementById(table + '_4').style.backgroundColor="blue";
			document.getElementById(table + '_5').style.backgroundColor="blue";
			document.getElementById(table + '_8').style.backgroundColor="blue";
			break;
		case 5:
			document.getElementById(table + '_4').style.backgroundColor="blue";
			document.getElementById(table + '_5').style.backgroundColor="blue";
			document.getElementById(table + '_6').style.backgroundColor="blue";
			document.getElementById(table + '_8').style.backgroundColor="blue";
			break;
		case 6:
			document.getElementById(table + '_2').style.backgroundColor="blue";
			document.getElementById(table + '_4').style.backgroundColor="blue";
			document.getElementById(table + '_5').style.backgroundColor="blue";
			break;
		case 7:
			document.getElementById(table + '_2').style.backgroundColor="blue";
			document.getElementById(table + '_5').style.backgroundColor="blue";
			document.getElementById(table + '_6').style.backgroundColor="blue";
			break;
		case 8:
			document.getElementById(table + '_4').style.backgroundColor="blue";
			document.getElementById(table + '_5').style.backgroundColor="blue";
			document.getElementById(table + '_6').style.backgroundColor="blue";
			document.getElementById(table + '_8').style.backgroundColor="blue";
			break;
		case 9:
			document.getElementById(table + '_1').style.backgroundColor="blue";
			document.getElementById(table + '_2').style.backgroundColor="blue";
			document.getElementById(table + '_3').style.backgroundColor="blue";
			document.getElementById(table + '_4').style.backgroundColor="blue";
			document.getElementById(table + '_6').style.backgroundColor="blue";
			document.getElementById(table + '_7').style.backgroundColor="blue";
			document.getElementById(table + '_8').style.backgroundColor="blue";
			document.getElementById(table + '_9').style.backgroundColor="blue";
			break;
		case 10:
			document.getElementById(table + '_2').style.backgroundColor="blue";
			document.getElementById(table + '_6').style.backgroundColor="blue";
			document.getElementById(table + '_8').style.backgroundColor="blue";
			document.getElementById(table + '_5').style.backgroundColor="blue";
			break;
		case 11:
			document.getElementById(table + '_2').style.backgroundColor="blue";
			document.getElementById(table + '_4').style.backgroundColor="blue";
			document.getElementById(table + '_8').style.backgroundColor="blue";
			document.getElementById(table + '_5').style.backgroundColor="blue";
			break;
	} 
}
function placeExit() {
	var en = (Math.floor((Math.random()*12)+1));
	document.getElementById("12_" + en).innerHtml="<img src='littlestairs.png' />";
}

var x = true; 

var aList = [];  
var bList = [];

var portableHeater = {identity: 1, scale: "hours", costs: 0.17, kwh: 1.5}; 
var portableFan = {identity: 2, scale: "hours", costs: .03, kwh: .03}; 
var microwaveOven = {identity: 3, scale: "minutes", costs: .12, kwh: .12};  
//var coffeeMaker = {identity: 4, scale: "brews", costs: .01, kwh: .12}; 
var refrigerator = {identity: 5, scale: "months", costs: .14, kwh: 34.5}; 
var tubeTV2527 = {identity: 6, scale: "hours", costs: .01, kwh: .09}; 
var tubeTV3036 = {identity: 7, scale: "hours", costs: .01, kwh: .12};
var xbox360 = {identity: 8, scale: "hours", costs: .02, kwh: .15}; 
var nintendoWii = {identity: 9, scale: "hours", costs: .01, kwh: .02}; 
var playstation3 = {identity: 10, scale: "hours", costs: .02, kwh: .21}; 
var laptop = {identity: 11, scale: "hours", costs: .01, kwh: .03} ;
var speakers = {identity: 12, scale: "hours", costs: .01, kwh: .05}; 
var incadescentBulb65 = {identity: 13, scale: "hours", costs: .01, kwh: .06}; 
var incadescentBulb75 = {identity: 14, scale: "hours", costs: .01, kwh: .08} ; 
var vacuumCleaner = {identity: 15, scale: "hours", costs: .08, kwh:.75} ;
var iron = {identity: 16, scale: "hours", costs: .12, kwh: 1.08}  ;
var hairDryer = {identity: 17, scale: "hours", costs: .17, kwh: 1.5}; 
var curlingIron = {identity: 18, scale: "hours", costs: .01, kwh: .05}; //*/

//alert(aList);   
aList.push(portableHeater); 
aList.push(portableFan); 
aList.push(microwaveOven); 
//aList.push(coffeeMaker); 
aList.push(refrigerator); 
aList.push(tubeTV2527); 
aList.push(tubeTV3036); 
aList.push(xbox360); 
aList.push(nintendoWii); 
aList.push(playstation3); 
aList.push(laptop); 
aList.push(speakers); 
aList.push(incadescentBulb75); 
aList.push(incadescentBulb65); 
aList.push(vacuumCleaner); 
aList.push(iron); 
aList.push(hairDryer); 
aList.push(curlingIron);

//var portableHeater = {scale: "hours", costs: 0.17, kwh: 1.5};
while(x == true) { 
	var itemNum = prompt("Enter a number that represents appliance");  

	for (var i = 0; i < aList.length; i++) { 
		if(itemNum == aList[i].identity) {   
			var hours = prompt("How many " + aList[i].scale +  " do you use this item per day?");
			var calc = aList[i].costs * hours;  
			bList.push(calc); 
			
		} 
	}

	var conditionChange = prompt("Would you like to enter another appliance (y/n)?"); 
	if(conditionChange.toLowerCase() == "n") {  
		x = false; 
	} 
	else {
		x = true; 
	}  

}  
var finalAnswer = 0;
for(var m = 0;  m < bList.length; m++) {  
	finalAnswer = finalAnswer + bList[m];  
	//alert(finalAnswer + "per hour"); 
}  
var perDay = finalAnswer*24; 
var perMonth = (finalAnswer*24)*(30); 
var perYear = ((finalAnswer*24)*(30*12));
alert("$" +perDay.toFixed(2)+" per day"); 
alert("$" +perMonth.toFixed(2)+" per month"); 
alert("$" +perYear.toFixed(2)+" per year"); 

//var followUp = prompt("Would you like to add energy cost for another item?");
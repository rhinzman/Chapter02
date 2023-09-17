//define two arrays for cities and population
var cityPop = [
	{city: 'Madison', population: 233209}
	,{city: 'Milwaukee', population: 594833}
	,{city: 'Green Bay', population: 104057}
	,{city: 'Superior',population: 27244}
];
//create a function to add a table (columns and rows)
//create a header row
    var headerRow = document.createElement("tr");
	headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")


function addColumns(cityPop){
    
    document.querySelectorAll("tr").forEach(function(row, i){

if (i == 0){

    		row.insertAdjacntHTML('beforeend', '<th>City Size</th>');
    	} else {

    		var citySize;
		}
    		if (cityPop[i].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i].population < 500000){
    			citysize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

			row.insertAdjacntHTML = '<td' + citySize + '</td>';
    	};
    });
};

function addEvents(){

	document.querySelector("table").addEventListener("mouseover"), function(){
		
		var color = ("rgb");

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += "random";

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		};

		document.querySelector("table").color = color;
	}};

	function clickme(){

		alert('Hey, you clicked me!');
	};
 //add the event listener
	document.querySelector("table").addEventListener('click', clickme);

document.querySelector("#mydiv").appendChild(table);
}

document.addEventListener('DOMContentLoaded',initialize)
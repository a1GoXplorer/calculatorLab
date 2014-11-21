window.onload = function() { 
	alert("Loaded!");



	var numOne = document.getElementById("num_1");
	var numTwo = document.getElementById("num_2");
	var numThree = document.getElementById("num_3");
	var numFour = document.getElementById("num_4");
	var numFive = document.getElementById("num_5");
	var numSix = document.getElementById("num_6");
	var numSeven = document.getElementById("num_7");
	var numEight= document.getElementById("num_8");
	var numNine = document.getElementById("num_9");
	var numZero = document.getElementById("num_0");
	var result = document.getElementById("result_display_value")
	var storedNum1 = ""
	var storedNum2 = ""
	var operation = ""
//our click functionality

	numOne.onclick = function() {
		if(result.innerHTML === "+" || result.innerHTML ==="-" || result.innerHTML === "/" || result.innerHTML === "*") {
			result.innerHTML = 1
		}
	   else {
	   	result.innerHTML = result.innerHTML + 1
	   }
	};

	numTwo.onclick = function() {
			if(result.innerHTML === "+" || result.innerHTML ==="-" || result.innerHTML === "/" || result.innerHTML === "*") {
			result.innerHTML = 2
		}
	   else {
		result.innerHTML = result.innerHTML + 2
		}
	};

	numThree.onclick = function() {
			if(result.innerHTML === "+" || result.innerHTML ==="-" || result.innerHTML === "/" || result.innerHTML === "*") {
			result.innerHTML = 3
		}
	   else {
	   	result.innerHTML = result.innerHTML + 3
		}
	};

	numFour.onclick = function() {
			if(result.innerHTML === "+" || result.innerHTML ==="-" || result.innerHTML === "/" || result.innerHTML === "*") {
			result.innerHTML = 4
		}
	   else {
		result.innerHTML = result.innerHTML + 4
		}
	};

	numFive.onclick = function() {
			if(result.innerHTML === "+" || result.innerHTML ==="-" || result.innerHTML === "/" || result.innerHTML === "*") {
			result.innerHTML = 5
		}
	   else {
		result.innerHTML = result.innerHTML + 5
		}
	};

	numSix.onclick = function() {
			if(result.innerHTML === "+" || result.innerHTML ==="-" || result.innerHTML === "/" || result.innerHTML === "*") {
			result.innerHTML = 6
		}
	   else {
	   	result.innerHTML = result.innerHTML + 6
		}	
	};

	numSeven.onclick = function() {
			if(result.innerHTML === "+" || result.innerHTML ==="-" || result.innerHTML === "/" || result.innerHTML === "*") {
			result.innerHTML = 7
		}
	   else {
		result.innerHTML = result.innerHTML + 7
		}
	};

	numEight.onclick = function() {
			if(result.innerHTML === "+" || result.innerHTML ==="-" || result.innerHTML === "/" || result.innerHTML === "*") {
			result.innerHTML = 8
		}
	   else {
		result.innerHTML = result.innerHTML + 8
		}
	};

	numNine.onclick = function() {
			if(result.innerHTML === "+" || result.innerHTML ==="-" || result.innerHTML === "/" || result.innerHTML === "*") {
			result.innerHTML = 9
		}
	   else {
		result.innerHTML = result.innerHTML + 9
		}
	};

	numZero.onclick = function() {
			if(result.innerHTML === "+" || result.innerHTML ==="-" || result.innerHTML === "/" || result.innerHTML === "*") {
			result.innerHTML = 0
		}
	   else {
		result.innerHTML = result.innerHTML + 0
	}
	};



	//button for add, subtract, multiply, divide, clear, and enter

	addition.onclick = function() {
		storedNum1 = result.innerHTML;
		result.innerHTML = "+"
		operation = "+"
	};

	subtraction.onclick = function() {
		storedNum1 = result.innerHTML;
		result.innerHTML = "-"
		operation = "-"
	};

	multiplication.onclick = function() {
		storedNum1 = result.innerHTML;
		result.innerHTML = "*"
		operation = "*"
	};

	division.onclick = function() {
		storedNum1 = result.innerHTML;
		result.innerHTML = "/"
		operation = "/"
	};

	clear.onclick = function() {
		result.innerHTML = ""
	};

	enter.onclick = function() {
		storedNum2 = result.innerHTML
		if(operation === "+") {
			result.innerHTML = parseInt(storedNum1) + parseInt(storedNum2)
		}
		else if(operation === "-") {
			result.innerHTML = parseInt(storedNum1) - parseInt(storedNum2)
		}
		else if(operation === "*") {
			result.innerHTML = parseInt(storedNum1) * parseInt(storedNum2)
		}
		else if(operation === "/") {
			result.innerHTML = parseInt(storedNum1) / parseInt(storedNum2)
		};
	};
};
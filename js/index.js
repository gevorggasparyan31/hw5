document.getElementById("date").textContent = new Date();


function showAlert() {
    alert("Showing Alert!!!");
}

function showConfirm() {
    confirm("Do you confirm your confirmation to confirm?")
}
 function showPrompt() {
    const input = prompt("Enter Your Name","Input Name");
    if(input != null) {
        alert("Hello "+input+" jan!");
    }
 }

 function evenNums() {
    const nums = [];

    for(let i = 1; i <= 10; i++) {
        if(i%2==0) nums.push(i);
    }
    let evens = document.getElementById("evens");
    evens.textContent = nums;
 }

 function sorting() {
    const arr = [3,2,30,-4,9,10,7,55,12];
    let min, n=arr.length;
    for (i = 0; i < n - 1; i++)
	{
		for (j = 0; j < n - i - 1; j++)
		{
			if (arr[j] > arr[j + 1])
			{
				min = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = min;
			}
		}
	}
    document.getElementById("ascending").textContent = arr;
 }


 function add() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 + num2;
    document.getElementById("result").innerHTML = "Result: " + result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }
  }
  
  function subtract() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 - num2;
    document.getElementById("result").innerHTML = "Result: " + result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }
  }
  
  function multiply() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 * num2;
    document.getElementById("result").innerHTML = "Result: " + result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }
  }
  
  function divide() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 / num2;
    document.getElementById("result").innerHTML = "Result: " + result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }

    if (num2 === 0) {
        alert("Can't divide by zero,sorry man!");
        return;
    }
  }

  function calc(operator) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }

    if (num2 === 0) {
        alert("Can't divide by zero,sorry man!");
        return;
    }
    const result = eval(num1 +operator+ num2);
    document.querySelector("#result").innerHTML = "Result: " + result;
}




  function calc(operator) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }

    if (num2 === 0) {
        alert("Can't divide by zero,sorry man!");
        return;
    }
    
    let result;
    switch(operator){
      case '-':
        result = num1 - num2;
        break; 
      case '/':
        result = num1 / num2;
        break; 
      case '*':
        result = num1 * num2;
        break;
      default:
        result = num1 + num2;
    }

    document.querySelector("#result").innerHTML = "Result: " + result;
  }
  
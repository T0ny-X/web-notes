let userName;

function greet(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    if (name != null && name !== "") {
        document.getElementById("welcomeMessage").innerHTML = "Hello, " + name + "!";
        alert("Hello, " + name + "!")
        userName = name
    }
}


function gameByNumber(){
  let numbers = [];

  while (true) {
    let number = prompt("Enter a number, enter empty string when done:");

    if (number === null || number === "") {
      // Done input
      break;
    }

    // Check if valid number
    if (!isNaN(number)) {
      numbers.push(parseInt(number));
    } else {
      alert("Invalid input. Please enter a valid number.");
    }
  }
  console.log("List of numbers:", numbers);

  // Present result
  showGame(numbers)

  // Loop for again
  let again = prompt("Would you like to try again? (yes/no)");
  again = again.toLowerCase();
  if (again === "yes" || again === "y" || again === "Yes" || again === "Y" || again === "sure") {
    gameByNumber();
  } else {
    alert("Thanks for playing!");
  }
}

function gameByList(){
  let numList = prompt("Enter a list of numbers separated by spaces or commas like 1 2 3 4 or 1,2,3,4:");

  if (numList !== null && numList !== "") {
    let numbersArray = numList.replace(/\s+/g, ',').split(",");

    // Convert each element
    numbersArray = numbersArray.map(function(numberString) {
      return parseInt(numberString);
    });
    console.log("List of numbers:", numbersArray);

    // Present result
    showGame(numbersArray)

    // Loop for again
    let again = prompt("Would you like to try again? (yes/no)");
    again = again.toLowerCase();
    if (again === "yes" || again === "y" || again === "Yes" || again === "Y" || again === "sure") {
      gameByList();
    } else {
      alert("Thanks for playing!");
    }
  } else {
    console.log("No numbers entered.");
  }
}

function numGame(arr) {
  // Idea: new list that qualifies, then reduce

  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    // Check if it is the last one or larger than next
    if (i === arr.length - 1 || arr[i] >= arr[i + 1]) {
      newArray.push(arr[i]);
    }
  }

  // Add all the numbers in the new array together
  let total = newArray.reduce((a, b) => a + b, 0);

  console.log("New array:", newArray);
  console.log("Total:", total);

  return total;
}

function showGame(num){
  let gameRes = numGame(num)
  document.getElementById("gameResult").innerHTML = "The sum of the numbers is: " + gameRes + "! Base on the result, can you guess what happened?";
  alert("The sum of the numbers is: " + gameRes)
  if (gameRes > 50) {
    alert("That is a big number.");
  } else {
    alert("That is a small number.");
  }
}

document.getElementById("greetForm").addEventListener("submit", greet);

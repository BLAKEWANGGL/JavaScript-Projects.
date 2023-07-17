function drawGradientBackground() {
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");

  // Create a linear gradient
  var gradient = context.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "red");
  gradient.addColorStop(1, "blue");

  // Apply the gradient to the canvas background
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function runSwitch() {
  var choice = prompt("Enter a choice (1-3):");
  var output = document.getElementById("output");

  switch (choice) {
    case "1":
      output.textContent = "You chose option 1";
      break;
    case "2":
      output.textContent = "You chose option 2";
      break;
    case "3":
      output.textContent = "You chose option 3";
      break;
    default:
      output.textContent = "Invalid choice";
      break;
  }

  var highlightedElements = document.getElementsByClassName("highlighted");
  for (var i = 0; i < highlightedElements.length; i++) {
    highlightedElements[i].style.color = "red";
  }
}

function drawRectangle() {
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");

  // Set the fill color
  context.fillStyle = "red";

  // Draw a rectangle
  context.fillRect(50, 50, 100, 100);
}
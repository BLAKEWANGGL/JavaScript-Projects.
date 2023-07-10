// Concatenate two strings
function concatExample() {
    var str1 = "Hello";
    var str2 = "World";
    var result = str1.concat(" ", str2);
    document.getElementById("output").textContent = result;
  }
  
  // Extract a portion of a string
  function sliceExample() {
    var str = "Hello, World";
    var result = str.slice(7, 12);
    document.getElementById("output").textContent = result;
  }
  
  // Convert a number to a string
  function toStringExample() {
    var num = 42;
    var result = num.toString();
    document.getElementById("output").textContent = result;
  }
  
  // Format a number with a specified precision
  function toPrecisionExample() {
    var num = 3.14159;
    var result = num.toPrecision(3);
    document.getElementById("output").textContent = result;
  }  
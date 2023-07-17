function validateForm() {
    var name = document.getElementById("name").value;
  
    if (name === "") {
      alert("Please enter your name.");
      return false;
    }
  
    // Add more validation rules for other fields if needed
  
    return true;
  }  
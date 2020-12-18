var hasAccess = localStorage.getItem('has_access') ? localStorage.getItem('has_access') : 'no';

if (hasAccess == 'yes') {
    document.getElementById('password-display').style.display = "none"
    document.body.style.overflow = 'auto'
}

function passwordSubmit() {
    if (document.getElementById('password').value == "password" && hasAccess == "no") {
        document.getElementById('password-display').style.display = "none"
        document.body.style.overflow = 'auto'
        localStorage.setItem('has_access', 'yes');
    }
}

function resetForm() {
    localStorage.clear()
    document.getElementById('reset-text').style.display = 'flex'
}


// Execute a function when the user releases a key on the keyboard
document.getElementById('password').addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("password-btn").click();
    }
  });
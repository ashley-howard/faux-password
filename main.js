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

function resetForm(){
    localStorage.clear()

}
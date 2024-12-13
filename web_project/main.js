// Ensure the form is valid before submission
document.getElementById('studentRegistrationForm').addEventListener('submit', function(event) {
    var form = this;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    form.classList.add('was-validated');
});
var form = document.querySelector(".needs-validation");

form.addEventListener("submit", function(event) {
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    alert("You must enter required fields.");
    form.classList.add("was-validated");
    return false;
  }
  
  form.classList.add("was-validated");
  alert("Your information was successfully submitted!");
});

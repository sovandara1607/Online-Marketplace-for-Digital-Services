// Show an alert when a form is successfully submitted
function submitAlert(formName) {
  if (formName == "signUp"){
    alert("Thank you for signing up!\nYour account is being processed. This will take up to 24h.");
  }
  else if (formName == "contact"){
    alert("Thank you for reaching out!\nWe greatly appreciate your message!");
  }
}

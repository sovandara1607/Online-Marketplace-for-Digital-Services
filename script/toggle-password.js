/* Password Visibility Toggle */
function togglePassword() {
  const x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
    document.getElementById("showPassword").style.display = "none";
    document.getElementById("hidePassword").style.display = "block";
    document.getElementById("passwordToggle").title = "Hide Password";
  } else {
    x.type = "password";
    document.getElementById("showPassword").style.display = "block";
    document.getElementById("hidePassword").style.display = "none";
    document.getElementById("passwordToggle").title = "Show Password";
  }
}

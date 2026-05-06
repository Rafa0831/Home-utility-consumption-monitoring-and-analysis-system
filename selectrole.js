function setRole(role) {
  const message = document.getElementById("message");
  if (role === "admin") {
    message.textContent = "You selected Admin. Redirecting to Admin Dashboard...";
    // Example redirect
    setTimeout(() => window.location.href = "admindashboard.html", 1500);
  } else {
    message.textContent = "You selected User. Redirecting to User Dashboard...";
    // Example redirect
    setTimeout(() => window.location.href = "userdashboard.html", 1500);
  }
}
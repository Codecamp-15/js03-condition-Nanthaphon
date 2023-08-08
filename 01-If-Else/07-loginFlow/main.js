let username = prompt("Please enter your username:");
let password = prompt("Please enter your password:");

if (!username) {
    alert("username is required");
  } else if (!password) {
    alert("password is required");
} else if (
    (username === "admin" && password === "1234") ||
    (username === "john" && password === "qwerty")
  ) {
    alert("Hello " + username);
  } else {
    alert("invalid username or password");
  }
  
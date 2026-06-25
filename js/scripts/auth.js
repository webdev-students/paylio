function loginAuth() {
  // store in a variable the input field
  const user_inputField = document.getElementById('user');

  // store in a variable the value from/in the input field
  // i.e.: the value the user inputs
  const userName = user_inputField.value;

  // store the login button in a variable
  const LoginButton = document.querySelector('.login');

  // Store in a variable the welcome message display section
  const msg = document.getElementById('welcomeMsg');

  msg.textContent = `Welcome, ${userName}`;
}

// This function handles the submission of the login form
async function loginFormHandler(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Get the values of the username and password input fields
    const username = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
  
    // Check if both username and password are provided
    if (username && password) {
      // Send a POST request to the login API endpoint with user credentials
      const response = await fetch("/api/users/login", {
        method: "post",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      // Check if the response is successful (status code 200)
      if (response.ok) {
        // Redirect the user to the dashboard if login is successful
        document.location.replace("/dashboard");
      } else {
        // Show an alert with the error message if login is not successful
        alert(response.statusText);
      }
    }
  }
  
  // Attach the loginFormHandler function to the form's submit event
  document
    .querySelector("#login-form")
    .addEventListener("submit", loginFormHandler);
  
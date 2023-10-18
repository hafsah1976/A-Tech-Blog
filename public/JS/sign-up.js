// Function to handle the submission of the sign-up form
async function signupFormHandler(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Get the values of the name, email, and password input fields
    const name = document.querySelector("#name-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
  
    // Get the loading indicator element
    const loadingIndicator = document.querySelector("#loading-indicator");
  
    // Show the loading indicator
    loadingIndicator.classList.remove("hidden");
  
    // Client-side validation
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      loadingIndicator.classList.add("hidden"); // Hide the loading indicator
      return; // Exit the function if validation fails
    }
  
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        console.log("Success");
        document.location.replace("/dashboard"); // Redirect to the dashboard upon successful sign-up
      } else {
        // Attempt to parse the response data as JSON
        const data = await response.json();
  
        // Display the server-provided error message, or a generic error message/ I will know more after running the app
        alert(data.message || "An error occurred");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    } finally {
      // Hide the loading indicator whether the request succeeded or failed
      loadingIndicator.classList.add("hidden");
    }
  }
  
  // Attach the signupFormHandler function to the form's submit event
  document
    .querySelector("#signup-form")
    .addEventListener("submit", signupFormHandler);
  
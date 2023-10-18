async function signupFormHandler(event) {
    event.preventDefault();
  
    // Get the values of the name, email, and password input fields
    const name = document.querySelector("#name-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
  
    // Client-side validation
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Here I would include a loading indicator while waiting for the API response
  
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
        document.location.replace("/dashboard");
      } else {
        const data = await response.json();
        alert(data.message || "Uh Oh! You may have entered invalid  credentials. Happens to the best of us. Please try again."); // Display error message if available
      }
    } catch (error) {
      console.error(error);
      alert("Failed to sign up. Please try again later.");
    }
  }
  
  // Attach the signupFormHandler function to the form's submit event
  document
    .querySelector("#signup-form")
    .addEventListener("submit", signupFormHandler);
  
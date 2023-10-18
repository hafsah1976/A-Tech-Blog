// Function to handle the submission of a new post form
async function newFormHandler(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Get the values of the postTitle and description input fields
    const postTitle = document.querySelector('input[name="post-title"]').value;
    const description = document.querySelector('input[name="description"]').value;
  
    // Send a POST request to create a new post
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({
        postTitle,
        description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (response.ok) {
      // If the response is successful, redirect the user to the dashboard
      document.location.replace("/dashboard");
    } else {
      // If there's an error, display the error message
      alert(response.statusText);
    }
  }
  
  // Attach the newFormHandler function to the form's submit event
  document
    .querySelector("#new-post-form")
    .addEventListener("submit", newFormHandler);
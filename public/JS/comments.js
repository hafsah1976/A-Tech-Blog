// Define an asynchronous function for handling the comment form submission
async function commentFormHandler(event) {
    event.preventDefault(); // Prevent the default form submission behavior (page reload)
  
    // Get the comment text from the input field and remove leading/trailing whitespace
    const comment_text = document.querySelector('input[name="comment-body"]').value.trim();
  
    // Extract the post ID from the current URL
    const post_id = window.location.toString().split("/")[window.location.toString().split("/").length - 1];
  
    // Check if the comment_text is not empty
    if (comment_text) {
      // Send a POST request to the "/api/comments" endpoint with the comment data
      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({
          post_id,
          comment_text,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      // Check if the response status is okay (HTTP 200)
      if (response.ok) {
        // Reload the page to display the new comment
        document.location.reload();
      } else {
        // Display an alert with the response status text (error message)
        alert(response.statusText);
        // Show the comment form again in case of an error
        document.querySelector("#comment-form").style.display = "block";
      }
    }
  }
  
  // Attach the commentFormHandler function to the form's submit event
  document.querySelector(".comment-form").addEventListener("submit", commentFormHandler);
  
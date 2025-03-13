
document.addEventListener("DOMContentLoaded", editNewsLetter);
// Set the src of the iframe based on the clicked link
function setPdfSrc(link) {
    const pdfUrl = link.href; // Get the href of the clicked link
    document.getElementById("pdfViewer").src = pdfUrl; // Set the iframe src to the PDF URL
}

// Clear the iframe src when modal is closed
function clearPdfSrc() {
    document.getElementById("pdfViewer").src = ''; // Clear the iframe src
}

// Function for edit newsletter link 
function editNewsLetter() { 
    const link = document.querySelector(".flying-gator");
    const editNewsLetterButton = document.querySelector(".editNewsLetterButton")



    // Load the saved URL from localStorage (if exists)
    const savedUrl = localStorage.getItem("flyingGatorURL");
    if (savedUrl) {
      link.href = savedUrl;
    }

    editNewsLetterButton.addEventListener("click", function () {
      const newUrl = prompt("Enter a new URL:", link.href);
      if (newUrl) {
        link.href = newUrl;
        localStorage.setItem("flyingGatorURL", newUrl); // Save it to localStorage
      }
    });
}
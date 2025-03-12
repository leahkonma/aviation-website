// Set the src of the iframe based on the clicked link
function setPdfSrc(link) {
    const pdfUrl = link.href; // Get the href of the clicked link
    document.getElementById("pdfViewer").src = pdfUrl; // Set the iframe src to the PDF URL
}

// Clear the iframe src when modal is closed
function clearPdfSrc() {
    document.getElementById("pdfViewer").src = ''; // Clear the iframe src
}

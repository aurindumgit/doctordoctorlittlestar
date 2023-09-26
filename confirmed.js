document.addEventListener("DOMContentLoaded", function () {
    // Extract the query parameter 'doctor' from the URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const doctorName = urlParams.get("doctor");

    // Display the confirmation message
    const confirmationMessage = document.getElementById("confirmation-message");
    if (doctorName) {
        confirmationMessage.innerHTML = `Request sent for: ${doctorName}.`;
    } else {
        confirmationMessage.innerHTML = "Request sent for:";
    }
});

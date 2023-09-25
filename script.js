document.addEventListener("DOMContentLoaded", function () {
    // Add a click event listener to the "Clear" button
    document.getElementById('clearButton').addEventListener('click', function() {
        document.getElementById('search').value = ''; // Clear the search input
        clearDoctors(); // Clear the doctors' results
    });
});

function filterDoctors(speciality) {
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            const doctorsContainer = document.getElementById("doctors-container");
            doctorsContainer.innerHTML = ""; // Clear previous results

            const filteredDoctors = data.filter((doctor) => doctor.speciality === speciality);

            if (filteredDoctors.length === 0) {
                doctorsContainer.innerHTML = "<p>No doctors found for this speciality.</p>";
            } else {
                filteredDoctors.forEach((doctor) => {
                    const doctorInfo = generateDoctorInfo(doctor);
                    doctorsContainer.appendChild(doctorInfo);
                });
            }
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

function clearDoctors() {
    const doctorsContainer = document.getElementById("doctors-container");
    doctorsContainer.innerHTML = ""; 
}

function generateDoctorInfo(doctor) {
    const doctorInfo = document.createElement("div");
    doctorInfo.classList.add("doctor-info");
    doctorInfo.innerHTML = `
        <div class="doctor-name">
        ${doctor.name}</div>
        <div class="speciality">
        Speciality: ${doctor.speciality}<div>
        <div class="review"> Review: ${doctor.review}</div>
        <div class="fees">Fees: ₹${doctor.fees}</div>
        <div class="pay">
        <button class="book-appointment" onclick="bookAppointment('${doctor.name}')">Book Appointment</button></div>
    `;
    return doctorInfo;
}

function bookAppointment(doctorName) {
    // Redirect to confirmation.html with the doctor's name as a query parameter
    window.location.href = `confirmation.html?doctor=${doctorName}`;
}

// Function to load patient data from JSON file
function loadPatientData() {
    fetch('patients.json')
        .then(response => response.json())
        .then(data => {
            // Store the patient data globally
            window.patientData = data;
        })
        .catch(error => console.error('Error loading patient data:', error));
}

// Function to display patients in the HTML based on the selected body part
function displayPatientsByBodyPart(bodyPart) {
    const patientList = document.getElementById('patient-list');

    // Clear previous patient data
    patientList.innerHTML = '';

    // Filter patients based on the selected body part
    const filteredPatients = window.patientData.filter(patient => patient.problem === bodyPart);

    // Loop through the filtered patient data and create a card for each patient
    filteredPatients.forEach(patient => {
        const patientCard = document.createElement('div');
        patientCard.classList.add('patient-card');

        // Display patient information including preferred doctor's name
        patientCard.innerHTML = `
            <h3>Name: ${patient.name}</h3>
            <p>Age: ${patient.age}</p>
            <p>Preferred Time: ${patient.preferred_time}</p>
            <p>Problem: ${patient.problem}</p>
            <p>Preferred Doctor: ${patient.preferred_doctor}</p>
            <button onclick="acceptPatient('${patient.preferred_doctor}')">Accept</button>
            <button onclick="showTomorrowButton(this)">Reschedule</button>
        `;

        patientList.appendChild(patientCard);
    });
}

// Function to handle button clicks and filter patients by body part
function filterPatients(bodyPart) {
    displayPatientsByBodyPart(bodyPart);
}

// Function to clear displayed patient data from the screen
function clearData() {
    const patientList = document.getElementById('patient-list');
    patientList.innerHTML = ''; // Clear the patient data container
}

// Function to handle accepting a patient's appointment and redirect to confirmed.html


// Function to show the "Tomorrow" button when clicking the "Reschedule" button
function showTomorrowButton(button) {
    // Create and append the "Tomorrow" button next to the "Reschedule" button
    const tomorrowButton = document.createElement('button');
    tomorrowButton.textContent = 'Tomorrow';
    tomorrowButton.onclick = function () {
        // Redirect to confirmed.html with the confirmation message
        window.location.href = 'confirmed.html?doctor=Tomorrow';
    };
    button.parentNode.insertBefore(tomorrowButton, button.nextSibling);
    // Disable the "Reschedule" button
    button.disabled = true;
}

function acceptPatient(doctorName) {
    // Get the patient's name from the HTML
    const patientName = document.querySelector('.patient-card h3').textContent;
  
    // Remove the patient's card from the DOM
    document.querySelector('.patient-card').remove();
  
    // Show a confirmation message
    const confirmationMessage = document.createElement('div');
    confirmationMessage.classList.add('confirmation-message');
    confirmationMessage.innerHTML = `
      <h2>Appointment Confirmed</h2>
      <p>${patientName}'s appointment has been confirmed with ${doctorName}. You will receive a reminder email shortly.</p>
    `;
    document.getElementById('patient-list').appendChild(confirmationMessage);
  }

// ... (other functions)

// Load patient data when the page loads
loadPatientData();

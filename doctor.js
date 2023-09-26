document.addEventListener("DOMContentLoaded", function () {
    const appointmentsTable = document.getElementById("appointments");
    const sortFilter = document.getElementById("sortFilter");
    const filterButton = document.getElementById("filterButton");

    // Sample patient data
    const patients = [
        
            {
                "id": 1,
                "name": "John Doe",
                "age": 45,
                "preferred_time": "morning",
                "problem": "head",
                "preferred_doctor": "Dr. John Smith"
            },
            {
                "id": 2,
                "name": "Jane Smith",
                "age": 32,
                "preferred_time": "afternoon",
                "problem": "stomach",
                "preferred_doctor": "Dr. Robert Brown"
            },
            {
                "id": 3,
                "name": "David Johnson",
                "age": 50,
                "preferred_time": "evening",
                "problem": "back",
                "preferred_doctor": "Dr. Michael Davis"
            },
            {
                "id": 4,
                "name": "Mary Brown",
                "age": 38,
                "preferred_time": "morning",
                "problem": "chest",
                "preferred_doctor": "Dr. Lisa Williams"
            },
            {
                "id": 5,
                "name": "Alice Wilson",
                "age": 28,
                "preferred_time": "afternoon",
                "problem": "head",
                "preferred_doctor": "Dr. John Smith"
            },
            {
                "id": 6,
                "name": "Robert Johnson",
                "age": 55,
                "preferred_time": "morning",
                "problem": "stomach",
                "preferred_doctor": "Dr. Jennifer Harris"
            },
            {
                "id": 7,
                "name": "Sarah Davis",
                "age": 42,
                "preferred_time": "evening",
                "problem": "back",
                "preferred_doctor": "Dr. David Lee"
            },
            {
                "id": 8,
                "name": "Michael Smith",
                "age": 34,
                "preferred_time": "morning",
                "problem": "chest",
                "preferred_doctor": "Dr. Emily White"
            },
            {
                "id": 9,
                "name": "Emily Wilson",
                "age": 30,
                "preferred_time": "afternoon",
                "problem": "head",
                "preferred_doctor": "Dr. John Smith"
            },
            {
                "id": 10,
                "name": "Jessica Johnson",
                "age": 48,
                "preferred_time": "morning",
                "problem": "stomach",
                "preferred_doctor": "Dr. Robert Brown"
            },
            {
                "id": 11,
                "name": "Daniel Davis",
                "age": 36,
                "preferred_time": "evening",
                "problem": "back",
                "preferred_doctor": "Dr. Michael Davis"
            },
            {
                "id": 12,
                "name": "Linda Brown",
                "age": 55,
                "preferred_time": "morning",
                "problem": "chest",
                "preferred_doctor": "Dr. Lisa Williams"
            },
            {
                "id": 13,
                "name": "Richard Smith",
                "age": 47,
                "preferred_time": "afternoon",
                "problem": "head",
                "preferred_doctor": "Dr. John Smith"
            },
            {
                "id": 14,
                "name": "Susan Johnson",
                "age": 39,
                "preferred_time": "morning",
                "problem": "stomach",
                "preferred_doctor": "Dr. Jennifer Harris"
            },
            {
                "id": 15,
                "name": "Thomas Davis",
                "age": 41,
                "preferred_time": "evening",
                "problem": "back",
                "preferred_doctor": "Dr. David Lee"
            },
            {
                "id": 16,
                "name": "Elizabeth Wilson",
                "age": 29,
                "preferred_time": "morning",
                "problem": "chest",
                "preferred_doctor": "Dr. Emily White"
            },
            {
                "id": 17,
                "name": "William Brown",
                "age": 50,
                "preferred_time": "afternoon",
                "problem": "head",
                "preferred_doctor": "Dr. John Smith"
            },
            {
                "id": 18,
                "name": "Karen Johnson",
                "age": 37,
                "preferred_time": "morning",
                "problem": "stomach",
                "preferred_doctor": "Dr. Robert Brown"
            },
            {
                "id": 19,
                "name": "Christopher Davis",
                "age": 43,
                "preferred_time": "evening",
                "problem": "back",
                "preferred_doctor": "Dr. Michael Davis"
            },
            {
                "id": 20,
                "name": "Amanda Smith",
                "age": 31,
                "preferred_time": "morning",
                "problem": "chest",
                "preferred_doctor": "Dr. Lisa Williams"
            }
        
    ];

    // Function to display a list of appointments in a table
    function displayAppointments(patientData) {
        // Clear the existing table
        appointmentsTable.innerHTML = "";

        // Generate the table rows
        for (const patient of patientData) {
            const row = appointmentsTable.insertRow();

            const nameCell = row.insertCell(0);
            nameCell.textContent = patient.name;

            const ageCell = row.insertCell(1);
            ageCell.textContent = patient.age;

            const preferredTimeCell = row.insertCell(2);
            preferredTimeCell.textContent = patient.preferred_time;

            const problemCell = row.insertCell(3);
            problemCell.textContent = patient.problem;

            const preferredDoctorCell = row.insertCell(4);
            preferredDoctorCell.textContent = patient.preferred_doctor;

            const actionCell = row.insertCell(5);
            const rescheduleButton = document.createElement("button");
            rescheduleButton.textContent = "Reschedule";
            rescheduleButton.addEventListener("click", () => {
                // Add reschedule logic here
                alert(`Reschedule ${patient.name}'s appointment`);
            });
            actionCell.appendChild(rescheduleButton);
        }
    }

    // Apply sorting based on selected filter
   // Apply sorting based on selected filter
function applySort(filter) {
    switch (filter) {
        case "name":
            patients.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "problem":
            patients.sort((a, b) => a.problem.localeCompare(b.problem));
            break;
        case "preferred_time":
            patients.sort((a, b) => {
                const timeOrder = { "morning": 1, "afternoon": 2, "evening": 3 };
                return timeOrder[a.preferred_time] - timeOrder[b.preferred_time];
            });
            break;
        default:
            // Default sorting is by patient name
            patients.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }

    displayAppointments(patients);
}

    // Display the appointments in the table when the page loads
    displayAppointments(patients);

    // Add event listener for the filter button
    filterButton.addEventListener("click", () => {
        const selectedFilter = sortFilter.value;
        applySort(selectedFilter);
    });
});
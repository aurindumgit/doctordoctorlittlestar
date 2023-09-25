document.addEventListener("DOMContentLoaded", function () {
    const appointmentsList = document.getElementById("appointments");

    // Sample patient data
    const patients = [
        // ... (your patient data here)
        
            {
                "id": 1,
                "name": "John Doe",
                "age": 45,
                "preferred_time": "morning",
                "problem": "head",

            },
            {
                "id": 2,
                "name": "Jane Smith",
                "age": 32,
                "preferred_time": "afternoon",
                "problem": "stomach",
        
            },
            {
                "id": 3,
                "name": "David Johnson",
                "age": 50,
                "preferred_time": "evening",
                "problem": "back",
            
            },
            {
                "id": 4,
                "name": "Mary Brown",
                "age": 38,
                "preferred_time": "morning",
                "problem": "chest",
            
            },
            {
                "id": 5,
                "name": "Alice Wilson",
                "age": 28,
                "preferred_time": "afternoon",
                "problem": "head",
            
            },
            {
                "id": 6,
                "name": "Robert Johnson",
                "age": 55,
                "preferred_time": "morning",
                "problem": "stomach",
            
            },
            {
                "id": 7,
                "name": "Sarah Davis",
                "age": 42,
                "preferred_time": "evening",
                "problem": "back",
        
            },
            {
                "id": 8,
                "name": "Michael Smith",
                "age": 34,
                "preferred_time": "morning",
                "problem": "chest",
                
            },
            {
                "id": 9,
                "name": "Emily Wilson",
                "age": 30,
                "preferred_time": "afternoon",
                "problem": "head",
            
            },
            {
                "id": 10,
                "name": "Jessica Johnson",
                "age": 48,
                "preferred_time": "morning",
                "problem": "stomach",
            
            },
            {
                "id": 11,
                "name": "Daniel Davis",
                "age": 36,
                "preferred_time": "evening",
                "problem": "back",
                
            },
            {
                "id": 12,
                "name": "Linda Brown",
                "age": 55,
                "preferred_time": "morning",
                "problem": "chest",
                
            },
            {
                "id": 13,
                "name": "Richard Smith",
                "age": 47,
                "preferred_time": "afternoon",
                "problem": "head",
    
            },
            {
                "id": 14,
                "name": "Susan Johnson",
                "age": 39,
                "preferred_time": "morning",
                "problem": "stomach",
                "problem": "back",
            },
            {
                "id": 15,
                "name": "Thomas Davis",
                "age": 41,
                "preferred_time": "evening",
                "problem": "back",

            },
            {
                "id": 16,
                "name": "Elizabeth Wilson",
                "age": 29,
                "preferred_time": "morning",
                "problem": "chest",
        
            },
            {
                "id": 17,
                "name": "William Brown",
                "age": 50,
                "preferred_time": "afternoon",
                "problem": "head",
    
            },
            {
                "id": 18,
                "name": "Karen Johnson",
                "age": 37,
                "preferred_time": "morning",
                "problem": "stomach",
            
            },
            {
                "id": 19,
                "name": "Christopher Davis",
                "age": 43,
                "preferred_time": "evening",
                "problem": "back",
                
            },
            {
                "id": 20,
                "name": "Amanda Smith",
                "age": 31,
                "preferred_time": "morning",
                "problem": "chest",
                
            }
        
        
    ];

    // Function to generate a random number between min and max (inclusive)
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to display a list of appointments
    function displayAppointments() {
        // Clear the existing list of appointments
        appointmentsList.innerHTML = "";

        // Generate at least 5 random appointments
        for (let i = 0; i < 5; i++) {
            const randomIndex = getRandomInt(0, patients.length - 1);
            const patient = patients[randomIndex];

            const listItem = document.createElement("li");
            listItem.textContent = `${patient.name} - Problem: ${patient.problem},  Time: ${patient.preferred_time}`;

            const rescheduleButton = document.createElement("button");
            rescheduleButton.textContent = "Reschedule";
            rescheduleButton.addEventListener("click", () => {
                // Add reschedule logic here
                alert(`Reschedule ${patient.name}'s appointment`);
            });

            listItem.appendChild(rescheduleButton);
            appointmentsList.appendChild(listItem);
        }
    }

    // Display the appointments when the page loads
    displayAppointments();
});
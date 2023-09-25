document.addEventListener("DOMContentLoaded", function () {
    // Fetch appointments from the patient database (response.json)
    fetch("pat.json")
        .then((response) => response.json())
        .then((data) => {
            // Filter and display appointments for today (you may need to modify this logic)
            const todayAppointments = data.filter((appointment) => {
                const appointmentDate = new Date(appointment.time);
                const currentDate = new Date();
                return (
                    appointmentDate.getDate() === currentDate.getDate() &&
                    appointmentDate.getMonth() === currentDate.getMonth() &&
                    appointmentDate.getFullYear() === currentDate.getFullYear()
                );
            });

            // Display the appointments on the page
            const doctorAppointmentsContainer = document.getElementById("doctor-appointments");
            if (todayAppointments.length === 0) {
                doctorAppointmentsContainer.innerHTML = "<p>No appointments for today.</p>";
            } else {
                todayAppointments.forEach((appointment) => {
                    const appointmentInfo = document.createElement("div");
                    appointmentInfo.classList.add("appointment-info");
                    appointmentInfo.innerHTML = `
                        <h3>Name: ${appointment.name}</h3>
                        <p>Age: ${appointment.age}</p>
                        <p>Time: ${appointment.time}</p>
                        <p>Problem Area: ${appointment.problemArea}</p>
                    `;
                    doctorAppointmentsContainer.appendChild(appointmentInfo);
                });
            }
        })
        .catch((error) => {
            console.error("Error fetching appointments:", error);
        });
});
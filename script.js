document.addEventListener('DOMContentLoaded', function() {
    loadAppointments();
});

let appointments = [
    { id: 1, patientName: "John Doe", date: "2024-03-23", status: "pending" },
    { id: 2, patientName: "Jane Doe", date: "2024-03-24", status: "pending" }
];

function loadAppointments() {
    const appointmentsList = document.getElementById('appointmentsList');
    appointmentsList.innerHTML = '';

    appointments.forEach(appointment => {
        const elem = document.createElement('div');
        elem.classList.add('appointment');
        elem.innerHTML = `
            <p>Patient: ${appointment.patientName} - Date: ${appointment.date} - Status: ${appointment.status}</p>
            <button onclick="confirmAppointment(${appointment.id})">Confirm</button>
            <button onclick="cancelAppointment(${appointment.id})">Cancel</button>
        `;
        appointmentsList.appendChild(elem);
    });
}

function confirmAppointment(id) {
    const index = appointments.findIndex(appt => appt.id === id);
    if (index !== -1) {
        appointments[index].status = "confirmed";
        loadAppointments(); // Update UI
        displayMessage(`Appointment with ${appointments[index].patientName} confirmed.`, 'success');
    } else {
        displayMessage("Appointment not found.", 'error');
    }
}

function cancelAppointment(id) {
    const index = appointments.findIndex(appt => appt.id === id);
    if (index !== -1) {
        appointments[index].status = "cancelled";
        loadAppointments(); // Update UI
        displayMessage(`Appointment with ${appointments[index].patientName} cancelled.`, 'success');
    } else {
        displayMessage("Appointment not found.", 'error');
    }
}


function displayMessage(message, type = 'info') {
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.textContent = message; // Set the text message
    messageContainer.className = ''; // Reset any previous class
    messageContainer.classList.add(`message-${type}`); // Add the current message type class
    messageContainer.style.display = 'block'; // Make the container visible

    // Optionally, clear the message after a delay
    setTimeout(() => {
        messageContainer.style.display = 'none';
        messageContainer.textContent = '';
    }, 3000);
}

displayMessage('Appointment confirmed.', 'success');
displayMessage('Appointment cancellation failed.', 'error');
displayMessage('Loading appointments...', 'info');

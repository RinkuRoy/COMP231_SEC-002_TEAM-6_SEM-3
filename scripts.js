
document.addEventListener("DOMContentLoaded", function() {
    const bookForm = document.getElementById("book-appointment-form");
    const rescheduleForm = document.getElementById("reschedule-appointment-form");
    const cancelForm = document.getElementById("cancel-appointment-form");
    const feedbackMessage = document.getElementById("feedback-message");
  
    bookForm.addEventListener("submit", function(event) {
      event.preventDefault();
     
      feedbackMessage.textContent = "Appointment booked successfully!";
      feedbackMessage.style.display = "block";
    });
  
    rescheduleForm.addEventListener("submit", function(event) {
      event.preventDefault();
     
      feedbackMessage.textContent = "Appointment rescheduled successfully!";
      feedbackMessage.style.display = "block";
    });
  
    cancelForm.addEventListener("submit", function(event) {
      event.preventDefault();
     
      feedbackMessage.textContent = "Appointment canceled successfully!";
      feedbackMessage.style.display = "block";
    });
  });
  
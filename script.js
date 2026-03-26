// FORM SUBMIT
document.getElementById("supportForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Show success message
    document.getElementById("responseMsg").innerText =
        "Thank you! Our healthcare team will contact you soon.";

    // ✅ CLEAR FORM
    this.reset();
});

// CHATBOT FUNCTION
function chatbot() {
    let inputBox = document.getElementById("userInput");
    let input = inputBox.value.toLowerCase();
    let reply = "";

    if (input.includes("appointment")) {
        reply = "You can book an appointment by filling this form.";
    } 
    else if (input.includes("help")) {
        reply = "Our volunteers will contact you shortly.";
    } 
    else if (input.includes("hello")) {
        reply = "Hello! How can I assist you?";
    } 
    else {
        reply = "Sorry, I didn’t understand. Please try again.";
    }

    document.getElementById("botReply").innerText = reply;

    inputBox.value = "";   // clear
    inputBox.focus();      // cursor back
}
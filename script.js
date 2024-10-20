// Get form and display elements
var resumeForm = document.getElementById("resumeForm");
var resumeDisplay = document.getElementById("resume-display");
// Listen for form submission
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Collect form data
    var formData = new FormData(resumeForm);
    var resumeData = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        education: formData.get("Education"),
        experience: formData.get("Experience"),
        skills: formData.get("Skills"),
    };
    // Call the function to generate the resume
    generateResume(resumeData);
});
// Function to dynamically generate the resume
function generateResume(data) {
    // Create a structured resume output
    var resumeHTML = "\n        <h2>Resume</h2>\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> ".concat(data.name, "</p>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(data.education, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(data.experience, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(data.skills, "</p>\n    ");
    // Display the generated resume in the DOM
    resumeDisplay.innerHTML = resumeHTML;
}

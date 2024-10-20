// Type definitions for form inputs
type ResumeData = {
    name: string;
    email: string;
    phone: string;
    education: string;
    experience: string;
    skills: string;
};

// Get form and display elements
const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const resumeDisplay = document.getElementById("resume-display") as HTMLElement;

// Listen for form submission
resumeForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    
    // Collect form data
    const formData = new FormData(resumeForm);
    
    const resumeData: ResumeData = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,   
        education: formData.get("Education") as string,
        experience: formData.get("Experience") as string,
        skills: formData.get("Skills") as string,
    };

    // Call the function to generate the resume
    generateResume(resumeData);
});

// Function to dynamically generate the resume
function generateResume(data: ResumeData) {
    // Create a structured resume output
    const resumeHTML = `
        <h2>Resume</h2>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>

        <h3>Education</h3>
        <p>${data.education}</p>

        <h3>Experience</h3>
        <p>${data.experience}</p>

        <h3>Skills</h3>
        <p>${data.skills}</p>
    `;

    // Display the generated resume in the DOM
    resumeDisplay.innerHTML = resumeHTML;
}

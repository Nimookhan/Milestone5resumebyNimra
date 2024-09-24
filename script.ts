document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();


/// get form element;
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const cnicElement = document.getElementById('cnic') as HTMLInputElement;
    const contactElement = document.getElementById('contact') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const cityElement = document.getElementById('city') as HTMLInputElement;
    const countryElement = document.getElementById('country') as HTMLInputElement;
    // Education
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    // Experince
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    // SKILLSS
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
    // check if all element present
    
    if (profilePictureInput && nameElement && emailElement && cnicElement && contactElement && addressElement && cityElement
        && countryElement && educationElement && experienceElement && skillsElement) {
        

        
        //  GET values from form
        const name = nameElement.value;
        const email = emailElement.value;
        const cnic = cnicElement.value;
        const contact = contactElement.value;
        const address = addressElement.value;
        const city = cityElement.value;
        const country = countryElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;


        // Handling the profile picture
        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

        // Generate the resume html content
        // Create the Resume output
        const resumeHTML = `
            <h2>Resume</h2>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profile-picture" style="width:150px;height:150px;">` : ""} 
            <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span></p>
            <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span></p>
            <p><strong>CNIC:</strong> <span id="edit-cnic" class="editable"> ${cnic} </span></p>
            <p><strong>Contact:</strong> <span id="edit-contact" class="editable"> ${contact} </span></p>
            <p><strong>Address:</strong> <span id="edit-address" class="editable"> ${address} </span></p>
            <p><strong>City:</strong> <span id="edit-city" class="editable"> ${city} </span></p>
            <p><strong>Country:</strong> <span id="edit-country" class="editable"> ${country}</span></p>

            <h3>Education</h3>
            <p id="edit-education" class="editable">${education}</p>

            <h3>Experience</h3>
            <p id="edit-experience" class="editable">${experience}</p>

            <h3>Skills</h3>
            <p id="edit-skills" class="editable">${skills}</p>
        `;



        // Display resume output
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;
            resumeOutputElement.classList.remove("hidden");


            // create container for buttons
            const buttonscontainer = document.createElement("div");
            buttonscontainer.id = "buttonscontainer";
            resumeOutputElement.appendChild(buttonscontainer);

            // ADD downlod pdf button
            const downloadbutton = document.createElement("button");
            downloadbutton.textContent = "Download as PDF";
            downloadbutton.addEventListener("click", () => {
                window.print();     /// open print dialog, allowing the save pdf
            });
            buttonscontainer.appendChild(downloadbutton);


            // ADDS share links buttons
            const sharelinkbutton = document.createElement("button");
            sharelinkbutton.textContent = "Copy Shareable Link";
            sharelinkbutton.addEventListener("click", async () => {
                try {
                    // create a unique shareable link (simulate it in this case)
                    const shareablelink = `https://yourdomain.com/resumes/${name.replace(
                        /\s+/g,
                        "_"
                    )}_cv.html`;
                    // use clipborad api to copy the shareable link
                    await navigator.clipboard.writeText(shareablelink);
                    alert("shareable link copied to clipborad!");
                } catch (err) {
                    console.error("failed to copy link: ", err);
                    alert("failed to copy link to clipborad. please try again");
                }
            });
            buttonscontainer.appendChild(sharelinkbutton);
        } else {
            console.error("Resume output container not found");
        }
        } else {
        console.error("From element are missing");
    }
});




    






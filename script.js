const processSteps = {
    1: { badge: "STEP 01", title: "Raw Footage to Story", desc: "I first understand the story - what emotion we want. Then I organize footage, select best takes, build the narrative frame by frame.", icon: "fa-solid fa-film", deliverable: "Deliverable: Story Cut" },
    2: { badge: "STEP 02", title: "Cut & Beat Sync", desc: "The heart of editing - cutting on beat, smooth transitions, J/L cuts to keep viewers hooked till the end.", icon: "fa-solid fa-scissors", deliverable: "Deliverable: Rough Cut with Music" },
    3: { badge: "STEP 03", title: "VFX & 3D Magic", desc: "Adding motion graphics, tracking, 3D elements. My favorite part - ✨ VFX & 3D in progress, learning Blender daily.", icon: "fa-solid fa-wand-magic-sparkles", deliverable: "Deliverable: VFX Composite" },
    4: { badge: "STEP 04", title: "Color Grading", desc: "Color is emotion. Teal & orange, cinematic LUTs, skin tone correction in DaVinci to make it look premium.", icon: "fa-solid fa-palette", deliverable: "Deliverable: Graded Master" },
    5: { badge: "STEP 05", title: "Sound & Export", desc: "Sound design, SFX, final mix and export optimized for Instagram, YouTube, Reels - ready to go viral.", icon: "fa-solid fa-rocket", deliverable: "Deliverable: Final Viral Video" }
};
function selectProcessStep(stepNum) {
    document.querySelectorAll('.process-step-card').forEach((card, idx) => {
        if (idx + 1 === stepNum) card.classList.add('active');
        else card.classList.remove('active');
    });
    const data = processSteps[stepNum];
    document.getElementById('stepBadge').innerText = data.badge;
    document.getElementById('stepTitle').innerText = data.title;
    document.getElementById('stepDescription').innerText = data.desc;
    document.getElementById('stepIcon').className = `${data.icon} fs-1 mb-2`;
    document.getElementById('stepIcon').style.color = "var(--accent-pink)";
    document.getElementById('stepDeliverable').innerText = data.deliverable;
}
function openProjectModal(title, subtitle, desc, img) {
    document.getElementById('modalProjectTitle').innerText = title;
    document.getElementById('modalProjectSubtitle').innerText = subtitle;
    document.getElementById('modalProjectDesc').innerText = desc;
    document.getElementById('modalProjectImg').src = img;
    new bootstrap.Modal(document.getElementById('projectModal')).show();
}
function handleFormSubmit(event){
    event.preventDefault();

    // CHANGE 1: YAHAN APNA NUMBER DAALO - 91 ke saath
    const yourNumber = "9179828 93324"; 

    let name = document.getElementById('c_name').value;
    let phone = document.getElementById('c_phone').value;
    let email = document.getElementById('c_email').value || "Not given";
    let project = document.getElementById('c_project').value;
    let budget = document.getElementById('c_budget').value;
    let deadline = document.getElementById('c_deadline').value || "Not mentioned";
    let link = document.getElementById('c_link').value || "No link";
    let msg = document.getElementById('c_msg').value;

    // WhatsApp Message Template
    let whatsappText = 
`🎬 *NEW CLIENT LEAD*%0A%0A`+
`👤 *Name:* ${name}%0A`+
`📱 *Client Phone:* ${phone}%0A`+
`📧 *Email:* ${email}%0A`+
`🎥 *Project:* ${project}%0A`+
`💰 *Budget:* ${budget}%0A`+
`⏰ *Deadline:* ${deadline}%0A`+
`📁 *Footage:* ${link}%0A%0A`+
`💬 *Idea:*%0A${msg}`;

    // WhatsApp pe bhejo
    window.open(`https://wa.me/${yourNumber}?text=${whatsappText}`, '_blank');
}

document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);
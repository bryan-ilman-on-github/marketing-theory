// Toggle section collapse/expand
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const sectionTitle = section.previousElementSibling;

    section.classList.toggle('active');
    sectionTitle.classList.toggle('active');
}

// Toggle subsection collapse/expand
function toggleSubsection(subsectionId) {
    const subsection = document.getElementById(subsectionId);
    const subsectionTitle = subsection.previousElementSibling;

    subsection.classList.toggle('active');
    subsectionTitle.classList.toggle('active');
}

// Load and render markdown note
async function loadNote(filepath) {
    const contentDiv = document.getElementById('note-content');

    // Remove active class from all links
    document.querySelectorAll('.note-link').forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to clicked link
    event.target.classList.add('active');

    try {
        const response = await fetch(filepath);

        if (!response.ok) {
            throw new Error(`Could not load ${filepath}`);
        }

        const markdown = await response.text();
        const html = marked.parse(markdown);

        contentDiv.innerHTML = html;

        // Scroll to top of content
        document.querySelector('.content').scrollTop = 0;

    } catch (error) {
        contentDiv.innerHTML = `
            <div class="error-message">
                <h2>Error Loading Note</h2>
                <p>Could not load the requested note. The file may not exist yet.</p>
                <p><small>${error.message}</small></p>
            </div>
        `;
    }
}

// Initialize: Open first section by default
document.addEventListener('DOMContentLoaded', function() {
    // Optional: Auto-open first section
    // toggleSection('general-design');
});

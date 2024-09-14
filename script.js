function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    var links = menu.querySelectorAll('a');
    
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
        links.forEach((link, index) => {
            link.style.animationDelay = `${index * 0.2}s`;
        });
    } else {
        menu.style.display = "none";
    }
}


function toggleExploreLinks() {
    var exploreLinks = document.getElementById("explore-links");
    if (exploreLinks.style.display === "none" || exploreLinks.style.display === "") {
        exploreLinks.style.display = "flex"; // Or block based on design
    } else {
        exploreLinks.style.display = "none";
    }
}

// Toggle the sliding grid for the Explore button
function toggleGrid() {
    var grid = document.getElementById("nav-grid");
    if (grid.classList.contains("show-grid")) {
        grid.classList.remove("show-grid");  // Hide the grid
    } else {
        grid.classList.add("show-grid");  // Show the grid
    }
}

// Highlight the current page link in the grid
function highlightCurrentPage() {
    var path = window.location.pathname;
    var page = path.split("/").pop();  // Get the current page file name

    // Clear any existing highlights
    document.querySelectorAll('.sliding-grid a').forEach(link => {
        link.classList.remove('current-page');
    });

    // Highlight the current page link
    if (page === 'index.html') {
        document.getElementById("home-link").classList.add('current-page');
    } else if (page === 'about.html') {
        document.getElementById("about-link").classList.add('current-page');
    } else if (page === 'education-experience.html') {
        document.getElementById("education-link").classList.add('current-page');
    } else if (page === 'projects.html') {
        document.getElementById("projects-link").classList.add('current-page');
    } else if (page === 'interests.html') {
        document.getElementById("interests-link").classList.add('current-page');
    }
}

// Close the grid when clicking outside of it
window.onclick = function(event) {
    var grid = document.getElementById("nav-grid");
    if (!event.target.matches('#nav-toggle') && !grid.contains(event.target)) {
        grid.classList.remove("show-grid");
    }
}

// Call the highlight function on page load
document.addEventListener('DOMContentLoaded', highlightCurrentPage);


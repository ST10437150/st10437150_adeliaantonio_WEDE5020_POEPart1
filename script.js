
// Add active class to the current page link
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const currentPage = window.location.pathname.split("/").pop(); // Get current page filename

    navLinks.forEach(link => {
        // Check if the href attribute matches the current page
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    //Timestamp in footer
    const timestamp = document.getElementById("timestamp");
    const now = new Date();
    const formattedTime = now.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    timestamp.textContent = `${formattedTime}`;
});
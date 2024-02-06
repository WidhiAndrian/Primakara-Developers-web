document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("#navigation-wrapper a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 110, // Sesuaikan offset jika ada header yang melekat
                    behavior: "smooth"
                });
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const scrollLinks = document.querySelectorAll('.scroll-link');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            const targetId = this.getAttribute('href');

            // Ensure it's an internal link and not an external page
            if (targetId.startsWith("#")) {
                event.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});


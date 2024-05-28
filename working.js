document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    const contents = document.querySelectorAll(".content");

    links.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("id") + "-content";
            contents.forEach(function(content) {
                content.classList.remove("active");
            });
            document.getElementById(targetId).classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            scrollToElement(targetElement);
        });
    });

    function scrollToElement(element) {
        window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop
        });
    }
});
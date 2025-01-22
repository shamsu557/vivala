document.addEventListener("DOMContentLoaded", function () {
    // Preloader for initial page load
    setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
    }, 2500); // 2.5 seconds matches spinner animation duration

    // Preloader for navbar links
    const preloader = document.getElementById("preloader");
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            preloader.style.display = "flex"; // Show preloader
            setTimeout(() => {
                preloader.style.display = "none"; // Hide preloader after delay
            }, 500); // Simulate loading delay for 0.5 seconds
        });
    });

    // Animate gallery images
    const galleryImages = document.querySelectorAll("#gallery .animated");
    galleryImages.forEach((img, index) => {
        // Alternate between fall and rise animations
        const animationName = index % 2 === 0 ? "fall" : "rise";
        img.style.animationName = animationName;
        // Add delay for a cascading effect
        img.style.animationDelay = `${index * 0.2}s`;
        img.style.opacity = "1"; // Ensure images are visible after animation
    });

    // Navbar toggler and cancel button functionality
    const toggler = document.getElementById("navbar-toggler");
    const cancel = document.getElementById("navbar-cancel");
    const navbarNav = document.getElementById("navbarNav");

    toggler.addEventListener("click", function () {
        // Hide toggler and show cancel button
        toggler.style.display = "none";
        cancel.style.display = "block";
    });

    cancel.addEventListener("click", function () {
        // Hide cancel button and show toggler
        toggler.style.display = "block";
        cancel.style.display = "none";
        navbarNav.classList.remove("show"); // Collapse the navbar
    });

    // Close the navbar when a nav-link is clicked (on mobile)
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            toggler.style.display = "block"; // Show toggler
            cancel.style.display = "none"; // Hide cancel button
            navbarNav.classList.remove("show"); // Collapse the navbar
        });
    });

    // Back to top button functionality
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
});

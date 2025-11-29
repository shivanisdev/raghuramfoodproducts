$(document).ready(function() {
    // Mobile Menu Toggle
    $('#mobile-menu').click(function() {
        $(this).toggleClass('active');
        $('.nav-menu').toggleClass('active');
    });

    // Close mobile menu when a link is clicked
    $('.nav-link').click(function() {
        $('#mobile-menu').removeClass('active');
        $('.nav-menu').removeClass('active');
    });

    // Smooth Scrolling
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 70
        }, 500, 'linear');
    });

    // Form Submission (Demo)
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
        $(this)[0].reset();
    });
});

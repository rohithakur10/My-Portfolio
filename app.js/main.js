let bars = document.querySelector('.bars');
let cross = document.querySelector('.cross');
let mobileNav = document.querySelector('.mobile-nav');
let navLinks = document.querySelectorAll('.mobile-nav a');

bars.addEventListener('click',function() {
    mobileNav.classList.add('open');

});

cross.addEventListener('click',function() {
    mobileNav.classList.remove('open');

});

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        mobileNav.classList.remove('open');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const logo = document.querySelector('.logo-img');

    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.nav-icon');
            icon.style.transform = 'scale(1.2) rotate(10deg)';
        });

        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('.nav-icon');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Add hover effect for logo if it exists
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.style.transform = 'rotate(10deg)';
        });

        logo.addEventListener('mouseleave', () => {
            logo.style.transform = 'rotate(0deg)';
        });
    }
    
    // Add hover effect for section icons
    const sectionIcons = document.querySelectorAll('.section-icon');
    sectionIcons.forEach(icon => {
        console.log('Setting up icon:', icon);
        // Set initial state
        icon.style.transform = 'rotate(0deg)';
        icon.style.transition = 'transform 0.3s ease';

        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'rotate(10deg)';
        });

        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'rotate(0deg)';
        });
    });
});
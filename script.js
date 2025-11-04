// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const backToTopButton = document.getElementById('back-to-top');

    // Toggle mobile menu
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            const isExpanded = mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuButton.querySelector('i');
            
            if (isExpanded) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });
    }

    // Back to top button
    if (backToTopButton) {
        // Show/hide back to top button on scroll
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        });

        // Smooth scroll to top
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Don't prevent default for # links without a target
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    const icon = mobileMenuButton.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
                
                // Scroll to target
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation classes when elements come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate-fade-in');
            }
        });
    };

    // Run once on page load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
});

// Add a simple console greeting
console.log('%c👋 Hello there! Thanks for checking out the code.', 
    'color: #4f46e5; font-size: 16px; font-weight: bold;');
console.log('%c🔧 Built with Tailwind CSS, HTML5, and vanilla JavaScript', 
    'color: #666; font-size: 14px;');

// Glitchy Hope Modal and Error Screen
document.addEventListener('DOMContentLoaded', function() {
    const hopeModal = document.getElementById('hope-modal');
    const errorScreen = document.getElementById('error-screen');
    
    // Show modal after 2 seconds with glitch effect
    const showHopeModal = setTimeout(() => {
        hopeModal.classList.remove('opacity-0', 'invisible');
        hopeModal.classList.add('opacity-100', 'visible');
        
        // Add random flicker effects
        const flickerInterval = setInterval(() => {
            if (Math.random() > 0.7) {
                hopeModal.style.opacity = Math.random() * 0.5 + 0.5;
            }
        }, 100);
        
        // Hide modal after 5 seconds and show error screen
        setTimeout(() => {
            clearInterval(flickerInterval);
            hopeModal.classList.remove('opacity-100', 'visible');
            hopeModal.classList.add('opacity-0', 'invisible');
            
            // Show error screen after a short delay
            setTimeout(() => {
                errorScreen.classList.remove('opacity-0', 'invisible');
                errorScreen.classList.add('opacity-100', 'visible');
                
                // Add background error text
                const errorTexts = [
                    'ERROR', 'FAILURE', 'WARNING', 'CRITICAL', 'SYSTEM', 
                    '0xDEADBEEF', '0x00000000', '0xFFFFFFFF', '0x1BADB002',
                    'SEGFAULT', 'KERNEL PANIC', 'STACK OVERFLOW', 'MEMORY LEAK',
                    'ACCESS DENIED', 'INVALID OPERATION', 'BUFFER OVERRUN'
                ];
                
                // Create horizontal error text
                for (let i = 0; i < 15; i++) {
                    const text = document.createElement('div');
                    text.className = 'error-bg-text horizontal';
                    text.style.left = `${Math.random() * 100}%`;
                    text.style.animationDelay = `-${Math.random() * 20}s`;
                    text.textContent = Array(20).fill(0).map(() => 
                        errorTexts[Math.floor(Math.random() * errorTexts.length)]
                    ).join(' ');
                    errorScreen.appendChild(text);
                }
                
                // Create vertical error text
                for (let i = 0; i < 10; i++) {
                    const text = document.createElement('div');
                    text.className = 'error-bg-text vertical';
                    text.style.top = `${Math.random() * 100}%`;
                    text.style.animationDelay = `-${Math.random() * 20}s`;
                    text.textContent = Array(40).fill(0).map(() => 
                        errorTexts[Math.floor(Math.random() * errorTexts.length)]
                    ).join(' ');
                    errorScreen.appendChild(text);
                }
                
                // Add more intense glitch effect
                const errorInterval = setInterval(() => {
                    if (Math.random() > 0.3) {
                        errorScreen.style.opacity = Math.random() * 0.6 + 0.4;
                    }
                }, 50);
                
                // Add random screen shake
                const shakeInterval = setInterval(() => {
                    const x = (Math.random() * 10 - 5) + 'px';
                    const y = (Math.random() * 10 - 5) + 'px';
                    errorScreen.style.transform = `translate(${x}, ${y})`;
                    
                    // Random color shift
                    if (Math.random() > 0.7) {
                        const hue = Math.floor(Math.random() * 60) - 30; // Reddish colors
                        errorScreen.style.filter = `hue-rotate(${hue}deg)`;
                    }
                }, 100);
                
                // Stop effects after 10 seconds
                setTimeout(() => {
                    clearInterval(errorInterval);
                    clearInterval(shakeInterval);
                    errorScreen.style.opacity = '1';
                    errorScreen.style.transform = 'none';
                    errorScreen.style.filter = 'none';
                }, 10000);
                
            }, 5000); // 5 seconds after message disappears
            
        }, 5000); // Show for 5 seconds
        
    }, 2000); // Initial 2 second delay
});

// ======= MAIN.JS =======
document.addEventListener('DOMContentLoaded', function() {
    // Loading screen animation
    const loadingScreen = document.querySelector('.loading-screen');
    const loadingProgress = document.querySelectorAll('.loading-progress');
    const body = document.querySelector('body');
    
    // Simulate loading progress
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.floor(Math.random() * 10) + 5;
        if (progress > 100) progress = 100;
        
        loadingProgress.forEach(element => {
            element.textContent = progress + '%';
        });
        
        if (progress === 100) {
            clearInterval(progressInterval);
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                body.style.overflow = 'visible';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    initializeAnimations();
                }, 500);
            }, 500);
        }
    }, 300);
    
    // Mobile Navigation Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    mobileNavToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');
        
        if (this.classList.contains('active')) {
            this.querySelector('span:nth-child(1)').style.transform = 'rotate(45deg) translate(5px, 5px)';
            this.querySelector('span:nth-child(2)').style.opacity = '0';
            this.querySelector('span:nth-child(3)').style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            this.querySelector('span:nth-child(1)').style.transform = 'none';
            this.querySelector('span:nth-child(2)').style.opacity = '1';
            this.querySelector('span:nth-child(3)').style.transform = 'none';
        }
    });
    
    // Mobile Navigation Links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            mobileNavToggle.classList.remove('active');
            mobileNavToggle.querySelector('span:nth-child(1)').style.transform = 'none';
            mobileNavToggle.querySelector('span:nth-child(2)').style.opacity = '1';
            mobileNavToggle.querySelector('span:nth-child(3)').style.transform = 'none';
        });
    });
    
    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Navigation Active State
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mousedown', () => {
        cursor.style.width = '25px';
        cursor.style.height = '25px';
        cursor.style.borderColor = 'var(--primary-color)';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.width = '30px';
        cursor.style.height = '30px';
        cursor.style.borderColor = 'var(--primary-color)';
    });
    
    document.querySelectorAll('a, button, input, textarea, .btn').forEach(element => {
        element.addEventListener('mouseover', () => {
            cursor.style.width = '50px';
            cursor.style.height = '50px';
            cursor.style.borderColor = 'var(--primary-color)';
            cursor.style.background = 'rgba(0, 212, 255, 0.1)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.width = '30px';
            cursor.style.height = '30px';
            cursor.style.borderColor = 'var(--primary-color)';
            cursor.style.background = 'transparent';
        });
    });
    
    // Terminal Text Animation
    function initializeAnimations() {
        const terminalInput = document.querySelector('.input-line .cursor-terminal');
        
        if (terminalInput) {
            setInterval(() => {
                terminalInput.style.opacity = terminalInput.style.opacity === '0' ? '1' : '0';
            }, 500);
        }
        
        // Create particles for background
        createParticles();
    }
    
    // Particles Background
    function createParticles() {
        const particlesContainer = document.querySelector('.particles-background');
        
        if (!particlesContainer) return;
        
        for (let i = 0; i < 100; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            const size = Math.random() * 5 + 1;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;
            
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = posX + '%';
            particle.style.top = posY + '%';
            particle.style.animation = `float ${duration}s linear infinite`;
            particle.style.animationDelay = delay + 's';
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            particle.style.background = 'var(--primary-color)';
            particle.style.borderRadius = '50%';
            particle.style.position = 'absolute';
            particle.style.boxShadow = '0 0 10px var(--primary-color)';
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // AI Chat Widget
    const chatToggle = document.querySelector('.chat-toggle');
    const chatContainer = document.querySelector('.chat-container');
    const chatClose = document.querySelector('.chat-close');
    const chatInput = document.querySelector('.chat-input input');
    const sendBtn = document.querySelector('.send-btn');
    const chatMessages = document.querySelector('.chat-messages');
    
    if (chatToggle && chatContainer && chatClose) {
        // Initialize notification
        setTimeout(() => {
            document.querySelector('.notification-dot').style.display = 'block';
        }, 5000);
        
        chatToggle.addEventListener('click', () => {
            chatContainer.classList.toggle('active');
            chatToggle.classList.toggle('active');
            document.querySelector('.notification-dot').style.display = 'none';
            
            if (chatContainer.classList.contains('active')) {
                chatInput.focus();
            }
        });
        
        chatClose.addEventListener('click', () => {
            chatContainer.classList.remove('active');
            chatToggle.classList.remove('active');
        });
        
        // Send message function
        function sendMessage() {
            const message = chatInput.value.trim();
            if (message === '') return;
            
            // Add user message
            addMessage(message, 'user');
            chatInput.value = '';
            
            // Simulate bot response
            setTimeout(() => {
                let botResponse;
                
                if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
                    botResponse = "Hello! How can I help you explore the power of 3, 6, and 9 in AI solutions today?";
                } else if (message.toLowerCase().includes('about') || message.toLowerCase().includes('who are you')) {
                    botResponse = "36nine.ai is inspired by Nikola Tesla's belief that 3, 6, and 9 are keys to understanding the universe. We apply these principles to AI, guiding you through Creation (3), Harmony (6), and Fulfillment (9) in your AI journey.";
                } else if (message.toLowerCase().includes('service') || message.toLowerCase().includes('help')) {
                    botResponse = "We offer AI strategy development, implementation services, and business intelligence solutions. Would you like to know more about a specific service?";
                } else if (message.toLowerCase().includes('contact') || message.toLowerCase().includes('talk')) {
                    botResponse = "You can reach our team at info@36nine.ai or call us at +1 (555) 369-3690. Would you like me to schedule a consultation for you?";
                } else {
                    botResponse = "That's an interesting question! Our team would be happy to discuss this in more detail. Would you like to schedule a call with one of our AI specialists?";
                }
                
                addMessage(botResponse, 'bot');
            }, 1000);
        }
        
        // Add message to chat
        function addMessage(message, sender) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', sender);
            
            const content = document.createElement('div');
            content.classList.add('message-content');
            content.textContent = message;
            
            messageElement.appendChild(content);
            chatMessages.appendChild(messageElement);
            
            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
        
        // Send message on button click
        if (sendBtn) {
            sendBtn.addEventListener('click', sendMessage);
        }
        
        // Send message on Enter key
        if (chatInput) {
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });
        }
    }
    
    // Form Submissions
    const contactForm = document.getElementById('contactForm');
    const loginForm = document.getElementById('loginForm');
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! Our team will contact you soon.');
            contactForm.reset();
        });
    }
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Login functionality will be implemented soon. Thank you for your interest!');
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add float animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0) translateX(0);
        }
        25% {
            transform: translateY(-20px) translateX(10px);
        }
        50% {
            transform: translateY(0) translateX(20px);
        }
        75% {
            transform: translateY(20px) translateX(10px);
        }
        100% {
            transform: translateY(0) translateX(0);
        }
    }
`;
document.head.appendChild(style);

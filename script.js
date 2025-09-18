document.addEventListener('DOMContentLoaded', () => {
    // --- tsParticles Background ---
    particlesJS('particles-js', {
        "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle" }, "opacity": { "value": 0.5, "random": false }, "size": { "value": 3, "random": true }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false } },
        "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 } } },
        "retina_detect": true
    });

    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    // --- GSAP Panel Sliding ---
    registerBtn.addEventListener('click', () => {
        gsap.to(container, { duration: 0.5, ease: "power2.inOut", onStart: () => container.classList.add('active') });
    });

    loginBtn.addEventListener('click', () => {
        gsap.to(container, { duration: 0.5, ease: "power2.inOut", onStart: () => container.classList.remove('active') });
    });

    // --- Anime.js for Button Hover ---
    document.querySelectorAll('.submit-btn, .hidden').forEach(button => {
        button.addEventListener('mouseenter', () => {
            anime({
                targets: button,
                scale: 1.05,
                duration: 300,
                easing: 'easeOutSine'
            });
        });
        button.addEventListener('mouseleave', () => {
            anime({
                targets: button,
                scale: 1,
                duration: 300,
                easing: 'easeOutSine'
            });
        });
    });

    // --- Password Strength Meter ---
    const regPassword = document.getElementById('reg-password');
    const strengthBar = document.querySelector('.strength-bar');
    const strengthText = document.querySelector('.password-strength p');

    if (regPassword && strengthBar && strengthText) {
        regPassword.addEventListener('input', () => {
            const password = regPassword.value;
            let strength = 0;
            if (password.length >= 6) strength++;
            if (password.length >= 10) strength++;
            if (/[A-Z]/.test(password)) strength++;
            if (/[0-9]/.test(password)) strength++;
            if (/[^A-Za-z0-9]/.test(password)) strength++;
            
            const levels = [
                { w: '0%', c: '#e74c3c', t: 'Password is weak' },
                { w: '20%', c: '#e74c3c', t: 'Password is weak' },
                { w: '40%', c: '#f1c40f', t: 'Password is okay' },
                { w: '60%', c: '#f1c40f', t: 'Password is good' },
                { w: '80%', c: '#2ecc71', t: 'Password is strong' },
                { w: '100%', c: '#27ae60', t: 'Password is very strong' }
            ];
            
            const { w, c, t } = levels[strength];
            strengthBar.style.setProperty('--strength-width', w);
            strengthBar.style.setProperty('--strength-color', c);
            strengthText.textContent = t;
        });
    }
});


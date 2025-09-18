@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background-color: #1a1a2e;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
}

#particles-js {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
}

.container {
    position: relative;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
    background: rgba(22, 27, 34, 0.7);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    overflow: hidden;
    color: #fff;
    z-index: 2;
}

.form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}

.sign-in {
    left: 0;
    width: 50%;
    z-index: 2;
}

.container.active .sign-in {
    transform: translateX(100%);
}

.sign-up {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
}

.container.active .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
}

@keyframes show {
    0%, 49.99% {
        opacity: 0;
        z-index: 1;
    }
    50%, 100% {
        opacity: 1;
        z-index: 5;
    }
}

form {
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    height: 100%;
}

h1 {
    font-weight: 600;
    margin-bottom: 20px;
}

.social-icons {
    margin: 20px 0;
}

.social-icons a {
    border: 1px solid #30363d;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
    color: #fff;
    text-decoration: none;
    transition: all 0.3s;
}

.social-icons a:hover {
    background-color: #58a6ff;
    border-color: #58a6ff;
}

span {
    font-size: 12px;
    color: #8b949e;
    margin-bottom: 10px;
}

input {
    background-color: #161b22;
    border: 1px solid #30363d;
    border-radius: 8px;
    padding: 10px 15px;
    margin: 8px 0;
    width: 100%;
    color: #c9d1d9;
    outline: none;
}

input:focus {
    border-color: #58a6ff;
}

a {
    color: #8b949e;
    font-size: 13px;
    text-decoration: none;
    margin: 15px 0 10px;
}

.submit-btn, .hidden {
    background-color: #58a6ff;
    color: #fff;
    font-size: 12px;
    padding: 10px 45px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 10px;
    cursor: pointer;
}

.hidden {
    background-color: transparent;
    border-color: #fff;
}

.toggle-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    z-index: 1000;
    transition: all 0.6s ease-in-out;
}

.container.active .toggle-container {
    transform: translateX(-100%);
}

.toggle {
    background: linear-gradient(to right, #7b4397, #dc2430);
    height: 100%;
    color: #fff;
    position: relative;
    left: -100%;
    width: 200%;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
}

.container.active .toggle {
    transform: translateX(50%);
}

.toggle-panel {
    position: absolute;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 30px;
    text-align: center;
    top: 0;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
}

.toggle-left {
    transform: translateX(-200%);
}

.container.active .toggle-left {
    transform: translateX(0);
}

.toggle-right {
    right: 0;
    transform: translateX(0);
}

.container.active .toggle-right {
    transform: translateX(200%);
}

.password-strength {
    width: 100%;
}

.strength-bar {
    width: 100%;
    height: 4px;
    background-color: #333;
    border-radius: 2px;
    position: relative;
    overflow: hidden;
    margin-top: -5px;
}

.strength-bar::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: var(--strength-width, 0%);
    background-color: var(--strength-color, #e74c3c);
    border-radius: 2px;
    transition: width 0.3s ease, background-color 0.3s ease;
}

.password-strength p {
    color: #aaa;
    font-size: 10px;
    text-align: right;
    margin-top: 2px;
}


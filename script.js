let passwordInput = document.getElementById("password");
let text = document.getElementById('text');
let passwordStrengths = document.querySelectorAll('.password-strength');

let isEmpty = true;

passwordInput.addEventListener('input', function(event){
    let password = event.target.value;
    let strength = Math.min(password.length, 12);
    let degree = strength * 30;

    let gradientColor = strength <= 4 ? "#ff2c1c" : (strength <= 8 ? "#ff9800" : "#12ff12");
    let strengthText = strength <= 4 ? "Weak" : (strength <= 8 ? "Medium" : "Strong");

    passwordStrengths.forEach(passwordStrength => {
        passwordStrength.style.background = `conic-gradient(${gradientColor} ${degree}deg, #111 ${degree}deg)`;
    });

    if (password === "") {
        text.textContent = "Password Strength Checker";
        text.style.color = "#fff";
        isEmpty = true;
    } else {
        text.textContent = `Password Strength ${strengthText}`;
        text.style.color = gradientColor;
        isEmpty = false;
    }
    
});

// Initially, set the text content to "Password Strength Checker"
text.textContent = "Password Strength Checker";

const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = "AZERTYUIOPQSDFGHJKLMWXCVBN";
const dataNumber = "1234567890";
const dataSymbols = "!:;,ù*$^&é";
const rangeValue = document.getElementById("password-length");
const generateButton = document.querySelector('#generateButton');
const passwordOutput = document.querySelector('#password-output')

function generatePassword() {
    let data = [];
    let password = "";

    if(lowercase.checked) data.push(...dataLowercase);
    if(uppercase.checked) data.push(...dataUppercase);
    if(number.checked) data.push(...dataNumber);
    if(symbols.checked) data.push(...dataSymbols);

    if (data.length === 0) {
        alert('Veuillez sélectionner des critères');
        return;
    }

    for(i=0; i < rangeValue.value; i++) {
        password += data[Math.floor(Math.random()* data.length)];
        
        passwordOutput.value = password;

        passwordOutput.select();
        document.execCommand("copy");

        generateButton.textContent = 'Copié !';

        setTimeout(() => {
            generateButton.textContent = 'Générer mot de passe';
        }, 200)
    }
}

generateButton.addEventListener('click', generatePassword);
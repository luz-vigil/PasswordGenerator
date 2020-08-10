// Assignment Code
var generateEl = document.getElementById("generate");
var lengthEl = document.getElementById("length");
var lowerCaseEl = document.getElementById("lowerCase");
var upperCaseEl = document.getElementById("upperCase");
var numbersEl = document.getElementById("numbers");
var symbolEl = document.getElementById("symbol");
var resultEl = document.getElementById("result");


// Add event listener to generate button
generateEl.addEventListener("click", () => {
    var length = +lengthEl.value;
    var hasLower = lowerCaseEl.checked;
    var hasUpper = upperCaseEl.checked;
    var hasNumber = numbersEl.checked;
    var hasSymbol = symbolEl.checked;
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

//Generate password function
function generatePassword(lower, upper, number, symbol, length){
    let generatedPassword = "";
    var typesCount = lower + upper + number + symbol;
    console.log("typesCount:", typesCount);
    var typesArr = [{lower}, {upper}, {number}, {symbol}].filter
    (
        item => Object.values(item)[0]
    );
    //console.log("typesArr:", typesArr);
    if(typesCount === 0){
        return "";
    }

    for (let i = 0; i < length; i += typesCount){
        typesArr.forEach(type => {
            var funcName = Object.keys(type)[0];
            //console.log("funcName:", funcName);
        });
    }

    var finalPassword = generatedPassword.slice(0, length);
    
    return finalPassword;
    
    

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol(){
    var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    return symbols[Math.floor(Math.random() * symbols.length)];
}


}
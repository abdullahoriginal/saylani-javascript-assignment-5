let originalText = "I love my country pakistan.<br>I like my city Faisalabad.<br>I love my Homeland"

var cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Burewala', 'Sheikhupura', 'Kashmir'];

// console.log(cities[1])

document.getElementById('originalTextBox').innerHTML = originalText;
function showOutput(output) {
    document.getElementById("output").innerHTML = output;
}
document.getElementById("clearOutput").addEventListener("click", function() {
    document.getElementById("output").innerText = "";
});
const clearInput = () => {
    document.getElementById("inputText").value = "";
}
const inputValue = () => {
    return document.getElementById("inputText").value;
}

function lowerCase() {
    let lowerCaseText = originalText.toLowerCase();
    document.getElementById("output").innerHTML = lowerCaseText;
    
}

function upperCase() {
    let upperCaseText = originalText.toUpperCase();
    document.getElementById("output").innerHTML = upperCaseText;
}

function capitalize() {
    let capitalizeText = '<span style="text-transform: capitalize;">' + originalText + '</span>';
    document.getElementById("output").innerHTML = capitalizeText;
}

function betterFormatting() {
    let text = document.getElementById("inputText").value;
    if (!text) {
        alert("Pleace type your text")
        return;
    }
    text = text.toLowerCase();
    document.getElementById('output').style.textTransform = 'capitalize';
    document.getElementById("output").innerHTML = text;

}

function printAllCities() {
    document.getElementById("output").innerHTML = "";
    for (let i = 0; i < cities.length; i++) {
        let num = i + 1;
        document.getElementById('output').innerHTML += num + ') ' + cities [i] + '<br>';
    }
}

function addCity() {
        let city = document.getElementById("inputText").value;
        if (city.length < 3) {
            alert('Pleace type your city name correctly.');
            return;
        }
        let cityFirstLetter = city.slice(0, 1).toUpperCase();
        console.log(cityFirstLetter);
        let cityAllLetters = city.slice(1).toLowerCase();
        console.log(cityAllLetters);
        let cityWordInCapitalize = cityFirstLetter + cityAllLetters;
        console.log(cityWordInCapitalize)
        let cityFound = false;
        for (let i = 0; i < cities.length; i++) {
            if (cities[i] === cityWordInCapitalize) {
                cityFound = true
                let html = '<span style="color: green; font-size: 20px;">"' + cityWordInCapitalize + '"</span> is aleready in list.';
                document.getElementById("output").innerHTML = html;
            }
        }
        if (cityFound === false) {
            cities.push(cityWordInCapitalize);
            let html = '<span style="color: green; font-size: 20px;">"' + cityWordInCapitalize + '"</span> has been successfully added into list.';
            document.getElementById("output").innerHTML = html;
        }
}

function checkCity() {
        let city = document.getElementById("inputText").value;        
        if (!city) {
        alert("Pleace type your city name")
    return;
    }
    cityFirstLetter = city.charAt(0).toUpperCase();
    cityAllLetters = city.slice(1).toLowerCase();

    cityWordInCapitalize = cityFirstLetter + cityAllLetters;

    let cityFound = false;

    for (let i = 0; i < cities.length; i++) {
        if (cities[i] === cityWordInCapitalize) {
            cityFound = true;
            let html = '<span style="color: green; font-size: 20px;">"' + cityWordInCapitalize + '"</span> found in list.';
            document.getElementById("output").innerHTML = html;
        }
    }

    if (cityFound === false) {
        let html = "We couldn't find your city <span style='color: red; font-size: 20px;'>" + '"' + cityWordInCapitalize + '"</span>';
        document.getElementById("output").innerHTML = html;
    }
}

function findWord() {
    let newOriginalText = originalText.toLowerCase();
    let word = document.getElementById("inputText").value;
    if (!word) {
        alert('Please enter a Word:');
        return;
    }
    word = word.toLowerCase();
    let findWord = newOriginalText.indexOf(word);
    console.log(findWord)
    if (findWord !== -1) {
        let html = 'Your word <span style="color: green; font-size: 18px;">"' + word + '" </span> found at index:  ' + findWord;
        document.getElementById("output").innerHTML = html;
    } else {
        let html = 'Your word <span style="color: green; font-size: 18px;">"' + word + '" </span> does not exist in the Original String';
        document.getElementById("output").innerHTML = html;
    }
}

function replaceWord() {
    let newOriginalText = originalText.toLocaleLowerCase();
    let word = document.getElementById("inputText").value;
    if (!word) {
        alert('Type the word that you want to be Replaced')
        return;
    }
    let replaceWith = prompt('Enter a word that you want to replace');
    if (!replaceWith) {
        alert('Please type a word to replace it with ' + word + ".");
        return;
    }
    word = word.toLowerCase();
    console.log("word before using reguler expression =>", word)
    word = new RegExp(word, 'g')
    console.log("word before using reguler expression =>", word)
    replaceWith = replaceWith.toLowerCase();
    let replaceWord = newOriginalText.replace(word, replaceWith);
    document.getElementById("output").innerHTML = replaceWord;
}
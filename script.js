let cities = ["MianWali", "Lahore", "Karachi", "Islamabad", "Quetta", "Faisalabad", "Kasoor"]

// clear output button 
function clearOutput (){
    document.getElementById("output").innerHTML = " "
}

// simple alert 
function simpleAlert(){
    alert("alert button is clicked")
    document.getElementById("output").innerHTML = "Alert button is clicked"
}

// print my name 
function printName (){
    let ABC = prompt("please enter your name")
    document.getElementById("output").innerHTML = ABC;
}

// print all cities 
function printAllCities(){
    document.getElementById("output").innerHTML = " "
    for (let i=0; i<cities.length; i++){
        document.getElementById("output").innerHTML += i+1 +") " + cities[i] + "<br />"
    }
}

// add city in list 
function addCity(){
    document.getElementById("output").innerHTML = " "
    let newCity = prompt("Enter the City Name you want to Add:")
    cities.push(newCity)
    for (let i=0; i<cities.length; i++){
        document.getElementById("output").innerHTML += i+1 +")" + cities[i] + "<br />"
    }
}

// generate table 
function generateTable(){
    tableNumber = +prompt("Enter the Number, the Mathematical table of it will be generated:")
    document.getElementById("output").innerHTML = `<h3>Table of ${tableNumber}<h3/> <hr />`
    for(let i=1; i<11; i++){
        let table = tableNumber + " * " + i + " = " + tableNumber*i + "<br />"
        document.getElementById("output").innerHTML += table ;
    }
}
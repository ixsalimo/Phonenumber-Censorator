"use strict";
function getCensoredPhonenumber(phonenumber = "09123456789" , start = 4 , end = 3) {
    return phonenumber.replace(phonenumber.substring(start , phonenumber.length - end) , ''.padStart(phonenumber.length - (start + end) , '*'))
};

function inputChanged () {
    const beginNumbers = Number(document.getElementById("begin").value) ,
        endNumbers = Number(document.getElementById("end").value) ,
        examplePhonenumber = document.getElementById("example").value;

    if (beginNumbers + endNumbers <= examplePhonenumber.length) {
        document.getElementById("phonenumber").textContent = getCensoredPhonenumber(examplePhonenumber , beginNumbers , endNumbers);
        document.getElementById("output").value = `"${examplePhonenumber}".replace("${examplePhonenumber}".substring(${beginNumbers} , "${examplePhonenumber}".length - ${endNumbers}) , ''.padStart("${examplePhonenumber}".length - (${beginNumbers} + ${endNumbers}) , '*'))`;
    }
};

document.querySelectorAll("input:not(:disabled)").forEach(input => input.addEventListener("input" , inputChanged));
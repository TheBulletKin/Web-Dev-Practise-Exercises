function replaceText() {
    //Get the element and set the object to be a variable
    var textToReplace = document.getElementById("textToReplace");
    //Change the HTML text of the element as well as the style
    textToReplace.innerHTML = "My new text!";
    textToReplace.style.fontSize = "50px";
}

function replaceLink() {
    //The anchor link has its own variable assigned
    var linkToChange = document.getElementById("linkToChange");
    //Use conditional to decide what to change it to
    if (linkToChange.href == "https://overwatch.blizzard.com/en-gb/") {
        linkToChange.href = "https://www.ea.com/en-gb/games/apex-legends"
        linkToChange.innerText = "Apex Legends";
    }
    else {
        linkToChange.href = "https://overwatch.blizzard.com/en-gb/";
        linkToChange.innerText = "Overwatch";
    }
    
    
    
}
function addNumbers(number1, number2) {
    var Result = number1 + number2;
    //This time just change the text without setting it to a variable
    document.getElementById("Result").innerHTML = "Result: " + Result;
    
    
}
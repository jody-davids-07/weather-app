// var temperature =  Number(prompt("Enter the current temperature:"));
//Create a function - this will help with the additional looping and decleration of executed info
function displayDressCode(){
     var temperature = document.getElementById("temp").value;

    var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");



//for every true declared inputted condition (as it gradually increases) execute a message to describe what the user should wear
    if(temperature <= 0 && temperature >= -20) {
        var x = document.createElement('img'); //creating an image
        x.src = "images/warmgirl.gif"; //calling relative pathway of image
        document.body.appendChild(x); //append the image to the body

    }else if (temperature >= 0 && temperature <= 10) {
        var x = document.createElement('img'); //creating an image
        x.src = "images/rain.gif"; //calling relative pathway of image
        document.body.appendChild(x); //append the image to the body

    }else if (temperature >= 11 && temperature <= 15 ) {
        var x = document.createElement('img'); //creating an image
        x.src = "images/winterboy.gif"; //calling relative pathway of image
        document.body.appendChild(x); //append the image to the body

    }else if (temperature >= 16 && temperature <= 20 ) {
        var x = document.createElement('img'); //creating an image
        x.src = "images/winterboy.gif"; //calling relative pathway of image
        document.body.appendChild(x); //append the image to the body

    }else if (temperature >= 21 && temperature <= 24 )  {
        var x = document.createElement('img'); //creating an image
        x.src = "images/winterboy.gif"; //calling relative pathway of image
        document.body.appendChild(x); //append the image to the body

    }else if (temperature >= 25 && temperature <=45) {
        var x = document.createElement('img'); //creating an image
        x.src = "images/winterboy.gif"; //calling relative pathway of image
        document.body.appendChild(x); //append the image to the body

    } else{
        var x = document.createElement('img'); //creating an image
        x.src = "images/winterboy.gif"; //calling relative pathway of image
        document.body.appendChild(x); //append the image to the body     
    }
}
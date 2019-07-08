// var temperature =  Number(prompt("Enter the current temperature:"));
//Create a function - this will help with the additional looping and decleration of executed info
function displayDressCode(){
     var temperature = document.getElementById("temp").value;

    var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");



//for every true declared inputted condition (as it gradually increases) execute a message to describe what the user should wear
    if(temperature <= 0 && temperature >= -20) {
        var x = document.createElement('img'); //creating an image
        x.src = "images/buttoned-up.gif"; //calling relative pathway of image
        document.body.appendChild(x); //append the image to the body

        
        id="myPopup">Due to the weather condition stated, it is suggested you wear something tightly buttoned such as a raincoat, wellingtons and don't forget your umbrella!<
        

    }else if (temperature >= 0 && temperature <= 10) {
        var x = document.createElement('img'); //creating an image
        x.src = "images/raining.gif"; //calling relative pathway of image
        document.body.appendChild(x); //append the image to the body

        <div class="popup" onclick="displayDressCode()">
         <span class="popuptext" id="myPopup">Due to the weather condition stated, it is suggested you wear something warm such as a coat, beenie, scarf and closed shoes.</span>
        </div>  

    }else if (temperature >= 11 && temperature <= 15 ) {
        var x = document.createElement('img'); //creating an image
        x.src = "images/winterboy.gif"; //calling relative pathway of image
        document.body.appendChild(x); //append the image to the body

        <div class="popup" onclick="displayDressCode()">
         <span class="popuptext" id="myPopup">Due to the weather condition stated, it is suggested you wear something warm such as a trackpants, sneakers, long-sleeve everthing.</span>
        </div>  

    }else if (temperature >= 16 && temperature <= 20 ) {
        var x = document.createElement('img'); //creating an image
        x.src = "images/winterboy.gif"; //calling relative pathway of image
        document.body.appendChild(x); //append the image to the body

        <div class="popup" onclick="displayDressCode()">
         <span class="popuptext" id="myPopup">Due to the weather condition stated, it is suggested you wear a windbreaker and a keep your ears and neck warm with a beenie and scarf.</span>
        </div>  

    }else if (temperature >= 21 && temperature <= 24 )  {
        var x = document.createElement('img'); //creating an image
        x.src = "images/winterboy.gif"; //calling relative pathway of image
        document.body.appendChild(x); //append the image to the body

        <div class="popup" onclick="displayDressCode()">
         <span class="popuptext" id="myPopup">Due to the weather condition stated, it is suggested you wear something to keep you warm, but not too humid so e.g a scarf or warm jacket.</span>
        </div>  

    }else if (temperature >= 25 && temperature <=45) {
        var x = document.createElement('img'); //creating an image
        x.src = "images/hot.gif"; //calling relative pathway of image
        document.body.appendChild(x); //append the image to the body

        <div class="popup" onclick="displayDressCode()">
         <span class="popuptext" id="myPopup">Due to the weather condition stated, it is suggested you wear something cool such as a hat, short and flip-flops also don't forget to wear sunscreen!.</span>
        </div>

    } else{
        var x = document.createElement('img'); //creating an image
        x.src = "images/winterboy.gif"; //calling relative pathway of image
        document.body.appendChild(x); //append the image to the body  
        
        <div class="popup" onclick="displayDressCode()">
         <span class="popuptext" id="myPopup">Sorry, invalid temperature. Try again.</span>
        </div>
    }
}
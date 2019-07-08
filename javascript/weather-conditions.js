// var temperature =  Number(prompt("Enter the current temperature:"));
//Create a function - this will help with the additional looping and decleration of executed info
function displayDressCode(){
     var temperature = document.getElementById("temp").value;


//for every true declared inputted condition (as it gradually increases) execute a message to describe what the user should wear
    if(temperature <= 0 && temperature >= -20) {
        var x = document.createElement('img'); //creating an image
        x.src = "images/buttoned-up.gif"; //calling relative pathway of image
        document.body.appendChild(x); //append the image to the body

        function alertpopup(){
         alertpopup("Due to the weather condition stated, it is suggested you wear something tightly buttoned such as a raincoat, wellingtons and don't forget your umbrella!"); 
        }

    }else if (temperature >= 0 && temperature <= 10) {
        var x = document.createElement('img'); //creating an image
        x.src = "images/raining.gif"; //calling relative pathway of image
        document.body.appendChild(x); //append the image to the body

        function alertpopup(){
            alertpopup("Due to the weather condition stated, it is suggested you wear something tightly buttoned such as a raincoat, wellingtons and don't forget your umbrella!"); 
           }
        
    }else if (temperature >= 11 && temperature <= 15 ) {
        var x = document.createElement('img'); //creating an image
        x.src = "images/windy.gif"; //calling relative pathway of image
        document.body.appendChild(x); //append the image to the body

        function alertpopup(){
            alertpopup("Due to the weather condition stated, it is suggested you wear a wind-breaker, sneakers and long pants"); 
           }

    }else if (temperature >= 16 && temperature <= 20 ) {
        var x = document.createElement('img'); //creating an image
        x.src = "images/.gif"; //calling relative pathway of image
        document.body.appendChild(x); //append the image to the body

        function alertpopup(){
            alertpopup("Due to the weather condition stated, it is suggested you wear something airy, but keep a jersey by your side just incase."); 
           } 

    }else if (temperature >= 21 && temperature <= 24 )  {
        var x = document.createElement('img'); //creating an image
        x.src = "images/cool.gif"; //calling relative pathway of image
        document.body.appendChild(x); //append the image to the body

        function alertpopup(){
            alertpopup("Due to the weather condition stated, it is suggested you wear something light, go out and enjoy the sunshine."); 
           } 

    }else if (temperature >= 25 && temperature <=45) {
        var x = document.createElement('img'); //creating an image
        x.src = "images/hot.gif"; //calling relative pathway of image
        document.body.appendChild(x); //append the image to the body

        function alertpopup(){
            alertpopup("Due to the weather condition stated, it is suggested you wear something beach-eeey, shorts and a vest, oh and don't forget the sunscreen!"); 
           }

    } else{
        var x = document.createElement('img'); //creating an image
        x.src = "images/oops.gif"; //calling relative pathway of image
        document.body.appendChild(x); //append the image to the body
        
        function alertpopup(){
            alertpopup("Sorry, invalid temperature. Try again."); 
           }
        
    }
   
}
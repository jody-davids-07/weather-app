// var temperature =  Number(prompt("Enter the current temperature:"));
function myFunction(){
var temperature=document.getElementById("temp").value;

    if(temperature<=0 ) {
        console.log("Due to the weather condition stated, it is suggested you wear extremely warm clothes such as track pants and winter boots");
        alert("Due to the weather condition stated, it is suggested you wear extremely warm clothes such as track pants and winter boots ")
    }else if (temperature>=0 && temperature<=10 ) {
        console.log("Due to the weather condition stated, it is suggested you wear something warm such as a coat, beenie, scarf and closed shoes.");
        alert("Due to the weather condition stated, it is suggested you wear something warm such as a coat, beenie, scarf and closed shoes.");
    }else if (temperature>=11 && temperature<=15 ) {
        console.log("Due to the weather condition stated, it is suggested you wear something tightly buttoned such as a raincoat, wellingtons and don't forget your umbrella!");
        alert("Due to the weather condition stated, it is suggested you wear something tightly buttoned such as a raincoat, wellingtons and don't forget your umbrella!") ;  
    }else if (temperature>=16 && temperature<=20 ) {
        console.log("Due to the weather condition stated, it is suggested you wear a windbreaker and a keep your ears and neck warm with a beenie and scarf");
        alert("Due to the weather condition stated, it is suggested you wear a windbreaker and a keep your ears and neck warm with a beenie and scarf");
    }else if (temperature >=21 && temperature<=24 )  {
            console.log("Due to the weather condition stated, it is suggested you wear something to keep you warm, but not too humid so e.g a scarf or warm jacket");
            alert("Due to the weather condition stated, it is suggested you wear something to keep you warm, but not too humid so e.g a scarf or warm jacket");
    }else if (temperature>=25) {
            console.log("Due to the weather condition stated, it is suggested you wear something cool such as a hat, short and flip-flops also don't forget to wear sunscreen!");
            alert("Due to the weather condition stated, it is suggested you wear something cool such as a hat, short and flip-flops also don't forget to wear sunscreen!");
    } else{
            console.log("sorry invalid");
            alert("sorry, that is an invalid temperature"); 
    }
}
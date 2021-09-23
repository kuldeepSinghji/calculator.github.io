let display = document.getElementById("display");
    let buttons = document.querySelectorAll("button");
    let answere = document.getElementById("answere");

    let displayValue = "";
    for(let items of buttons){
        console.log("items")
        items.addEventListener("click",function(e){
            buttonText = e.target.innerText;
            console.log(buttonText);
            if(buttonText === "X"){
                buttonText = "*";
                displayValue = displayValue + buttonText;
                display.value = displayValue; 
                
            }
            else if(buttonText === "C"){
                displayValue = "";
                display.value = displayValue;
                answere.value = displayValue;
            }
            else if(buttonText === "="){
                display.value = eval(displayValue);
                answere.value =  eval(displayValue);
            }
            else if(buttonText === "Delete"){
                displayValue = displayValue.substring(0,displayValue.length-1);
                console.log(displayValue)
                display.value = displayValue;
            }
            else{
                displayValue += buttonText;
                display.value = displayValue;
            }
            // console.log(typeof displayValue)
        })
    }

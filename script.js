  const display = document.getElementById("display"); 

  function inputToDisplay(input){                //for display the inputs
    display.value = display.value + input;
  }

  function clearDisplay(){                       //to clear the input screen
    display.value = "";
  }

  function calculate(){                          //for calculations
    try{
        display.value = eval(display.value);
    } catch (error){
        display.value = "Input Error";
    }
  }




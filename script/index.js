const display=document.querySelector("#display");


function appendToDisplay(input){

    display.value+=input;
}

function clr(){

    display.value=null;
}

function calc(){


    try{
        display.value=eval(display.value);
    }catch(error){

        display.value="error"
    }

}



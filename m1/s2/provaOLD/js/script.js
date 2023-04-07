let display = document.getElementById('display');

function addNumber(n){


    display.value += n;
}


function equal (){
    let resultstring = display.value.replaceAll('x','*')
    resultstring = display.value.replaceAll('÷','/')
    resultstring = display.value.replaceAll('%','/100')
    resultstring = display.value.replaceAll('^','**')
    display.value = eval(resultstring);
    

}

function sin (){
    if (display.value == '' ) {
        display.value = 'Math.sin()'
    }
    else display.value = eval(display.value.replaceAll(display.value,'Math.sin('+display.value+')'))
}

function cos (){
    if (display.value == '' ) {
        display.value = 'Math.cos()'
    }
    else display.value = eval(display.value.replaceAll(display.value,'Math.cos('+display.value+')'))
}

function tan (){
    if (display.value == '' ) {
        display.value = 'Math.tan()'
    }
    else display.value = eval(display.value.replaceAll(display.value,'Math.tan('+display.value+')'))
}

function radq (){
    if (display.value == '' ) {
        display.value = 'Math.sqrt(()'
    }
    else display.value = eval(display.value.replaceAll(display.value,'Math.sqrt('+display.value+')'))
}

function random (){
    if (display.value == '' ) {
        display.value = 'Math.random(()'
    }
    else display.value = eval(display.value.replaceAll(display.value,'Math.random('+display.value+')'))
}
    

function canc (){
    display.value = display.value.replace(/\d*$/,"") /*dalla fine della parola (/d) da 0 o piu' (*)  fine della parola ($) (regex)*/
}

function reset (){
    display.value = ""
}


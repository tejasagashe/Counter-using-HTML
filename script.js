let count = document.getElementById('counter');
let clr_btn = document.getElementById('clear_btn');
var error = document.getElementById('error');
var decrement_btn = document.getElementById('decrement_btn');
var increment_btn = document.getElementById('decrement_btn');

let counter = count.innerText;

function increment(){
    if(counter >= 0){
        counter++;
        count.innerText = counter;
        error.textContent = "";
    }
    if(counter >=1){
        clr_btn.style.display = "flex";
    }
    count.style.color ='white';
}



function decrement(){
    if(counter >=1){
        counter--;
    }
    else{
        error.textContent = "Error : Cannot go below 0";
        error.style.color = 'red';
        decrement_btn.style.display = none ;
    }
    count.innerText = counter;
    count.style.color ='white';
}

function clear(){
    counter = 0 ;
    console.log(counter)
    count.innerText = counter;
    if(counter === 0){
        clr_btn.style.display = "none";
    }

}

clr_btn.onclick = clear;



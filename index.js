// Code your solutions in this file
function writeCards(arr, evt){
    let newArray = [];
    for(let i=0; i<arr.length; i++){
        newArray.push(`Thank you, ${arr[i]}, for the wonderful ${evt} gift!`);
    }
    return newArray;
}

function countDown(integer){
    while(integer >= 0){
        console.log(integer--);
    }
}
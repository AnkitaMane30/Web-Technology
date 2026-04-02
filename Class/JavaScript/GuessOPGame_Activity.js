let y = Math.floor(Math.random() * 20+1);
let countGuess = 1;

function guess(){
    let x = document.getElementById("number").value;
    if(x == y){
        alert(`Congratulations!!! you guess it right in ${countGuess} guess`);
    }
    else if(x > y){
        countGuess++;
        alert(`OOPS Sorry! try smaller Number`);
    }
    else{
        countGuess++;
        alert(`OOPS sorry !! try greater Number`);
    }
}
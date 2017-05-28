document.getElementById("menu").addEventListener("click",open);

var hamburger_state = 0;

function open(){

    
    if(hamburger_state % 2 <1){
        document.querySelector("#hamburgerIcon").setAttribute("src", "img/hamburger/kruis.png");
        document.querySelector(".grid_row").style.display = "block";
        /*document.getElementById("menu").style.display = "none";*/
        hamburger_state++;
    }
    
    else{
        document.querySelector("#hamburgerIcon").setAttribute("src", "img/hamburger/hamburger.png");
        document.querySelector(".grid_row").style.display = "none";
        document.getElementById("menu").style.display = "block";
        hamburger_state++;
    }
}
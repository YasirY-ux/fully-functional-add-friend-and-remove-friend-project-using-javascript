var nam = document.getElementById("h5")
var btn1 = document.getElementById("addfriend")
var a=0

btn1.addEventListener("click", function() {
    if(a===0){
        nam.innerHTML = "Friends"
        nam.style.color ="green"
        btn1.textContent ="Remove"
        btn1.style.backgroundColor="rgba(99, 98, 95, 0.628)"
        btn1.style.color="black"
        // alert("You are now friends!");
        a=1;
    }
    else{
        nam.innerHTML = "Stranger"
        nam.style.color ="red"
        btn1.textContent ="Add Friend"
        btn1.style.backgroundColor="rgb(10, 135, 252)"
        btn1.style.color="white"
        // alert("You are now friends!");
        a=0;
    }
   
});


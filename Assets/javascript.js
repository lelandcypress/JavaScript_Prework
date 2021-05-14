//Grow
document.getElementById("button1").addEventListener("click", function(){
document.getElementById("box").style.height = "300px";
document.getElementById("box").style.width = "300px";

});

//Blue
document.getElementById("button2").addEventListener("click",function(){
document.getElementById("box").style.backgroundColor="blue"
});
//Fade
document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box").style.opacity = "0.25";

});
//Reset
document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor="orange"
    document.getElementById("box").style.opacity="1.0"
    document.getElementById("WOW").style.display= "none"
});
    
//messing around
document.getElementById("button5").onclick= Invasion
function Invasion (){window.alert ("Earth Invasion Commencing! Have a nice day :)"
)};
document.getElementById("WOW").addEventListener("click",function(){
    document.getElementById("WOW").style.backgroundImage = URL("Assets\WOW.PNG");
});


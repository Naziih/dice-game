function refreshPage(){
    window.location.reload();
} 
var randomNumber1 = (Math.floor(Math.random()*6)+1);
var randomNumber2 = (Math.floor(Math.random()*6)+1);
var randomImage = "dice"+ randomNumber1+".png"; // dice + numero aléatoire + typpe png pouyr afficher une image aléatoire
var randomImage2 = "dice"+ randomNumber2+".png"; // dice + numero aléatoire + typpe png pouyr afficher une image aléatoire
var randomImageSrc = "images/"+randomImage;
var randomImageSrc2 = "images/"+randomImage2;
document.querySelector(".img1").setAttribute("src",randomImageSrc);
document.querySelector(".img2").setAttribute("src",randomImageSrc2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🏆 Player 1 Wins! "
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 is better! 🏆 "
}
else{
    document.querySelector("h1").textContent = "Equality !! Incredible!! "
}
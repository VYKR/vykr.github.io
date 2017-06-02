// JavaScript Document
var slideIndex=0;
window.onload=carousel;

function carousel(){
	var i;
	var x = document.getElementsByClassName("mySlides");
	for(i=0;i<x.length;i++){
		x[i].style.display="none";
	}
	slideIndex++;
	if(slideIndex>x.length){slideIndex = 1}
	x[slideIndex-1].style.display = "block";
	setTimeout(carousel,2000);
}
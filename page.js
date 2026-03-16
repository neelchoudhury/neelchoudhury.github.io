$(document).ready(function(){

   	$(window).scroll(function(){
   		var scroll = $(window).scrollTop();

   		if(scroll >= 570)
   		{
   			$(".section1").addClass("fixed");
   		}
   		if(scroll < 570)
   		{
   			$(".section1").removeClass("fixed");
   		}

   		if(scroll >= 450)
   		{
   			$(".inf").removeClass("hide");
	   		$(".inf").addClass("fadeInUp");
   		}

	   	if(scroll >= 1000)
	   	{
	   		$(".edu").removeClass("hide");
	   		$(".edu").addClass("fadeInLeft");
	   	}

	   	if(scroll >= 2200)
	   	{
	   		$(".resume").removeClass("hide");
	   		$(".resume").addClass("fadeInUp");
	   	}

	   	if(scroll >= 2800)
	   	{
	   		$(".cont").removeClass("hide");
	   		$(".cont").addClass("bounceInDown");
	   	}

   });

});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var items = document.querySelectorAll(".timeline li");

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

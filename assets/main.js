//skills
$(document).scroll(function(){
	if($(document).scrollTop()>=585){
		$(".skillrow").addClass("fadeIn");
	} 
});

$(document).scroll(function(){
	if($(document).scrollTop()>=630){
		$(".c").addClass("skill1");
		$(".html").addClass("skill2");
		$(".css").addClass("skill3");
		$(".Java").addClass("skill4");
		$(".javascript").addClass("skill5");
		$(".php").addClass("skill6");
	} 
});

//aboutme
$(document).scroll(function(){
	if($(document).scrollTop()>=100){
		$(".carousel").addClass("fadeIn");
		$(".photo").addClass("fadeIn");
		$(".photo").removeClass("vis");
	} 
});

//photo
$(document).scroll(function(){
	if($(document).scrollTop()>=100){
		$(".photo").addClass("fadeIn");
		$(".photo").removeClass("vis");
	} 
	else{
		$(".photo").addClass("vis");
	}
});


//quickid && contactme
$(document).scroll(function(){
	if($(document).scrollTop()>=1290){
		$(".info ").addClass("fadeIn");
	} 
});

//footer
$(document).scroll(function(){
	if($(document).scrollTop()>=1600){
		$(".space ").addClass("slideInLeft");
		$(".footer ").addClass("slideInRight");
	} 
});

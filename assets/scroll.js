$(document).ready(function(){
	$(".navbar-nav li a").on("click",function(e){
		e.preventDefault();
		console.log(this.hash);
		var target= this.hash;

		$("html,body").animate({
			scrollTop: $(target).offset().top
		},1000,"swing" , function(){
			window.location.hash=target;
		});
	});
});

 
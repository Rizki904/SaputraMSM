var sideNav = document.querySelectorAll(".sidenav");
      	M.Sidenav.init(sideNav);
      	
      	var slider = document.querySelectorAll(".slider");
      	M.Slider.init(slider,{
      		indicators: false,
      		height: 520,
      		duration: 800,
      		interval: 4000
      	});
      	
      	var parallax = document.querySelectorAll(".parallax");
      	M.Parallax.init(parallax);
      	
      	var carousel = document.querySelectorAll(".carousel");
      	M.Carousel.init(carousel);

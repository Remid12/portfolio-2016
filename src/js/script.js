$('document').ready(function(){
	var sectionIntro = $('.introduction');
	var sectionWorks = $('.works');
	var sectionAbout = $('.about');
	var currentSection = 'intro';

	var canScroll = false;
	var slideDelay = 1000;
	var sectionWork = 1;
	var canSwitchWork = true;
	var currentColorWork = '#3A93C4';
	var canAnim = true;


	// ANIMATION INTRODUCTION AFTER PAGE LOAD

	$('.introduction--title > span').css('opacity',0);
	$('.introduction--initiale').css({
		'opacity': 0,
		'color': '#4A4A4A'
	});

	$('.works--element > span').css('transform','translate(0, 50px)');
	$('.works--right > img').css('opacity',0);
	
	animIntro = new TimelineMax ()
        .add([
        	// ANIM INITIALES
            TweenMax.fromTo('.introduction--initiale-r', 0.5,
            	{transform: 'translate(0)', opacity: 0},
            	{transform: 'translate(-300px, 0)', opacity: 1, ease : Back.easeOut.config(2),delay:1.4}
            ),
            TweenMax.to('.introduction--initiale-d', 0.5,
            	{transform: 'translate(220px, 0)', opacity: 1, ease : Back.easeOut.config(2),delay:1.4}
            ),
            TweenMax.to('.introduction--initiale-r', 0.6,
            	{transform: 'translate(-300px, -140px)', opacity: 0.1, ease: Circ.easeOut,delay:1.9}
            ),
            TweenMax.to('.introduction--initiale-d', 0.6,
            	{transform: 'translate(220px, 80px)', opacity: 0.1, ease: Circ.easeOut,delay:1.9}
            ),
            TweenMax.to('.introduction--initiale', 0.6,
            	{opacity: 0.04, ease: Ease.easeOut,delay:2.2}
            ),
            TweenMax.staggerFromTo('.introduction--title > span', 0.8, 
            	{opacity:0, transform: 'translate(0, 40px)'},
            	{opacity:1, transform: 'translate(0, 0)', ease: Circ.easeOut, delay: 2.6}, 0.4
            )
    	]
    );









	// _________________ PLUGIN FULLPAGE JS _________________

	function sectionWorkAnimation(number){
		$.getJSON("js/projects.json", function(project) {
			$('.works--right').css({'background':project[number].color});
			$('.works--see-more').css({'color':project[number].color});

			animSectionWork = new TimelineMax ()
		        .add([
		        	TweenMax.staggerTo('.works--right > img', 0.6, 
	            		{opacity: 0, transform: 'translate(50px, 50px)', ease: Power4.easeIn}, 0.15
	            	),
	            	TweenMax.staggerFromTo('.works--right > img', 0.6,
	            		{opacity: 0, transform: 'translate(50px, 0)'}, 
	            		{opacity: 1, transform: 'translate(0)', ease: Power4.easeOut,delay: 1.8}, 0.15
	            	),
		        	TweenMax.fromTo('.work--right-cache', 0.6,
		        		{'height': '0%'},
		        		{'height': '100%', ease: Circ.easeIn}
		        	),
		        	TweenMax.to('.work--right-cache', 0.8,
		        		{'height': '0%', ease: Circ.easeIn, delay: 1}
		        	),
		            TweenMax.staggerTo('.works--element > span', 0.3, 
		            	{transform: 'translateY(50px)', ease: Circ.easeIn}, 0.15, function(){
		            		$('.work--project-title > span').text(project[number].title);
							$('.work--project-subjects > span').text(project[number].hashtag);
							$('.work--project-description > span').text(project[number].description);
							$('.work--project-role > span').text(project[number].role);
		            	}
		            ),
	            	TweenMax.staggerTo('.works--element > span', 0.3, 
	            		{transform: 'translateY(0px)', ease: Circ.easeOut, delay: 1.2}, 0.15
	            	)
		    	]
		    );
		});
	}

	function switchWork(direction) {
		if(canSwitchWork) {
			if(direction == 'down') {
				sectionWork++;
			}
			if(direction == 'up') {
				sectionWork--;
			}
			canSwitchWork = false;

			if(sectionWork == 1) {
				sectionWorkAnimation(0);
			}

			if(sectionWork == 2) {
				sectionWorkAnimation(1);
			}
			if(sectionWork == 3) {
				sectionWorkAnimation(2);
			}

			 

			setTimeout(function(){
				canSwitchWork = true;
			},800);
		}
	}


	$('.container').fullpage({
		//anchors:['introduction', 'works', 'about'],
		scrollOverflow: true,
		keyboardScrolling: true,
		scrollbars: true,
		easing: 'easeOutCubic',
		fitToSection: true,
		scrollOverflowOptions: {
			scrollbars: false,
	        mouseWheel: true,
	        hideScrollbars: false,
	        fadeScrollbars: false,
	        disableMouse: false,
		},
		onLeave: function(index, nextIndex, direction){
			console.log(sectionWork);

			// SECTION INTRO DIRECTION DOWN
	        if(index == 1 && direction == 'down'){
	        	slideDelay = 600;
	        	sectionWork = 1;

	        	// ANIM OUT INTRO
	        	animIntroOut = new TimelineMax ()
			        .add([
			            TweenMax.staggerTo('.introduction--title > span', 0.5, 
			            	{opacity:0, transform: 'translateY(-20px)', ease: Circ.easeOut}, 0.15
			            ),
			            TweenMax.to('.introduction--initiale-r', 0.8, 
			            	{opacity:0, transform: 'translate(-340px, -140px)', ease: Power1.easeOut,delay: 0.4}
			            ),
			            TweenMax.to('.introduction--initiale-d', 0.8, 
			            	{opacity:0, transform: 'translate(260px, 80px)', ease: Power1.easeOut,delay: 0.4}
			            ),
			    	]
			    );


			    // ANIM IN WORKS
			    if(canAnim) {
			    	canAnim = false;
			    	$('.works--element > span').css('transform', 'translateY(50px)');
			    	$('.works--right > img').css('opacity', 0);

				    setTimeout(function(){
				    	animWorksIn = new TimelineMax ()
					        .add([
					            TweenMax.staggerFromTo('.works--element > span', 0.6, 
					            	{transform: 'translate(0, 50px)'},
					            	{transform: 'translate(0)', ease: Circ.easeOut, onComplete: function(){
					            		canAnim = true;
					            	}},0.3
					            ),
					            TweenMax.staggerFromTo('.works--right > img', 1.6, 
					            	{opacity: 0, transform: 'translate(0, -50px)'},
					            	{opacity: 1, transform: 'translate(0)', ease: Power4.easeOut,delay: 0.4, onComplete: function(){
					            		canAnim = true;
					            	}},0.4
					            ),
					    	]
					    );
			    	},2000);
	        	}
			}
			
			// SECTION WORK DIRECTION DOWN
	        if(index == 2 && direction == 'down') {
	        	slideDelay = 800;

	        	if(sectionWork == 1) {
	        		switchWork('down');
	        		return false;
	        	}
	        	if(sectionWork == 2) {
	        		switchWork('down');
	        		return false;
	        	}

	        	if(sectionWork == 3) {
	        		switchWork('down');
	        		return false;
	        	}
        		
	        }

	        // SECTION WORK DIRECTION UP
	        if(index == 2 && direction == 'up') {
	        	slideDelay = 900;

	        	if(sectionWork == 0) {
		        	if(canAnim) {
		      			canAnim = false;

		      			// ANIM OUT WORKS
		      			animOutWorks = new TimelineMax ()
					        .add([
					            TweenMax.staggerTo('.works--element > span', 0.3, 
					            	{transform: 'translateY(50px)', ease: Circ.easeOut},0.15
					            ),
					            TweenMax.staggerTo('.works--right > img', 0.8, 
					            	{opacity: 0, transform: 'translateY(-50px)', ease: Power4.easeOut,delay: 0.2, onComplete: function(){
					            		canAnim = true;
					            	}},0.2
					            ),
					    	]
					    );

		      			// ANIM IN INTRO
		      			$('.introduction--title > span').css({'opacity':0, transform: 'translate(0, 40px)'});
			        	animIntroScrollDown = new TimelineMax ()
					        .add([
					            TweenMax.staggerTo('.introduction--title > span', 1, 
					            	{opacity:1, transform: 'translate(0, 0)', ease: Circ.easeOut, delay: 1.8}, 0.25
					            ),
					            TweenMax.to('.introduction--initiale-r', 0.8, 
					            	{opacity:0.04, transform: 'translate(-300px, -140px)', ease: Power1.easeOut,delay: 2.2}
					            ),
					            TweenMax.to('.introduction--initiale-d', 0.8, 
					            	{opacity:0.04, transform: 'translate(220px, 80px)', ease: Power1.easeOut,delay: 2.4}
					            )
					    	]
					    );
		        	}
				}
				else {					
					switchWork('up');
					return false;
				}
	        }

	        // SECTION ABOUT DIRECTION UP
	        if(index == 3 && direction == 'up') {
	        	sectionWork = 3;
	        } 

	        // Scroll AFTER animation of each section
	        setTimeout(function(){
	            canScroll = true;
	            $.fn.fullpage.moveTo(nextIndex);
	            setTimeout(function(){
	            	canScroll = false;
	            },1);
	            
	        }, slideDelay);
	        return canScroll;
	    }
	});

}); 

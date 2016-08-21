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
	var windowWidth = $('body').width();


	// ANIMATION INTRODUCTION AFTER PAGE LOAD

	$('.introduction--title > span').css('opacity',0);
	$('.introduction--initiale').css({
		'opacity': 0,
		'color': '#4A4A4A'
	});

	$('.works--element > span').css('transform','translate(0, 56px)');
	$('.works--right-img').css('opacity',0);
	
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
            	{opacity: 0.04, ease: Ease.easeOut,delay:2}
            ),
            TweenMax.staggerFromTo('.introduction--title > span', 0.5, 
            	{opacity:0, transform: 'translate(0, 40px)'},
            	{opacity:1, transform: 'translate(0, 0)', ease: Circ.easeOut, delay: 2.6}, 0.25
            )
    	]
    );









	// _________________ PLUGIN FULLPAGE JS _________________

	function sectionWorkAnimation(number){
		$.getJSON("js/projects.json", function(project) {
			console.log(number);

			animSectionWork = new TimelineMax ()
		        .add([
		        	TweenMax.staggerTo('.works--right-img', 0.6, 
	            		{opacity: 0, transform: 'translate(0 50px)', ease: Power4.easeIn}, 0.15
	            	),
	            	
		        	TweenMax.fromTo('.work--right-cache-content', 0.6,
		        		{transform: 'scale(0)'},
		        		{transform: 'scale(1)', ease: Power4.easeIn, onComplete: function(){
		        			//Remove images and replaces them by the new ones
		        			$('.works--right-img').remove();
		        			for(i=0;i<project[number].images.length;i++){
								$('.works--right').append(project[number].images[i].image);
							}
							$('.works--right-img').css({
								'opacity':0,
								'transform': 'translate(0, 50px)'
							});

							animSectionWorkImg = new TimelineMax ()
		        				.add([
									TweenMax.staggerTo('.works--right-img', 0.6,
					            		{opacity: 1, transform: 'translate(0)', ease: Power4.easeOut,delay:0.6}, 0.15
					            	),
					            ]
					        );

		        			$('.works--right').css({'background':project[number].color});

							document.styleSheets[0].addRule('section.works a.works--see-more:after','background:' + project[number].color);
							if(number == 2) {
								document.styleSheets[0].addRule('section.works a.works--see-more:after','background:#F3DD29');
							} 

							$('.work--right-cache-content').css({
							    'transform-origin':         'bottom right',
							    '-webkit-transform-origin': 'bottom right'
							});

							setTimeout(function(){
								$('.work--right-cache-content').css({
								    'transform-origin':         'top left',
								    '-webkit-transform-origin': 'top left'
								});
							},700);
		        		}}
		        	),
		        	TweenMax.to('.work--right-cache-content', 1,
		        		{transform: 'scale(0)', ease: Power4.easeOut, delay: 1}
		        	),
		            TweenMax.staggerTo('.works--element > span', 0.3, 
		            	{transform: 'translateY(56px)', ease: Circ.easeIn}, 0.15, function(){
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

	function AnimInIntro() {
		$('.introduction--title > span').css({'opacity':0, transform: 'translate(0, 120px)'});
    	animIntroScrollDown = new TimelineMax ()
	        .add([
	            TweenMax.staggerTo('.introduction--title > span', 2.6, 
	            	{opacity:1, transform: 'translate(0, 0)', ease: Power2.easeOut, delay: 2.2}, 0.15
	            ),
	            TweenMax.to('.introduction--initiale-r', 0.8, 
	            	{opacity:0.04, transform: 'translate(-300px, -140px)', ease: Power1.easeOut,delay: 2.6}
	            ),
	            TweenMax.to('.introduction--initiale-d', 0.8, 
	            	{opacity:0.04, transform: 'translate(220px, 80px)', ease: Power1.easeOut,delay: 2.8}
	            )
	    	]
	    );
	}

	$('.works--left').css('transform','translateX(' + -windowWidth/2 + 'px)');
	$('.works--right').css('transform','translateX(' + windowWidth/2 + 'px)');
	function AnimInWorks(){
		if(canAnim) {
			canAnim = false;
	    	$('.works--element > span').css('transform', 'translateY(56px)');
	    	$('.works--right-img').css('opacity', 0);
	    	$('.works--right-cache-content').css('transform', 'scale(1)');
	    	

		    setTimeout(function(){
				animWorksIn = new TimelineMax ()
			        .add([
			        	TweenMax.to('.works--half', 0.6,
			        		{transform: 'translateX(0)', ease: Power4.easeIn}
			        	),
			        	TweenMax.to('.works--right', 0.6,
			        		{transform: 'translateX(0)', ease: Power4.easeIn,delay: 0.1}
			        	),
			            TweenMax.staggerFromTo('.works--element > span', 0.6, 
			            	{transform: 'translate(0, 56px)'},
			            	{transform: 'translate(0)', ease: Circ.easeOut, delay: 1},0.3
			            ),
			            TweenMax.to('.works--right-cache-content', 1,
			        		{transform: 'scale(1)', ease: Power4.easeIn,delay: 0.4}
			        	),
			            TweenMax.staggerFromTo('.works--right-img', 1.2, 
			            	{opacity: 0, transform: 'translate(0, 50px)'},
			            	{opacity: 1, transform: 'translate(0)', ease: Power4.easeOut,delay: 1.4},0.2
			            ),
			    	]
			    );

			    setTimeout(function(){
			    	canAnim = true;
			    },800);

	    	},1000);
		}
	}

	function AnimOutWorks(){
		slideDelay = 1700;
		if(canAnim) {
			canAnim = false;
			windowWidth = $('body').width();

			animOutWorks = new TimelineMax ()
		        .add([
		            TweenMax.staggerTo('.works--element > span', 0.3, 
		            	{transform: 'translateY(56px)', ease: Circ.easeIn},0.15
		            ),
		            TweenMax.staggerTo('.works--right-img', 0.8, 
		            	{opacity: 0, transform: 'translateY(-50px)', ease: Power4.easeOut,delay: 0.2},0.2
		            ),
		            TweenMax.to('.works--left', 0.6,
		        		{transform: 'translateX(' + -windowWidth/2 + 'px)', ease: Power4.easeOut,delay: 1.1}
		        	),
		            TweenMax.to('.works--right', 0.6,
		        		{transform: 'translateX(' + windowWidth/2 + 'px)', ease: Power4.easeOut,delay: 1}
		        	),
		    	]
		    );

	        setTimeout(function(){
		    	canAnim = true;
		    },800);
		}
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
		fitToSection: false,
		scrollOverflowOptions: {
			scrollbars: false,
	        hideScrollbars: false,
	        fadeScrollbars: false,
	        mouseWheel: true,
			disableMouse: true
		},
		onLeave: function(index, nextIndex, direction){

			// SECTION INTRO DIRECTION DOWN
	        if(index == 1 && direction == 'down'){
	        	slideDelay = 500;
	        	sectionWork = 1;

	        	// ANIM OUT INTRO
	        	animIntroOut = new TimelineMax ()
			        .add([
			            TweenMax.staggerTo('.introduction--title > span', 0.6, 
			            	{opacity:0, transform: 'translateY(-20px)', ease: Circ.easeOut}, 0.15
			            ),
			            TweenMax.to('.introduction--initiale-r', 0.4, 
			            	{opacity:0, transform: 'translate(-340px, -140px)', ease: Power1.easeOut}
			            ),
			            TweenMax.to('.introduction--initiale-d', 0.4, 
			            	{opacity:0, transform: 'translate(260px, 80px)', ease: Power1.easeOut}
			            ),
			    	]
			    );

			    // ANIM IN WORKS
		    	AnimInWorks();
			    
			    	
			}

	        // SECTION WORK DIRECTION UP
	        if(index == 2 && direction == 'up') {
	        	if(sectionWork == 0) {
	      			// ANIM OUT WORKS
	      			AnimOutWorks();

	      			// ANIM IN INTRO
	      			AnimInIntro();
				}
				else {					
					switchWork('up');
					return false;
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
	        	else {
	        		// ANIM OUT WORKS
	        		AnimOutWorks();
	        		
	        		$('.about--content-about > h2').css({'opacity':'0', 'transform':'translate(0, 80px)'});
	        		$('.about--half').css({'opacity':'0', 'transform':'translate(0, 120px)'});

	        		animAboutIn = new TimelineMax ()
				        .add([
				            TweenMax.to('.about--content-about > h2', 0.8, 
				            	{opacity:1, transform: 'translate(0, 0)', ease: Power1.easeOut, delay: 1.4}
				            ),
				            TweenMax.staggerTo('.about--half', 0.8, 
				            	{opacity:1, transform: 'translate(0, 0)', ease: Power1.easeOut,delay: 2.2}, 0.2
				            )
				    	]
				    );
	        	}
        		
	        }

	        // SECTION ABOUT DIRECTION UP
	        if(index == 3 && direction == 'up') {

	        	slideDelay = 720;
	        	sectionWork = 3;

	        	animAboutIn = new TimelineMax ()
			        .add([
			            TweenMax.to('.about--content-about > h2', 0.8, 
			            	{opacity:0, transform: 'translate(0, 80px)', ease: Power1.easeOut}
			            ),
			            TweenMax.staggerTo('.about--half', 0.8, 
			            	{opacity:0, transform: 'translate(0, 120px)', ease: Power1.easeOut}, 0.2
			            )
			    	]
			    );

	        	AnimInWorks();
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

	$('.header--menu-intro').on('click', function(e){
		e.preventDefault();
		AnimInIntro();
		$.fn.fullpage.moveTo(1);
	});
	$('.header--menu-works').on('click', function(e){
		e.preventDefault();
		$.fn.fullpage.moveTo(2);
	});
	$('.header--menu-about, .header--menu-content').on('click', function(e){
		e.preventDefault();
		$.fn.fullpage.moveTo(3);
	});

}); 

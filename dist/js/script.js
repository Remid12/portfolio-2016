$("document").ready(function(){function e(e){$.getJSON("js/projects.json",function(t){animSectionWork=(new TimelineMax).add([TweenMax.staggerTo(".works--right-img",.6,{opacity:0,transform:"translate(0 50px)",ease:Power4.easeIn},.15),TweenMax.fromTo(".work--right-cache-content",.6,{transform:"scale(0)"},{transform:"scale(1)",ease:Power4.easeIn,onComplete:function(){for($(".works--right-img").remove(),i=0;i<t[e].images.length;i++)$(".works--right").append(t[e].images[i].image);$(".works--right-img").css({opacity:0,transform:"translate(0, 50px)"}),animSectionWorkImg=(new TimelineMax).add([TweenMax.staggerTo(".works--right-img",.6,{opacity:1,transform:"translate(0)",ease:Power4.easeOut,delay:.6},.15)]),$(".works--right").css({background:t[e].color}),$(".works--see-more").css({"border-bottom":"2px solid "+t[e].color}),$(".work--right-cache-content").css({"transform-origin":"bottom right","-webkit-transform-origin":"bottom right"}),setTimeout(function(){$(".work--right-cache-content").css({"transform-origin":"top left","-webkit-transform-origin":"top left"})},700)}}),TweenMax.to(".work--right-cache-content",1,{transform:"scale(0)",ease:Power4.easeOut,delay:1}),TweenMax.staggerTo(".works--element > span",.3,{transform:"translateY(56px)",ease:Circ.easeIn},.15,function(){$(".work--project-title > span").text(t[e].title),$(".work--project-subjects > span").text(t[e].hashtag),$(".work--project-description > span").text(t[e].description),$(".work--project-role > span").text(t[e].role)}),TweenMax.staggerTo(".works--element > span",.3,{transform:"translateY(0px)",ease:Circ.easeOut,delay:1.2},.15)])})}function t(){l&&(l=!1,$(".works--element > span").css("transform","translateY(56px)"),$(".works--right-img").css("opacity",0),$(".works--right-cache-content").css("transform","scale(1)"),setTimeout(function(){animWorksIn=(new TimelineMax).add([TweenMax.to(".works--half",.6,{transform:"translateX(0)",ease:Power4.easeIn}),TweenMax.to(".works--right",.6,{transform:"translateX(0)",ease:Power4.easeIn,delay:.1}),TweenMax.staggerFromTo(".works--element > span",.6,{transform:"translate(0, 56px)"},{transform:"translate(0)",ease:Circ.easeOut,delay:1},.3),TweenMax.to(".works--right-cache-content",1,{transform:"scale(1)",ease:Power4.easeIn,delay:.4}),TweenMax.staggerFromTo(".works--right-img",1.6,{opacity:0,transform:"translate(0, -50px)"},{opacity:1,transform:"translate(0)",ease:Power4.easeOut,delay:1.4},.4)]),setTimeout(function(){l=!0},800)},1e3))}function a(){r=1700,l&&(l=!1,m=$("body").width(),animOutWorks=(new TimelineMax).add([TweenMax.staggerTo(".works--element > span",.3,{transform:"translateY(56px)",ease:Circ.easeIn},.15),TweenMax.staggerTo(".works--right-img",.8,{opacity:0,transform:"translateY(-50px)",ease:Power4.easeOut,delay:.2},.2),TweenMax.to(".works--left",.6,{transform:"translateX("+-m/2+"px)",ease:Power4.easeOut,delay:1.1}),TweenMax.to(".works--right",.6,{transform:"translateX("+m/2+"px)",ease:Power4.easeOut,delay:1})]),setTimeout(function(){l=!0},800))}function o(t){c&&("down"==t&&s++,"up"==t&&s--,c=!1,1==s&&e(0),2==s&&e(1),3==s&&e(2),setTimeout(function(){c=!0},800))}var n=($(".introduction"),$(".works"),$(".about"),!1),r=1e3,s=1,c=!0,l=!0,m=$("body").width();$(".introduction--title > span").css("opacity",0),$(".introduction--initiale").css({opacity:0,color:"#4A4A4A"}),$(".works--element > span").css("transform","translate(0, 56px)"),$(".works--right-img").css("opacity",0),animIntro=(new TimelineMax).add([TweenMax.fromTo(".introduction--initiale-r",.5,{transform:"translate(0)",opacity:0},{transform:"translate(-300px, 0)",opacity:1,ease:Back.easeOut.config(2),delay:1.4}),TweenMax.to(".introduction--initiale-d",.5,{transform:"translate(220px, 0)",opacity:1,ease:Back.easeOut.config(2),delay:1.4}),TweenMax.to(".introduction--initiale-r",.6,{transform:"translate(-300px, -140px)",opacity:.1,ease:Circ.easeOut,delay:1.9}),TweenMax.to(".introduction--initiale-d",.6,{transform:"translate(220px, 80px)",opacity:.1,ease:Circ.easeOut,delay:1.9}),TweenMax.to(".introduction--initiale",.6,{opacity:.04,ease:Ease.easeOut,delay:2}),TweenMax.staggerFromTo(".introduction--title > span",.5,{opacity:0,transform:"translate(0, 40px)"},{opacity:1,transform:"translate(0, 0)",ease:Circ.easeOut,delay:2.6},.25)]),$(".works--left").css("transform","translateX("+-m/2+"px)"),$(".works--right").css("transform","translateX("+m/2+"px)"),$(".container").fullpage({scrollOverflow:!0,keyboardScrolling:!0,scrollbars:!0,easing:"easeOutCubic",fitToSection:!1,scrollOverflowOptions:{scrollbars:!1,hideScrollbars:!1,fadeScrollbars:!1,mouseWheel:!0,disableMouse:!0},onLeave:function(e,i,c){if(1==e&&"down"==c&&(r=400,s=1,animIntroOut=(new TimelineMax).add([TweenMax.staggerTo(".introduction--title > span",.5,{opacity:0,transform:"translateY(-20px)",ease:Circ.easeOut},.15),TweenMax.to(".introduction--initiale-r",.4,{opacity:0,transform:"translate(-340px, -140px)",ease:Power1.easeOut}),TweenMax.to(".introduction--initiale-d",.4,{opacity:0,transform:"translate(260px, 80px)",ease:Power1.easeOut})]),t()),2==e&&"up"==c){if(0!=s)return o("up"),!1;a(),$(".introduction--title > span").css({opacity:0,transform:"translate(0, 120px)"}),animIntroScrollDown=(new TimelineMax).add([TweenMax.staggerTo(".introduction--title > span",2.6,{opacity:1,transform:"translate(0, 0)",ease:Power2.easeOut,delay:2.2},.15),TweenMax.to(".introduction--initiale-r",.8,{opacity:.04,transform:"translate(-300px, -140px)",ease:Power1.easeOut,delay:2.6}),TweenMax.to(".introduction--initiale-d",.8,{opacity:.04,transform:"translate(220px, 80px)",ease:Power1.easeOut,delay:2.8})])}if(2==e&&"down"==c){if(r=800,1==s)return o("down"),!1;if(2==s)return o("down"),!1;if(3==s)return o("down"),!1;a(),$(".about--content-about > h2").css({opacity:"0",transform:"translate(0, 80px)"}),$(".about--half").css({opacity:"0",transform:"translate(0, 120px)"}),animAboutIn=(new TimelineMax).add([TweenMax.to(".about--content-about > h2",.8,{opacity:1,transform:"translate(0, 0)",ease:Power1.easeOut,delay:1.4}),TweenMax.staggerTo(".about--half",.8,{opacity:1,transform:"translate(0, 0)",ease:Power1.easeOut,delay:2.2},.2)])}return 3==e&&"up"==c&&(r=720,s=3,animAboutIn=(new TimelineMax).add([TweenMax.to(".about--content-about > h2",.8,{opacity:0,transform:"translate(0, 80px)",ease:Power1.easeOut}),TweenMax.staggerTo(".about--half",.8,{opacity:0,transform:"translate(0, 120px)",ease:Power1.easeOut},.2)]),t()),setTimeout(function(){n=!0,$.fn.fullpage.moveTo(i),setTimeout(function(){n=!1},1)},r),n}}),$(".header--menu-intro").on("click",function(e){e.preventDefault(),$.fn.fullpage.moveTo(1)}),$(".header--menu-works").on("click",function(e){e.preventDefault(),$.fn.fullpage.moveTo(2)}),$(".header--menu-about").on("click",function(e){e.preventDefault(),$.fn.fullpage.moveTo(3)}),$(".header--menu-content").on("click",function(e){e.preventDefault(),$.fn.fullpage.moveTo(3)})});
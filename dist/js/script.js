!function e(t,a,r){function o(s,i){if(!a[s]){if(!t[s]){var c="function"==typeof require&&require;if(!i&&c)return c(s,!0);if(n)return n(s,!0);throw new Error("Cannot find module '"+s+"'")}var l=a[s]={exports:{}};t[s][0].call(l.exports,function(e){var a=t[s][1][e];return o(a?a:e)},l,l.exports,e,t,a,r)}return a[s].exports}for(var n="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,a){$("document").ready(function(){function e(e){$.getJSON("js/projects.json",function(t){console.log(e),animSectionWork=(new TimelineMax).add([TweenMax.staggerTo(".works--right-img",.6,{opacity:0,transform:"translate(0 50px)",ease:Power4.easeIn},.15),TweenMax.fromTo(".work--right-cache-content",.6,{transform:"scale(0)"},{transform:"scale(1)",ease:Power4.easeIn,onComplete:function(){for($(".works--right-img").remove(),i=0;i<t[e].images.length;i++)$(".works--right").append(t[e].images[i].image);$(".works--right-img").css({opacity:0,transform:"translate(0, 50px)"}),animSectionWorkImg=(new TimelineMax).add([TweenMax.staggerTo(".works--right-img",.6,{opacity:1,transform:"translate(0)",ease:Power4.easeOut,delay:.6},.15)]),$(".works--right").css({background:t[e].color}),document.styleSheets[0].addRule("section.works a.works--see-more:after","background:"+t[e].color),2==e&&document.styleSheets[0].addRule("section.works a.works--see-more:after","background:#F3DD29"),$(".work--right-cache-content").css({"transform-origin":"bottom right","-webkit-transform-origin":"bottom right"}),setTimeout(function(){$(".work--right-cache-content").css({"transform-origin":"top left","-webkit-transform-origin":"top left"})},700)}}),TweenMax.to(".work--right-cache-content",1,{transform:"scale(0)",ease:Power4.easeOut,delay:1}),TweenMax.staggerTo(".works--element > span",.3,{transform:"translateY(56px)",ease:Circ.easeIn},.15,function(){$(".work--project-title > span").text(t[e].title),$(".work--project-subjects > span").text(t[e].hashtag),$(".work--project-description > span").text(t[e].description),$(".work--project-role > span").text(t[e].role)}),TweenMax.staggerTo(".works--element > span",.3,{transform:"translateY(0px)",ease:Circ.easeOut,delay:1.2},.15)])})}function t(){$(".introduction--title > span").css({opacity:0,transform:"translate(0, 120px)"}),animIntroScrollDown=(new TimelineMax).add([TweenMax.staggerTo(".introduction--title > span",2.6,{opacity:1,transform:"translate(0, 0)",ease:Power2.easeOut,delay:2.2},.15),TweenMax.to(".introduction--initiale-r",.8,{opacity:.04,transform:"translate(-300px, -140px)",ease:Power1.easeOut,delay:2.6}),TweenMax.to(".introduction--initiale-d",.8,{opacity:.04,transform:"translate(220px, 80px)",ease:Power1.easeOut,delay:2.8})])}function a(){u&&(u=!1,$(".works--element > span").css("transform","translateY(56px)"),$(".works--right-img").css("opacity",0),$(".works--right-cache-content").css("transform","scale(1)"),setTimeout(function(){animWorksIn=(new TimelineMax).add([TweenMax.to(".works--half",.6,{transform:"translateX(0)",ease:Power4.easeIn}),TweenMax.to(".works--right",.6,{transform:"translateX(0)",ease:Power4.easeIn,delay:.1}),TweenMax.staggerFromTo(".works--element > span",.6,{transform:"translate(0, 56px)"},{transform:"translate(0)",ease:Circ.easeOut,delay:1},.3),TweenMax.to(".works--right-cache-content",1,{transform:"scale(1)",ease:Power4.easeIn,delay:.4}),TweenMax.staggerFromTo(".works--right-img",1.2,{opacity:0,transform:"translate(0, 50px)"},{opacity:1,transform:"translate(0)",ease:Power4.easeOut,delay:1.4},.2)]),setTimeout(function(){u=!0},800)},1e3))}function r(){s=1700,u&&(u=!1,w=$("body").width(),animOutWorks=(new TimelineMax).add([TweenMax.staggerTo(".works--element > span",.3,{transform:"translateY(56px)",ease:Circ.easeIn},.15),TweenMax.staggerTo(".works--right-img",.8,{opacity:0,transform:"translateY(-50px)",ease:Power4.easeOut,delay:.2},.2),TweenMax.to(".works--left",.6,{transform:"translateX("+-w/2+"px)",ease:Power4.easeOut,delay:1.1}),TweenMax.to(".works--right",.6,{transform:"translateX("+w/2+"px)",ease:Power4.easeOut,delay:1})]),setTimeout(function(){u=!0},800))}function o(t){l&&("down"==t&&c++,"up"==t&&c--,l=!1,1==c&&e(0),2==c&&e(1),3==c&&e(2),setTimeout(function(){l=!0},800))}var n=($(".introduction"),$(".works"),$(".about"),!1),s=1e3,c=1,l=!0,u=!0,w=$("body").width(),m=$("body").height();$(".introduction--title > span").css("opacity",0),$(".introduction--initiale").css({opacity:0,color:"#4A4A4A"}),$(".works--element > span").css("transform","translate(0, 56px)"),$(".works--right-img").css("opacity",0),animIntro=(new TimelineMax).add([TweenMax.fromTo(".introduction--initiale-r",.5,{transform:"translate(0)",opacity:0},{transform:"translate(-300px, 0)",opacity:1,ease:Back.easeOut.config(2),delay:1.4}),TweenMax.to(".introduction--initiale-d",.5,{transform:"translate(220px, 0)",opacity:1,ease:Back.easeOut.config(2),delay:1.4}),TweenMax.to(".introduction--initiale-r",.6,{transform:"translate(-300px, -140px)",opacity:.1,ease:Circ.easeOut,delay:1.9}),TweenMax.to(".introduction--initiale-d",.6,{transform:"translate(220px, 80px)",opacity:.1,ease:Circ.easeOut,delay:1.9}),TweenMax.to(".introduction--initiale",.6,{opacity:.04,ease:Ease.easeOut,delay:2}),TweenMax.staggerFromTo(".introduction--title > span",.5,{opacity:0,transform:"translate(0, 40px)"},{opacity:1,transform:"translate(0, 0)",ease:Circ.easeOut,delay:2.6},.25)]),$(".works--left").css("transform","translateX("+-w/2+"px)"),$(".works--right").css("transform","translateX("+w/2+"px)"),$(".container").fullpage({scrollOverflow:!0,keyboardScrolling:!0,scrollbars:!0,easing:"easeOutCubic",fitToSection:!1,scrollOverflowOptions:{scrollbars:!1,hideScrollbars:!1,fadeScrollbars:!1,mouseWheel:!0,disableMouse:!0},onLeave:function(e,i,l){if(1==e&&"down"==l&&(s=500,c=1,animIntroOut=(new TimelineMax).add([TweenMax.staggerTo(".introduction--title > span",.6,{opacity:0,transform:"translateY(-20px)",ease:Circ.easeOut},.15),TweenMax.to(".introduction--initiale-r",.4,{opacity:0,transform:"translate(-340px, -140px)",ease:Power1.easeOut}),TweenMax.to(".introduction--initiale-d",.4,{opacity:0,transform:"translate(260px, 80px)",ease:Power1.easeOut})]),a()),2==e&&"up"==l){if(0!=c)return o("up"),!1;r(),t()}if(2==e&&"down"==l){if(s=800,1==c)return o("down"),!1;if(2==c)return o("down"),!1;if(3==c)return o("down"),!1;r(),$(".about--content-about > h2").css({opacity:"0",transform:"translate(0, 80px)"}),$(".about--half").css({opacity:"0",transform:"translate(0, 120px)"}),animAboutIn=(new TimelineMax).add([TweenMax.to(".about--content-about > h2",.8,{opacity:1,transform:"translate(0, 0)",ease:Power1.easeOut,delay:1.4}),TweenMax.staggerTo(".about--half",.8,{opacity:1,transform:"translate(0, 0)",ease:Power1.easeOut,delay:2.2},.2)])}return 3==e&&"up"==l&&(s=720,c=3,animAboutIn=(new TimelineMax).add([TweenMax.to(".about--content-about > h2",.8,{opacity:0,transform:"translate(0, 80px)",ease:Power1.easeOut}),TweenMax.staggerTo(".about--half",.8,{opacity:0,transform:"translate(0, 120px)",ease:Power1.easeOut},.2)]),a()),setTimeout(function(){n=!0,$.fn.fullpage.moveTo(i),setTimeout(function(){n=!1},1)},s),n}}),$(".header--menu-intro").on("click",function(e){e.preventDefault(),t(),$.fn.fullpage.moveTo(1)}),$(".header--menu-works").on("click",function(e){e.preventDefault(),$.fn.fullpage.moveTo(2)}),$(".header--menu-about, .header--menu-content").on("click",function(e){e.preventDefault(),$.fn.fullpage.moveTo(3)}),$(".works--see-more, .works--right").on("click",function(e){e.preventDefault();var t=$(".works--see-more").attr("href");console.log(t),TweenMax.killAll(!1,!0,!1),w=$("body").width(),$(".works--right").css({position:"absolute",left:"50%"}),animWorksClick=(new TimelineMax).add([TweenMax.to(".header",.4,{opacity:0,transform:"translate(0, -50px)",ease:Power1.easeOut}),TweenMax.to(".works--see-more",.2,{opacity:0,transform:"translate(0, 50px)",ease:Power1.easeOut}),TweenMax.staggerTo(".works--element-title",.4,{opacity:0,transform:"translate(0, 50px)",ease:Power1.easeOut},.1),TweenMax.staggerTo(".works--element > span",.4,{opacity:1,transform:"translate(0, 56px)",ease:Power1.easeOut,delay:.2},.1),TweenMax.staggerTo(".works--right-img",.4,{opacity:0,transform:"translate(0, 50px)",ease:Power1.easeOut,delay:.2},.1),TweenMax.to(".works--right",.5,{width:"100%",transform:"translate(-"+w/2+"px, 0)",ease:Circ.easeInOut,delay:.85})]),setTimeout(function(){window.location.href=t},1500)}),$(".works--right").on("mouseover",function(e){$(".works--see-more").after().toggleClass("works--see-more-hover")}),$(".header").css({opacity:"0",transform:"translate(0, -50px)"}),$(".project--header").css({height:"100%"}),$(".project--header > h1").css({opacity:"0",transform:"translate(0, 50px)"}),m=$("body").height(),animWorksClick=(new TimelineMax).add([TweenMax.to(".header",.4,{opacity:1,transform:"translate(0,0)",ease:Circ.easeOut,delay:.5}),TweenMax.to(".project--header",.6,{height:m/2+"px",ease:Circ.easeInOut}),TweenMax.to(".project--header > h1",.6,{opacity:1,transform:"translate(0,0)",ease:Circ.easeOut,delay:.5})])})},{}]},{},[1]);
!function e(t,a,o){function n(s,i){if(!a[s]){if(!t[s]){var c="function"==typeof require&&require;if(!i&&c)return c(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+s+"'")}var l=a[s]={exports:{}};t[s][0].call(l.exports,function(e){var a=t[s][1][e];return n(a?a:e)},l,l.exports,e,t,a,o)}return a[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)n(o[s]);return n}({1:[function(e,t,a){$("document").ready(function(){function e(e){$.getJSON("js/projects.json",function(t){console.log(e),animSectionWork=(new TimelineMax).add([TweenMax.staggerTo(".works--right-img",.6,{opacity:0,transform:"translate(0 50px)",ease:Power4.easeIn},.15),TweenMax.fromTo(".work--right-cache-content",.6,{transform:"scale(0)"},{transform:"scale(1)",ease:Power4.easeIn,onComplete:function(){for($(".works--right-img").remove(),i=0;i<t[e].images.length;i++)$(".works--right").append(t[e].images[i].image);$(".works--right-img").css({opacity:0,transform:"translate(0, 50px)"}),animSectionWorkImg=(new TimelineMax).add([TweenMax.staggerTo(".works--right-img",.6,{opacity:1,transform:"translate(0)",ease:Power4.easeOut,delay:.6},.15)]),$(".works--right").css({background:t[e].color}),document.styleSheets[0].addRule("section.works a.works--see-more:after","background:"+t[e].color),2==e&&document.styleSheets[0].addRule("section.works a.works--see-more:after","background:#F3DD29"),$(".work--right-cache-content").css({"transform-origin":"bottom right","-webkit-transform-origin":"bottom right"}),setTimeout(function(){$(".work--right-cache-content").css({"transform-origin":"top left","-webkit-transform-origin":"top left"})},700)}}),TweenMax.to(".work--right-cache-content",1,{transform:"scale(0)",ease:Power4.easeOut,delay:1}),TweenMax.staggerTo(".works--element > span",.3,{transform:"translateY(56px)",ease:Circ.easeIn},.15,function(){$(".work--project-title > span").text(t[e].title),$(".work--project-subjects > span").text(t[e].hashtag),$(".work--project-description > span").text(t[e].description),$(".work--project-role > span").text(t[e].role)}),TweenMax.staggerTo(".works--element > span",.3,{transform:"translateY(0px)",ease:Circ.easeOut,delay:1.2},.15)])})}function t(){$(".introduction--title > span").css({opacity:0,transform:"translate(0, 120px)"}),animIntroScrollDown=(new TimelineMax).add([TweenMax.staggerTo(".introduction--title > span",2.6,{opacity:1,transform:"translate(0, 0)",ease:Power2.easeOut,delay:2.2},.15),TweenMax.to(".introduction--initiale-r",.8,{opacity:.04,transform:"translate(-300px, -140px)",ease:Power1.easeOut,delay:2.6}),TweenMax.to(".introduction--initiale-d",.8,{opacity:.04,transform:"translate(220px, 80px)",ease:Power1.easeOut,delay:2.8})])}function a(){y&&(y=!1,$(".works--element > span").css("transform","translateY(56px)"),$(".works--right-img").css("opacity",0),$(".works--right-cache-content").css("transform","scale(1)"),setTimeout(function(){animWorksIn=(new TimelineMax).add([TweenMax.to(".works--half",.6,{transform:"translateX(0)",ease:Power4.easeIn}),TweenMax.to(".works--right",.6,{transform:"translateX(0)",ease:Power4.easeIn,delay:.1}),TweenMax.staggerFromTo(".works--element > span",.6,{transform:"translate(0, 56px)"},{transform:"translate(0)",ease:Circ.easeOut,delay:1},.3),TweenMax.to(".works--right-cache-content",1,{transform:"scale(1)",ease:Power4.easeIn,delay:.4}),TweenMax.staggerFromTo(".works--right-img",1.2,{opacity:0,transform:"translate(0, 50px)"},{opacity:1,transform:"translate(0)",ease:Power4.easeOut,delay:1.4},.2)]),setTimeout(function(){y=!0},800)},1e3))}function o(){d=1700,y&&(y=!1,T=$("body").width(),animOutWorks=(new TimelineMax).add([TweenMax.staggerTo(".works--element > span",.3,{transform:"translateY(56px)",ease:Circ.easeIn},.15),TweenMax.staggerTo(".works--right-img",.8,{opacity:0,transform:"translateY(-50px)",ease:Power4.easeOut,delay:.2},.2),TweenMax.to(".works--left",.6,{transform:"translateX("+-T/2+"px)",ease:Power4.easeOut,delay:1.1}),TweenMax.to(".works--right",.6,{transform:"translateX("+T/2+"px)",ease:Power4.easeOut,delay:1})]),setTimeout(function(){y=!0},800))}function n(t){x&&("down"==t&&g++,"up"==t&&g--,x=!1,1==g&&e(0),2==g&&e(1),3==g&&e(2),setTimeout(function(){x=!0},800))}function r(e){e.draw("80% - 24","80%",.3,{delay:.1,callback:function(){s(e)}})}function s(e){e.draw("100% - 54.5","100% - 30.5",.08)}function c(e){e.draw(2,38,.1,{callback:function(){l(e)}})}function l(e){e.draw(20,20,.3)}function u(e){e.draw("90% - 24","90%",.1,{callback:function(){w(e)}})}function w(e){e.draw("20% - 24","20%",.3,{callback:function(){m(e)}})}function m(e){e.draw(8,32,.1)}function f(e){e.draw(8,32,.2,{delay:.1})}var p=($(".introduction"),$(".works"),$(".about"),!1),d=1e3,g=1,x=!0,y=!0,T=$("body").width(),h=$("body").height();$(".introduction--title > span").css("opacity",0),$(".introduction--initiale").css({opacity:0,color:"#4A4A4A"}),$(".works--element > span").css("transform","translate(0, 56px)"),$(".works--right-img").css("opacity",0),animIntro=(new TimelineMax).add([TweenMax.fromTo(".introduction--initiale-r",.5,{transform:"translate(0)",opacity:0},{transform:"translate(-300px, 0)",opacity:1,ease:Back.easeOut.config(2),delay:1.4}),TweenMax.to(".introduction--initiale-d",.5,{transform:"translate(220px, 0)",opacity:1,ease:Back.easeOut.config(2),delay:1.4}),TweenMax.to(".introduction--initiale-r",.6,{transform:"translate(-300px, -140px)",opacity:.1,ease:Circ.easeOut,delay:1.9}),TweenMax.to(".introduction--initiale-d",.6,{transform:"translate(220px, 80px)",opacity:.1,ease:Circ.easeOut,delay:1.9}),TweenMax.to(".introduction--initiale",.6,{opacity:.04,ease:Ease.easeOut,delay:2}),TweenMax.staggerFromTo(".introduction--title > span",.5,{opacity:0,transform:"translate(0, 40px)"},{opacity:1,transform:"translate(0, 0)",ease:Circ.easeOut,delay:2.6},.25)]),$(".works--left").css("transform","translateX("+-T/2+"px)"),$(".works--right").css("transform","translateX("+T/2+"px)"),$(".container").fullpage({scrollOverflow:!0,keyboardScrolling:!0,scrollbars:!0,easing:"easeOutCubic",fitToSection:!1,scrollOverflowOptions:{scrollbars:!1,hideScrollbars:!1,fadeScrollbars:!1,mouseWheel:!0,disableMouse:!0},onLeave:function(e,r,s){if(1==e&&"down"==s&&(d=500,g=1,animIntroOut=(new TimelineMax).add([TweenMax.staggerTo(".introduction--title > span",.6,{opacity:0,transform:"translateY(-20px)",ease:Circ.easeOut},.15),TweenMax.to(".introduction--initiale-r",.4,{opacity:0,transform:"translate(-340px, -140px)",ease:Power1.easeOut}),TweenMax.to(".introduction--initiale-d",.4,{opacity:0,transform:"translate(260px, 80px)",ease:Power1.easeOut})]),a()),2==e&&"up"==s){if(0!=g)return n("up"),!1;o(),t()}if(2==e&&"down"==s){if(d=800,1==g)return n("down"),!1;if(2==g)return n("down"),!1;if(3==g)return n("down"),!1;o(),$(".about--content-about > h2").css({opacity:"0",transform:"translate(0, 80px)"}),$(".about--half").css({opacity:"0",transform:"translate(0, 120px)"}),animAboutIn=(new TimelineMax).add([TweenMax.to(".about--content-about > h2",.8,{opacity:1,transform:"translate(0, 0)",ease:Power1.easeOut,delay:1.4}),TweenMax.staggerTo(".about--half",.8,{opacity:1,transform:"translate(0, 0)",ease:Power1.easeOut,delay:2.2},.2)])}return 3==e&&"up"==s&&(d=720,g=3,animAboutIn=(new TimelineMax).add([TweenMax.to(".about--content-about > h2",.8,{opacity:0,transform:"translate(0, 80px)",ease:Power1.easeOut}),TweenMax.staggerTo(".about--half",.8,{opacity:0,transform:"translate(0, 120px)",ease:Power1.easeOut},.2)]),a()),setTimeout(function(){p=!0,$.fn.fullpage.moveTo(r),setTimeout(function(){p=!1},1)},d),p}}),$(".header--menu-intro").on("click",function(e){e.preventDefault(),t(),$.fn.fullpage.moveTo(1)}),$(".header--menu-works").on("click",function(e){e.preventDefault(),$.fn.fullpage.moveTo(2)}),$(".header--menu-about, .header--menu-content").on("click",function(e){e.preventDefault(),$.fn.fullpage.moveTo(3)}),$(".works--see-more, .works--right").on("click",function(e){e.preventDefault();var t=$(".works--see-more").attr("href");console.log(t),TweenMax.killAll(!1,!0,!1),T=$("body").width(),$(".works--right").css({position:"absolute",left:"50%"}),animWorksClick=(new TimelineMax).add([TweenMax.to(".header",.4,{opacity:0,transform:"translate(0, -50px)",ease:Power1.easeOut}),TweenMax.to(".works--see-more",.2,{opacity:0,transform:"translate(0, 50px)",ease:Power1.easeOut}),TweenMax.staggerTo(".works--element-title",.4,{opacity:0,transform:"translate(0, 50px)",ease:Power1.easeOut},.1),TweenMax.staggerTo(".works--element > span",.4,{opacity:1,transform:"translate(0, 56px)",ease:Power1.easeOut,delay:.2},.1),TweenMax.staggerTo(".works--right-img",.4,{opacity:0,transform:"translate(0, 50px)",ease:Power1.easeOut,delay:.2},.1),TweenMax.to(".works--right",.5,{width:"100%",transform:"translate(-"+T/2+"px, 0)",ease:Circ.easeInOut,delay:.85})]),setTimeout(function(){window.location.href=t},1500)}),$(".works--right").on("mouseover",function(e){$(".works--see-more").after().toggleClass("works--see-more-hover")}),$(".header").css({opacity:"0",transform:"translate(0, -50px)"}),$(".project--header").css({height:"100%"}),$(".project--header > h1").css({opacity:"0",transform:"translate(0, 50px)"}),h=$("body").height(),animWorksClick=(new TimelineMax).add([TweenMax.to(".header",.4,{opacity:1,transform:"translate(0,0)",ease:Circ.easeOut,delay:.5}),TweenMax.to(".project--header",.6,{height:h/2+"px",ease:Circ.easeInOut}),TweenMax.to(".project--header > h1",.6,{opacity:1,transform:"translate(0,0)",ease:Circ.easeOut,delay:.5})]);var k=document.getElementById("pathA"),M=document.getElementById("pathB"),b=document.getElementById("pathC"),O=document.getElementsByClassName("header--btn-toggle-hamburger")[0],P=new Segment(k,8,32),v=new Segment(M,8,32),C=new Segment(b,8,32),I=!0;O.addEventListener("click",function(){I?(r(P),c(v),r(C)):(u(P),f(v),u(C)),I=!I})})},{}]},{},[1]);
// LOAD PAGE WHEN READY------------------------------------
window.addEventListener("load",function(){
	$('.loadingpage').addClass("bye");
	$("body").removeClass("notready");
});

function toggleFlip(){
	var test =  $('.flip');
	test.toggleClass('flipped');
}
winHeight = $(window).height();
//MOVING BACKGROUND
backpic1=$('.BackPic');
backpic2=$('.BackPic2');
//SHUFFLE PLAYLIST-----------------------
function shuffle(array) {
	let counter = array.length;
	while (counter > 0) {
			let index = Math.floor(Math.random() * counter);
			counter--;
			let temp = array[counter];
			array[counter] = array[index];
			array[index] = temp;
	}
	return array;
}
//Introduction
head = $('.Header');

//FIRST PROJECT
size=0;obj=$('.row-1 div');row1=$('.row-1');timer= null;called=false;
rowcont=$('.row-container');
obj.each(function(i){
	size++;
});
p1box = $('.project1'); p1boxshown=false;
p1flip = $('.project1 .flip');

//SECOND PROJECT
col1=$('.col-container .col1');timer2=null;called2=false;
c1Rows=$('.col-container .col1 div'); container=$('.col-container');

//THIRD PROJECT
pics3=$('.container3 .a1 .a2 div');timer3=null;called3=false;
c3=$('.container3');

//VIDEO STUFF
backdrop = $('.front .backDrop');
backbottom = winHeight;
invisible = false;reset=true;
var vid = $('.vid source'); vids=[1,2,3,4,5,6,7,8,9,10]; 
vids=shuffle(vids); vidcount=0; var play = $('.vid');
itc =$('.introTextContainer');
tA= ['translate(-50%,-100%)','translate(-50%,-10%)','translate(-50%,-17%)',
			'translate(-225%,-25%)','translate(-225%,-45%)','translate(-50%,-35%)',
				'translate(-147%,-38%)','translate(100%,-100%)','translate(-200%,-100%)',
					'translate(-140%,-100%)'];
//IMAGE VIEWER LOADER
lightbox = $('.lightbox');
photo = $('.pictureDisplay .myImage');
lightbox.click(function(){
	lightbox.addClass('showpicture');
	$("body").removeClass("notready");
});
b1 = $('.a1 .a2 .b1');b2 = $('.a1 .a2 .b2');b3 = $('.a1 .a2 .b3');
cpic1 = $('.col1 .row1');cpic2 = $('.col1 .row2');cpic3 = $('.col1 .row3');
rowpic1 = $('.row-1 .col-1'); rowpic2 = $('.row-1 .col-2'); rowpic3=$('.row-1 .col-3');
picArray = [b1,b2,b3,cpic1,cpic2,cpic3,rowpic1,rowpic2,rowpic3];
for(let i of picArray){
	i.click( function(){
		var img = i.css('background-image').replace(/.*(\/\/).*?(\/)/,'').replace(/("\))$/,'');
		img='/'+img;
		photo.attr('src',img);
		$("body").addClass("notready");
		lightbox.removeClass('showpicture');
	});
	var img = i.css('background-image').replace(/.*(\/\/).*?(\/)/,"").replace(/("\))$/,"");
	img='/'+img;
}


//CONTACT ME
contactContainer= $('.contactContainer'); subElements= $('subelements');
overElements=$('.overelements'); element= $('.elements');
ccTop = contactContainer.offset().top;
scrollTarget = ccTop - winHeight;

$(window).scroll(function(){
		winHeight = $(window).height();
		var wScroll = $(this).scrollTop();
		
		//CONTACTS
		ccTop = contactContainer.offset().top;
		elementsHeight =element.height();
	  scrollTarget = (ccTop - winHeight);//+ element.height();
		if(wScroll>scrollTarget){
			var temp = wScroll-scrollTarget;
			window.requestAnimationFrame(function(){
        element.css({
            'transform' : 'translateY('+temp+'px)' 
        });
			});
		}
     var Dwin = $(document).width();
     var wWin = $(this).width();
  
    window.requestAnimationFrame(function(){
        backpic1.css({
            'transform' : 'translate3d(-50%, '+ (-55+(wScroll/10000))  +'%,0px) rotate(4deg)' 
        });
        backpic2.css({
            'transform' : 'translate3d('+  (-49 - (wScroll/5000)) +'%,-40%,0px) rotate(6deg)' 
        }); 
		});

		//Introduction--------------------------------------------------
		if(wScroll>(winHeight*0.2)){
			head.addClass('show');
		}else{
			head.removeClass('show');
		}
		
		//VIDEO LOADER---------------------------------------------------
		if( (wScroll<(winHeight*0.9)) ){
			if(!invisible && wScroll>=100){
				op = 1-wScroll/backbottom;
				backdrop.css({
					'transition': 'all 0s linear',
					'opacity':''+op+'' 
				});
			}else if(wScroll<100){
				invisible=false;
				reset=true;
				backdrop.css({
					'transition': 'all 1s ease-in-out',
					'opacity':'1' 
				});
			}
		}else{
			if(reset){
				reset=false;
				invisible=true;
				backdrop.css({
					'transition': 'all 0.1s ease-in-out',
					'opacity':'0' 
				});
				vid.attr('src','/Source/background'+vids[vidcount]+'.webm');
				itc.css({
					'transform': ''+tA[(vids[vidcount]-1)]+''
				});
				play[0].load();
				if(++vidcount>9){
					vidcount=0;
					vids=shuffle(vids);
					var temp = vids[0];vids[0]=vids[5];vids[5]=temp;
				}
			}
		}

		//FIRST PROJECT-------------------------------------------------------------------
		rowbot = rowcont.offset().top + (winHeight*.4);
		if( (wScroll<rowbot) && (wScroll > rowcont.offset().top-(winHeight/1.5))) {
			var x = size-1;
			if(!called){
				called=true;
				row1.removeClass('not-showing');
				row1.addClass('is-showing');
				timer = setInterval(function hello() {
					obj.eq(x).removeClass('not-showing');	
					obj.eq(x--).addClass('is-showing');
					if(x<0){clearInterval(timer);}
				},300);
			}
    }else{
			if(called){
				row1.removeClass('is-showing');
				row1.addClass('not-showing');
				clearInterval(timer);
				called=false;
				obj.each(function(i){				
					obj.eq(i).removeClass('is-showing');	
					obj.eq(i).addClass('not-showing');
				});
			}
		}
		//textbox setup
		p1boxtop = p1box.offset().top - (winHeight*0.6); 
		p1boxbot = p1box.offset().top +(winHeight*0.6);
		if(wScroll<p1boxbot && wScroll> p1boxtop){
			if(!p1boxshown){
				p1boxshown=true;
				p1flip.addClass('flipped');
			}
		}else{
			if(p1boxshown){
				p1boxshown=false;
				p1flip.removeClass('flipped');
			}
		}
		//SECOND PROJECT------------------------------------------------------------
		col1bot = container.offset().top + container.outerHeight(true);// (winHeight*1.2);
		if( (wScroll<col1bot) && (wScroll > col1.offset().top-(winHeight/1.5))) {
			var y = 0;
			if(!called2){
				called2=true;
				col1.removeClass('not-showing');
				col1.addClass('is-showing');
				timer2 = setInterval(function hey() {
					c1Rows.eq(y).removeClass('not-showing');
					c1Rows.eq(y++).addClass('is-showing');
					if(y>4){clearInterval(timer2);}
					return hey;
				}(),250);
			}
		}else{
			if(called2){
				called2=false;
				clearInterval(timer2);
				col1.removeClass('is-showing');
				col1.addClass('not-showing');
				c1Rows.each(function(i){		
					c1Rows.eq(i).removeClass('is-showing');	
					c1Rows.eq(i).addClass('not-showing');
				});
			}
		}

		//THIRD PROJECT--------------------------------------------------------------------------------
		c3bottom = c3.offset().top + (winHeight*1);
		if( (wScroll<c3bottom) && (wScroll> c3.offset().top-winHeight/1.2) ) {
			if(!called3){
				called3=true;
				c3.removeClass('not-showing');
				c3.addClass('is-showing');
				pics3.each(function(i){
					pics3.eq(i).removeClass('not-showing');
					pics3.eq(i).addClass('is-showing');	
				});
			}
		}else{
			if(called3){
				called3=false;
				c3.removeClass('is-showing');
				c3.addClass('not-showing');
			}
			pics3.each(function(i){
				pics3.eq(i).removeClass('is-showing');
				pics3.eq(i).addClass('not-showing');	
			});
		}

});

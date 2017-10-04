window.mobilecheck = function() {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
};
var isMobile = window.mobilecheck();
// LOAD PAGE WHEN READY------------------------------------
window.addEventListener("load",function(){
	if(isMobile){
		prepareBackground();
		removeVideo();
	}
	$('.loadingpage').addClass("bye");
	$("body").removeClass("notready");
});
function ignore(){
	ws=$('.notpressed').removeClass('notpressed');
}

function toggleFlip(){
	var test =  $('.flip');
	test.toggleClass('flipped');
}
winHeight = $(window).height();
//MOVING BACKGROUND
backpic1=$('.BackPic');
backpic2=$('.BackPic2');
function prepareBackground(){
	backpic1.css({
		'width' : '150%',
		'height' : '100%',
		'background-size' : 'cover',
		'transform' : 'translate3d(-50%, -70%,0px) rotate(4deg)' 
	});
	backpic2.css({
		'width' : '300vw',
		'height' : '100vh',
		'transform' : 'translate3d(0%,50%,0px) rotate(6deg)',
		'background-size' : 'cover',
    'background-repeat': 'repeat'
	});
	$('#back1').css("display","inline");
	$('#back2').css("display","inline");
	$('#back3').css("display","inline");
}
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
vidback = $('.backDrop');
function removeVideo(){
	$('.vid').remove();
	vidback.css("background-image","url('/Source/background10.jpg')");
	vidback.load[0];
}
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
		if(isMobile){
			scrollTarget = (ccTop - winHeight) -60;//+ element.height();
		}else{
			scrollTarget = (ccTop - winHeight);//+ element.height();
		}
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
		if(!isMobile){
			window.requestAnimationFrame(function(){
				backpic1.css({
					'transform' : 'translate3d(-50%, '+ (-55+(wScroll/10000))  +'%,0px) rotate(4deg) ' 
        });
        backpic2.css({
					'transform' : 'translate3d('+  (-50 - (wScroll/5000)) +'%,-40%,0px) rotate(6deg)' 
        }); 
			});
		}else{
			window.requestAnimationFrame(function(){
				backpic1.css({
					'width' : '150%',
					'height' : '100%',
					'background-size' : 'cover',
					'transform' : 'translate3d(-50%, '+ (-70+(wScroll/100))  +'%,0px) rotate(4deg)' 
				});
				backpic2.css({
					'transform' : 'translate3d('+  ( -(wScroll/50)) +'%, 50%,0px) rotate(6deg)' 
				}); 
				
			});
		}

		//Introduction--------------------------------------------------
		if(wScroll>(winHeight*0.05)){
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
				itc.css({
					'transform': ''+tA[(vids[vidcount]-1)]+''
				});
				if(!isMobile){	
					vid.attr('src','/Source/background'+vids[vidcount]+'.webm');
					play[0].load();
				}else{
					vidback.css("background-image",'url(\'/Source/background'+vids[vidcount]+'.jpg\')');
					vidback.load[0];
				}
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

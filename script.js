$("document").ready(function(){
	
	//Define necessary variables;
	var count = $('.every_slide').length;
	var single = 0;
	var x = 660;
	var y = x*count;
	var size = x*count;
	//Set dynamic width to slider_box
	$('.slider_box').width(660*count+"px");
	
	//Left Control
	$("#l").click(function(){
		var a = x-y;
		single += x;
		if(size<y){
			$('.slider_box').animate({left: single+'px'});
			size += x;
		}
		
		if(size==y){
			size = 0;
			$('.slider_box').animate({left: a+'px'});
			single = a;
		}
		$("#d").html('Size2 ='+size);
		$("#x").html('Single2 = '+single);
	});
	
	//Right control
	$("#r").click(function(){
		single-=x;
		if(size>0){
			$('.slider_box').animate({left: single+'px'});
			size -= x;
		}
		
		if(size==0){
			size = x*count;
			$('.slider_box').animate({left: 0+'px'});
			single = 0;
		}
		$("#d").html('Size='+size);
		$("#x").html('Single='+single);
	});
	
	//Set interval and continue sliding
	function slide(){
		if(size>0){
			single-=x;
			$('.slider_box').animate({left: single+'px'});
			size -= x;
		}
		
		if(size==0){
			size = x*count;
			$('.slider_box').animate({left: 0+'px'});
			single = 0;
		}
		
		
		
		$("#d").html('Size='+size);
		$("#x").html('Single='+single);
		setTimeout(slide,5000);
	}
	setTimeout(slide,5000);
	
	
});

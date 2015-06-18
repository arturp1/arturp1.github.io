(function($){
$(document).ready(function(){

        	var deg=0;

        	var images	= $('#stage img').removeClass('default').addClass('animationReady');
        	var dim		= { width:images.width(),height:images.height()};
        	var cnt = images.length;
        	var centerX = $('#stage').width()/2;
        	var centerY = $('#stage').height()/2 - dim.height/2;

        	function rotate(step,total,nr){
            deg+=step;
            var eSin,eCos,newWidth,newHeight,q;
            for(var i=0;i<cnt;i++){
			
                q = ((360/cnt)*i+deg)*Math.PI/180;
                eSin		= Math.sin(q);
                eCos		= Math.cos(q);
			
                q = (0.6+eSin*0.4);
                newWidth	= q*dim.width;
                newHeight	= q*dim.height;

                if(i==3){
                    images.eq(i).src=''
                }
                images.eq(i).css({
                    top			: (centerY+15*eSin)-100,
                    left		: centerX+200*eCos,
                    opacity		: 0.8+eSin*0.2,
                    marginLeft	: -newWidth/2,
                    zIndex		: Math.round(80+eSin*20)
                }).width(newWidth).height(newHeight);
            }

            total-=Math.abs(step);
            if(total<=0) return false;
            
            setTimeout(function(){rotate(step,total)},40);
	
        }
	
        $('#phoneCarousel .previous').click(function(){
            // 360/cnt lets us distribute the phones evenly in a circle
            rotate(-10,360/cnt,1);
        });
	
        $('#phoneCarousel .next').click(function(){
            rotate(10,360/cnt,1);
        });
        window.setTimeout( 'zmien(\'2\',\'5\')', 600 ); 
    });
})(jQuery);

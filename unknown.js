//*    giperfast    *\\

$(document).on('ready', function () {
    setTimeout(function () {
        $('.letter').addClass('loaded');
        $('.word').addClass('loaded');
    }, 1000);
});


//*    menu    *\\

$(document).ready(function() {
  $(".menu").click(function(){
    $(this).toggleClass("active");
  }); 
});


//*    preloader    *\\

var _d = document,
    _p = _d.querySelector('.preloader');

console.log(_p)

setTimeout(function(){
  _p.classList.add('is-loaded')
}, 1000)


//*    parallax    *\\

$(function () {
    $(document).on('mousemove', function (e) {
        $('#stars').css({
            left: e.pageX / 50 + 10,
            top: -e.pageY / 50 + 10
        });
        $('.text-container').css({
            left: e.pageX / 50 + 220,
            bottom: e.pageY / 50 + 400
        });
		  
    });
});



//*    timer    *\\

		function GetSetTime() {
			var speed = "1000";
			var date = new Date();
			var hours = date.getHours();
			var mins = date.getMinutes();
			var secs = date.getSeconds();
			
		if(hours<=9){
		hours="0"+hours;
		}else{
		hours = date.getHours();
		}
		if(mins<=9){
		mins="0"+mins;
		}else{
		mins = date.getMinutes();
		}
		if(secs<=9){
		secs="0"+secs;
		}else{
		secs = date.getSeconds();
		}
		
		document.getElementById("timedisplay").innerHTML = hours+":"+mins+":"+secs;
		window.setTimeout("GetSetTime()", speed);
		}
		GetSetTime();
		
		
		
		
		
		
$(document).bind("contextmenu", function(event) {
    event.preventDefault();
    $("ul.contextMenu")
        .show()
        .css({top: event.pageY + 1, left: event.pageX + 1});
});
$(document).click(function() {
  isHovered = $("ul.contextMenu").is(":hover");
  if (isHovered == false){
    $("ul.contextMenu").fadeOut("fast");
  }
});
		

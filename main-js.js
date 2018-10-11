var li=document.getElementById("title");
	var nav=document.getElementById("sub-menu");
	var a=document.getElementById("align-center");

	li.onmouseover=function() {
		nav.style.height="300px";     
	}
	li.onmouseout=function() {
		nav.style.height="0";       
	}
	nav.onmouseover=function() {
		nav.style.height="300px";      
	}
	nav.onmouseout=function() {
		nav.style.height="0";       
	}
	
	$(document).ready(function() {

		$('#top-title').popover({
		container:'body',
		trigger: 'hover',
		html: true,
		content: function() {return $(".form-block").html()},
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
		}).on('hide.bs.popover', function () {
			if ($(".popover:hover").length) {
			  return false;
				}                
			}); 
			
			$('body').on('mouseleave', '.popover', function(){
				$('.popover').popover('hide');
			});
		
	})
	

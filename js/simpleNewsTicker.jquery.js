/*
	jQuery Simple News Ticker
	Download: https://github.com/ivanharmat/simpleNewsTicker
	Author : Ivan Harmat
	Github: https://github.com/ivanharmat
*/

(function($){
    $.fn.simpleNewsTicker = function(settings){
		// settings
		var config = {
			'delay': 4000,
			'fadeSpeed': 500,
			'element' : 'p'
		};
		if ( settings ){$.extend(config, settings);}

		// variables
		var obj = $(this);
		var elements = obj.children(config.element);
		var count = elements.length;
		var i = 0;

		// Add CSS styling
		$(obj.selector+' '+config.element).css('display', 'none');
		$(obj.selector+' '+config.element).css('position', 'absolute');

		// show first child
		elements.eq(0).show();

		return this.each(function(){
			// run slideshow
			setInterval(function(){
				elements.eq(i).fadeOut(config.fadeSpeed);
				i = ( i+1 == count ) ? 0 : i+1;
				elements.eq(i).fadeIn(config.fadeSpeed);
			}, config.delay);
        
		});
	};
})(jQuery);

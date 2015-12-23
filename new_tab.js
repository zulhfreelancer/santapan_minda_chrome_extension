$(function(){

	var url = "http://www.santapanminda.com/api.php?format=json";
	var quote = $("#quote");
	var fadeInDuration = 500;

	function getQuote(){
		$.get(url, function(data) {
			// received data is string
			// convert to JSON first
			var santapan_minda = JSON.parse(data);
			
			// set the H1 text with the santapan minda quote
			quote.text(santapan_minda.posts[0].post.content);
			// now show the H1 quote with a little fade In effect
			quote.fadeIn({
				duration: fadeInDuration
			});
		});
	}

	$('body').waitForImages(function() {
		// image has been downloaded
		// now, get a quote from santapan minda server
		getQuote();
	});

});
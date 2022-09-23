var id = null;
function showSlides(n) {
	let slider = document.getElementsByClassName("scroll-story");
	let step = 130;
	let microstep = 1;
	
	clearInterval(id);
  	id = setInterval(frame, 1);
	
	function frame() {
		if ( n > 0) {
			slider[0].scrollLeft += 1;
		} else {
			slider[0].scrollLeft += -1;
		}
		step -= microstep;
		if( step <= 0 ) {
			clearInterval(id);
		}
  	}
}
$(document).ready(function () {
	var p = document.getElementById('player');
	p.volume = 0.1;
	$('#playerButton').click(function() {
		if ( p.paused ) p.play();
		else p.pause();
	});
});

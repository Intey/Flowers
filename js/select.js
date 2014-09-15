$(document).ready(function () {
        $('header a').click(function () {
            $('header a').removeClass('selected');
			//make this = div
			$(this).addClass('selected');

        });
    });

all: i_head.html i_body.html i_tail.html
	rm indexp.html
	cat i_head.html i_body.html i_tail.html > indexp.html

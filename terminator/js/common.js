 var $randomnbr = $('.nbr');
 var $randomnbr1 = $('.nbr-1');
 var $timer = 30;
 var letters = ["w", "e", "b", "d", "e", "s", "i", "g", "n"];
 var letters1 = ["h", "i", " ", "t", "h", "e", "r", "e"];
 var randomnbr_name = ".nbr";
 var randomnbr_name1 = ".nbr-1";


function terminator ($randomnbr, $timer, letters, name) {

	 var $it;
	 var $data = 0;
	 var index;
	 var change;

	$randomnbr.each(function() {

	 change = Math.round(Math.random()*100);
	 	$(this).attr('data-change', change);
	 });

	 function random() {
		return Math.round(Math.random()*9);
	 };

	 function select() {
	      return Math.round(Math.random()*$randomnbr.length + 1);
	 };

	 function value() {
	      $('' + name + ':nth-child('+select()+')').html(''+random()+'');
	      $('' + name + ':nth-child('+select()+')').attr('data-number', $data);
	      $data++;

	      $randomnbr.each(function() {
	           if(parseInt($(name).attr('data-number')) > parseInt($(name).attr('data-change'))) {
	                index = $(name + '.ltr').index(this);
	                $(this).html(letters[index]);
	                $(this).removeClass(name);
	           }
	      });
	 };

 $it = setInterval(value, $timer);
}

terminator($randomnbr, 30, letters, randomnbr_name);
terminator($randomnbr1, 50, letters1, randomnbr_name1);
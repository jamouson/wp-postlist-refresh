jQuery(document).ready(function($){
	console.log( php_object );
	if( php_object.current_screen.base == "edit" ){
		var idleInterval = setInterval(timerIncrement, 1000); // 1 minute
		var idleTime = 0;
    	//Zero the idle timer on mouse movement.
    	$(this).mousemove(function (e) {
    		idleTime = 0;
    	});
    	$(this).keypress(function (e) {
    		idleTime = 0;
    	});
		//Increment the idle time counter every minute.
		

    	//Zero the idle timer on mouse movement.
    	$(this).mousemove(function (e) {
    		idleTime = 0;
    	});
    	$(this).keypress(function (e) {
    		idleTime = 0;
    	});

    	function timerIncrement() {
    		idleTime = idleTime + 1;
    		console.log( idleTime );
    		if (idleTime > 10) { 
    			clearInterval(idleInterval);
    			$.get( php_object.current_url , function( entire_html ) {
    				var newHTML = document.open("text/html", "replace"); 
    				newHTML.write(entire_html); 
    				newHTML.close(); 
    			});
    		}
    	}

    	/*setTimeout(function(){
    		console.log("Going to call");

    		$.get( php_object.current_url , function( entire_html ) {
    			var newHTML = document.open("text/html", "replace"); 
    			newHTML.write(entire_html); 
    			newHTML.close(); 
    		});
    	}, 10000);*/
    }
});
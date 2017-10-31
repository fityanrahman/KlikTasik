jQuery(document).ready(function($) {  
    
    // site preloader -- also uncomment the div in the header and the css style for #preloader
    $(window).load(function(){
        $('#preloader').delay(350).fadeOut('slow',function(){$(this).remove();});
    });
    
    });
$(document).ready(function(){

    
    $('.with-dropdown').mouseover(function() { 
        $(this).find('.dropdown-menu').addClass('view-dropdown'); 
    })

    $('.dropdown-menu').mouseleave(function(){
        $('.dropdown-menu').removeClass('view-dropdown');

    })
   

});



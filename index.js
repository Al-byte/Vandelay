$(document).ready(function() {    
    $('.navbar-nav>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    $('#menu').on('click', function() {
        $('#menu').toggleClass('click')
    })
    
})



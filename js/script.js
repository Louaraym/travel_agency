$(function(){

    $(".navbar a").on("click", function(event){

        event.preventDefault();
        var hash = this.hash;

        $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})

    });

    // Mobile Links Collapse on Click
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

});
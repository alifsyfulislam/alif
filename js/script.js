var menuTop = $('#menuBar').position();


$(window).scroll(function () {
    var scrollPosition = $(window).scrollTop();
    //$('#scrollPosition').html(x);
    if(scrollPosition > menuTop.top){
        $('#menuBar').css({
            'position' : 'fixed',
            'top' : '0px',
            'width' : '100%',
            'margin-left': '-15px',
            'background-color' : '#0c5460',
            'z-index' : '99'
        });
    }
    else {
        $('#menuBar').css({
            'position' : 'static',
            'background-color' : 'transparent'
        });
    }
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:100,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})



$('#name').keyup(function () {
    checkName();
});

$('#email').keyup(function () {
    checkEmail();
});

$('#mobile').keyup(function () {
    checkMobile();
});

function checkName(){
    var Name = $('#name').val();
    var regxp = /^[a-zA-Z .]{3,10}$/;
    if(regxp.test(Name)){
        $('#nameSpan').css(
            {
                'background-color' : 'green'
            }
        );
        return true;
    }
    else {
        $('#nameSpan').css(
            {
                'background-color' : 'red'
            }
        );
        return false;
    }
}

function checkEmail(){
    var email = $('#email').val();
    var regxp = /^[a-zA-z0-9_\.\-]+\@(([a-zA-Z0-9\-]+\.)+([a-zA-Z0-9]){2,3})+$/;
    if (regxp.test(email)){
        $('#emailSpan').css(
            {
                'background-color' : 'green'
            }
        );
        return true;
    }
    else {
        $('#emailSpan').css(
            {
                'background-color' : 'red'
            }
        );
        return false;
    }
}


function checkMobile(){
    var email = $('#mobile').val();
    var regxp = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    if (regxp.test(email)){
        $('#mobileSpan').css(
            {
                'background-color' : 'green'
            }
        );
        return true;
    }
    else {
        $('#mobileSpan').css(
            {
                'background-color' : 'red'
            }
        );
        return false;
    }
}



$('#regForm').submit(function () {
    if (Name()== true && checkEmail()==true && checkMobile()==true){
        return true;
    }
    else{
        return false;
    }
});
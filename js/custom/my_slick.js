$(document).ready(function(){
    $('.my_slider').slick({
        accessibility: false,
        arrows: false,
        // draggable: false,
        swipe: false,
    });
});

$(document).ready(function(){
    $('#check_radio').click(function() {
        var checked_radio = $('input[name=window1]:checked').val();
    });
});

$(document).ready(function(){
    $('#other_home_bussines').change(function(){
        if(this.checked)
            $('#textarea_div_home_bussines').fadeIn('slow'),
            $('#textarea_explain_home_bussines').focus();
        else
            $('#textarea_div_home_bussines').fadeOut('slow');
    });
});

$(document).ready(function(){
    $('#other_automotive').change(function(){
        if(this.checked)
            $('#textarea_div_automotive').fadeIn('slow'),
            $('#textarea_explain_automotive').focus();
        else
            $('#textarea_div_automotive').fadeOut('slow');
    });
});




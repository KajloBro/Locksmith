$(document).ready(function(){
    


    // Slick
    $('.my_slick').slick({
        accessibility: false,
        arrows: false,
        draggable: false,
        swipe: false,
        infinite: false,
        touchMove: false,
    });


    
    // Slide 0 navigation
    $('#btnPro').click(function() {
        $('.my_slick').slick('slickNext');
    });

    $('#btnAmateur').click(function() {
        $('.my_slick').slick('slickNext');
    });



    // Slide 1 navigation
    $('#btnPrev1').click(function() {
        $('.my_slick').slick('slickPrev');
    });

    $('#btnNext1').click(function() {
        $('.my_slick').slick('slickNext');
    });

    

    // Slide 1 navigation
    $('#btnPrev2').click(function() {
        $('.my_slick').slick('slickPrev');
    })

    $('#btnNext2').click(function() {
        
        flag = true;
        
        // Check if user input a name
        if(!$.trim($("#name").val())) {
            flag = false;
            $("#name").addClass('txtarea_error');
            $("#name_label").addClass('txtarea_label_error');
            M.toast({html: 'Please input name', displayLength: '1000', classes: 'rounded'});
            flag = false;
            $("#name").focus(function() {
                $('#name').removeClass('txtarea_error');
                $('#name_label').removeClass('txtarea_label_error');
            });
        }

        // Check if user input a name
        if(!$.trim($("#lastName").val())) {
            flag = false;
            $("#lastName").addClass('txtarea_error');
            $("#last_name_label").addClass('txtarea_label_error');
            M.toast({html: 'Please input last name', displayLength: '1000', classes: 'rounded'});
            flag = false;
            $("#lastName").focus(function() {
                $('#lastName').removeClass('txtarea_error');
                $('#last_name_label').removeClass('txtarea_label_error');
            });
        }

        // Check if user input a telephone
        if(!$.trim($("#telephone").val())) {
            flag = false;
            $("#telephone").addClass('txtarea_error');
            $("#telephone_label").addClass('txtarea_label_error');
            M.toast({html: 'Please input telephone', displayLength: '1000', classes: 'rounded'});
            flag = false;
            $("#telephone").focus(function() {
                $('#telephone').removeClass('txtarea_error');
                $('#telephone_label').removeClass('txtarea_label_error');
            });
        }

        // Check if user input a telephone
        if(!$.trim($("#email").val())) {
            flag = false;
            $("#email").addClass('txtarea_error');
            $("#email_label").addClass('txtarea_label_error');
            M.toast({html: 'Please input e-mail', displayLength: '1000', classes: 'rounded'});
            flag = false;
            $("#email").focus(function() {
                $('#email').removeClass('txtarea_error');
                $('#email_label').removeClass('txtarea_label_error');
            });
        }

        if (flag == true)
            $('.my_slick').slick('slickNext');

    });




});



// Prevent Tabs
$(document).keydown(function(objEvent) {
    if (objEvent.keyCode == 9)
        objEvent.preventDefault(); 
})



// Autocomplete Google Maps API
function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('textarea_address')),
        {types: ['geocode']});
    autocomplete.addListener('place_changed', fillInAddress);
}
function fillInAddress() {
    var place = autocomplete.getPlace();
}
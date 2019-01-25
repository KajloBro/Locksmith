$(document).ready(function(){
    


    // Slick
    $('.my_slider').slick({
        accessibility: false,
        arrows: false,
        draggable: false,
        swipe: false,
        infinite: false,
        touchMove: false,
    });
    


    // Slide 0 navigation
    $('#btnNext0').click(function() {
        locksmithFor = $('input[name=locksmith_for]:checked').val();
        if (locksmithFor == 'home' || locksmithFor == 'bussines')
            purpose = 1;
        else if (locksmithFor == 'automotive')
            purpose = 2;
        else
            M.toast({html: 'Check one button!', displayLength: '1000', classes: 'rounded'});   
        $('.my_slider').slick('slickGoTo', parseInt(purpose), false);
    });



    // Slide 1 navigation
    $('#btnPrev1').click(function() {
        $('.my_slider').slick('slickGoTo', 0, false);
    });

    $('#btnNext1').click(function() {
        // Check if textarea is empty
        if($('#otherA').is(":checked") && !$.trim($("#txtareaA").val())) {
            $('#txtareaA').addClass('txtarea_error');
            $('#txtareaALabel').addClass('txtarea_label_error');
            $('#txtareaA').focus(function() {
                $('#txtareaA').removeClass('txtarea_error'),
                $('#txtareaALabel').removeClass('txtarea_label_error');
            });
        }
        // Check if at least one checkbox is checked
        else if($('#myForm input[type=checkbox]:checked').length == 0)
            M.toast({html: 'Check at least one checkbox!', displayLength: '1000', classes: 'rounded'}); 
        // Proceed
        else 
            $('.my_slider').slick('slickGoTo', 4, false);    
    });

    $('#otherA').change(function(){
        // Show/hide textarea on checkbox change
        if(this.checked)
            $('#txtareaDivA').fadeIn('slow'),
            $('#txtareaA').focus();
        else
            $('#txtareaDivA').fadeOut('slow');
    });



    // Slide 2 navigation
    $('#btnPrev2').click(function() {
        $('.my_slider').slick('slickGoTo', 0, false);
    });

    $('#btnNext2').click(function() {
        // Check if textarea is empty
        if($('#otherB').is(":checked") && !$.trim($("#txtareaB").val())) {
            $('#txtareaB').addClass('txtarea_error');
            $('#txtareaBLabel').addClass('txtarea_label_error');
            $('#txtareaB').focus(function() {
                $('#txtareaB').removeClass('txtarea_error'),
                $('#txtareaBLabel').removeClass('txtarea_label_error');
            });
        }
        // Check if at least one checkbox is checked
        else if($('#myForm input[type=checkbox]:checked').length == 0)
            M.toast({html: 'Check at least one checkbox!', displayLength: '1000', classes: 'rounded'});
        // Proceed
        else 
            $('.my_slider').slick('slickGoTo', 3, false);    
    });

    $('#otherB').change(function(){
        // Show/hide textarea on checkbox change
        if(this.checked)
            $('#txtareaDivB').fadeIn('slow'),
            $('#txtareaB').focus();
        else
            $('#txtareaDivB').fadeOut('slow');
    });



    // Slide 3 navigation
    $('#btnPrev3').click(function() {
        $('.my_slider').slick('slickGoTo', 2, false);
    });

    $('#btnNext3').click(function() {
        // Check if textarea is empty
        if(!$.trim($("#textarea_working_on").val())) {
            $('#textarea_working_on').addClass('txtarea_error');
            $('#textarea_working_on_label').addClass('txtarea_label_error');
            $('#textarea_working_on').focus(function() {
                $('#textarea_working_on').removeClass('txtarea_error'),
                $('#textarea_working_on_label').removeClass('txtarea_label_error');
            });
        }
            
        // Proceed
        else 
            $('.my_slider').slick('slickGoTo', 4, false);    
    });



    // Slide 4 navigation
    $('#btnPrev4').click(function() {
        if (purpose == 1) 
            $('.my_slider').slick('slickGoTo', 1, false);
        else if (purpose == 2) 
            $('.my_slider').slick('slickGoTo', 3, false);
    });

    $('#btnNext4').click(function() {
        // Check if textarea is empty
        if(!$.trim($("#textarea_address").val())) {
            $("#textarea_address").addClass('address_error');
            $('#textarea_address').focus(function() {
                $('#textarea_address').removeClass('address_error');
            });
        }
        // Proceed
        else 
            $('.my_slider').slick('slickGoTo', 5, false);    
    });



    // Slide 5 navigation
    $('#btnPrev5').click(function() {
        $('.my_slider').slick('slickGoTo', 4, false);
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



// Validation
function validate() {
    flag = true;
    // Check if user input a name
    if(!$.trim($("#name").val())) {
        $("#name").addClass('txtarea_error');
        $("#name_label").addClass('txtarea_label_error');
        flag = false;
        $("#name").focus(function() {
            $('#name').removeClass('txtarea_error');
            $('#name_label').removeClass('txtarea_label_error');
        });
    }
    // Check if user input a telephone
    if(!$.trim($("#telephone").val())) {
        $("#telephone").addClass('txtarea_error');
        $("#telephone_label").addClass('txtarea_label_error');
        flag = false;
        $("#telephone").focus(function() {
            $('#telephone').removeClass('txtarea_error');
            $('#telephone_label').removeClass('txtarea_label_error');
        });
    }
    return flag;


}
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



    // Tmp funct: Jump to current developing slide
    // $('.my_slick').slick('slickGoTo', 12);


    
    // Slide 0 navigation
    $('#btnPro').click(function() {
        $('.my_slick').slick('slickNext');
        level = "pro";
    });

    $('#btnAmateur').click(function() {
        $('.my_slick').slick('slickNext');
        level = "amateur";
    });



    // Slide 1 navigation
    $('#btnPrev1').click(function() {
        $('.my_slick').slick('slickPrev');
    });

    $('#btnNext1').click(function() {
        $('.my_slick').slick('slickNext');
    });

    

    // Slide 2 navigation
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

        // Check if user input an email
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



    // Slide 3 navigation
    $('#btnPrev3').click(function() {
        $('.my_slick').slick('slickPrev');
        console.log("clicked");
    });

    $('#btnNext3').click(function() {
        $('.my_slick').slick('slickNext');
    });


    // Slide 4 navigation
    $('#btnPrev4').click(function() {
        $('.my_slick').slick('slickPrev');
    });

    $('#btnNext4').click(function() {
        // Check if textarea is empty
        if(!$.trim($("#textarea_address").val())) {
            $("#textarea_address").addClass('address_error');
            M.toast({html: 'Please input address', displayLength: '1000', classes: 'rounded'});
            $('#textarea_address').focus(function() {
                $('#textarea_address').removeClass('address_error');
            });
        }
        // Proceed
        else 
            $('.my_slick').slick('slickNext');    
    });



    // Slide 5 navigation
    $('#btnPrev5').click(function() {
        $('.my_slick').slick('slickPrev');
    });

    $('#btnNext5').click(function() {
        $('.my_slick').slick('slickNext');
    });



    // Slide 6 navigation
    $('#btnPrev6').click(function() {
        $('.my_slick').slick('slickPrev');
    });

    $('#btnNext6').click(function() {
        // Check if textarea is empty
        if($('#crime_checboxes input[type=checkbox]:checked').length != 0 && !$.trim($("#txtareaCrime").val())) {
            $('#txtareaCrime').addClass('txtarea_error');
            $('#txtareaCrimeLabel').addClass('txtarea_label_error');
            M.toast({html: 'Please explain', displayLength: '1000', classes: 'rounded'});
            $('#txtareaCrime').focus(function() {
                $('#txtareaCrime').removeClass('txtarea_error'),
                $('#txtareaCrimeLabel').removeClass('txtarea_label_error');
            });
        }
        else 
            $('.my_slick').slick('slickNext');    
    });

    $('#crime_checboxes input[type=checkbox]').change(function(){
        // Show/hide textarea on checkbox change
        if(this.checked)
            $('#txtareaDivCrimial').fadeIn('slow');
        else
            $('#txtareaDivCrimial').fadeOut('slow');
    });




    // Slide 7 navigation
    $('#btnPrev7').click(function() {
        $('.my_slick').slick('slickPrev');
    });

    $('#btnNext7').click(function() {
        $('.my_slick').slick('slickNext');
    });



    // Slide 8 navigation
    $('#btnPrev8').click(function() {
        $('.my_slick').slick('slickPrev');
    });

    $('#btnNext8').click(function() {
        if (!$.trim($("#textarea_availability").val())) {
            $('#textarea_availability').addClass('txtarea_error');
            $('#textarea_availability_label').addClass('txtarea_label_error');
            M.toast({html: 'Please explain', displayLength: '1000', classes: 'rounded'});
            $('#textarea_availability').focus(function() {
                $('#textarea_availability').removeClass('txtarea_error'),
                $('#textarea_availability_label').removeClass('txtarea_label_error');
            });
        }
        else
            $('.my_slick').slick('slickNext');
    });



     // Slide 9 navigation
     $('#btnPrev9').click(function() {
        $('.my_slick').slick('slickPrev');
    });

    $('#btnNext9').click(function() {
        // Check if textarea is empty
        if($('#otherA').is(":checked") && !$.trim($("#txtareaA").val())) {
            $('#txtareaA').addClass('txtarea_error');
            $('#txtareaALabel').addClass('txtarea_label_error');
            M.toast({html: 'Please input field', displayLength: '1000', classes: 'rounded'});
            $('#txtareaA').focus(function() {
                $('#txtareaA').removeClass('txtarea_error'),
                $('#txtareaALabel').removeClass('txtarea_label_error');
            });
        }
        // Check if at least one checkbox is checked
        else if($('#home_checkboxes input[type=checkbox]:checked').length == 0)
            M.toast({html: 'Choose at least one option', displayLength: '1000', classes: 'rounded'}); 
        // Proceed
        else 
            $('.my_slick').slick('slickNext');    
    });

    $('#otherA').change(function(){
        // Show/hide textarea on checkbox change
        if(this.checked)
            $('#txtareaDivA').fadeIn('slow'),
            $('#txtareaA').focus();
        else
            $('#txtareaDivA').fadeOut('slow');
    });

    
    
    // Slide 10 navigation
    $('#btnPrev10').click(function() {
        $('.my_slick').slick('slickPrev');
    });

    $('#btnNext10').click(function() {
        // Check if textarea is empty
        if($('#otherB').is(":checked") && !$.trim($("#txtareaB").val())) {
            $('#txtareaB').addClass('txtarea_error');
            $('#txtareaBLabel').addClass('txtarea_label_error');
            M.toast({html: 'Please input field', displayLength: '1000', classes: 'rounded'});
            $('#txtareaB').focus(function() {
                $('#txtareaB').removeClass('txtarea_error'),
                $('#txtareaBLabel').removeClass('txtarea_label_error');
            });
        }
        // Check if at least one checkbox is checked
        else if($('#automotive_checkboxes input[type=checkbox]:checked').length == 0)
            M.toast({html: 'Choose at least one option', displayLength: '1000', classes: 'rounded'}); 
        // Proceed
        else 
            $('.my_slick').slick('slickNext');    
    });

    $('#otherB').change(function(){
        // Show/hide textarea on checkbox change
        if(this.checked)
            $('#txtareaDivB').fadeIn('slow'),
            $('#txtareaB').focus();
        else
            $('#txtareaDivB').fadeOut('slow');
    });



    // Slide 11 navigation
    $('#btnPrev11').click(function() {
        $('.my_slick').slick('slickPrev');
    });

    $('#btnNext11').click(function() {
        // Check if textarea is empty
        if($('#otherC').is(":checked") && !$.trim($("#txtareaC").val())) {
            $('#txtareaC').addClass('txtarea_error');
            $('#txtareaCLabel').addClass('txtarea_label_error');
            M.toast({html: 'Please input field', displayLength: '1000', classes: 'rounded'});
            $('#txtareaC').focus(function() {
                $('#txtareaC').removeClass('txtarea_error'),
                $('#txtareaCLabel').removeClass('txtarea_label_error');
            });
        }
        // Check if at least one checkbox is checked
        else if($('#interests_checkboxes input[type=checkbox]:checked').length == 0)
            M.toast({html: 'Choose at least one option', displayLength: '1000', classes: 'rounded'}); 
        // Proceed
        else 
            $('.my_slick').slick('slickNext');    
    });

    $('#otherC').change(function(){
        // Show/hide textarea on checkbox change
        if(this.checked)
            $('#txtareaDivC').fadeIn('slow'),
            $('#txtareaC').focus();
        else
            $('#txtareaDivC').fadeOut('slow');
    });



    // Slide 12 navigation
    $('#btnPrev12').click(function() {
        $('.my_slick').slick('slickPrev');
    });

    // $('#btnSerial').click(function() {
    //     console.log($('#registerForm').serialize() + '&level=' + level);
    // });

    $('#btnSubmit').click(function() {
        flag = true;

        // Check empty text area
        if (!$.trim($("#textarea_bio").val())) {
            flag = false;
            $('#textarea_bio').addClass('txtarea_error');
            $('#textarea_bio_label').addClass('txtarea_label_error');
            M.toast({html: 'Please explain', displayLength: '1000', classes: 'rounded'});
            $('#textarea_bio').focus(function() {
                $('#textarea_bio').removeClass('txtarea_error'),
                $('#textarea_bio_label').removeClass('txtarea_label_error');
            });
        }
        
        // Check if reCAPTCHA is checked
        if(grecaptcha.getResponse().length === 0) {
            M.toast({html: 'Please solve reCAPTCHA', displayLength: '1000', classes: 'rounded'});
            flag = false;
        } 


          // Ajax
    if (flag == true) {
        
        $('#btnSubmit').addClass('disabled');
        $('#btnPrev12').addClass('disabled');
        $('#buffer1').addClass('indeterminate');
        $('#buffer1').removeClass('determinate');
        $('body').addClass('cyan');
        $('body').removeClass('brown');
        $('h2').addClass('blue-text text-lighten-4');
        $("#textarea_bio").addClass('txtarea_loading');
        $("#textarea_bio_label").addClass('txtarea_label_loading');
        $("#textarea_bio_small").addClass('txtarea_label_loading');

        
        $.ajax({
            type: 'post',
            url: 'php/mail.php',
            data: $('#registerForm').serialize() + '&level=' + level, //level variable is pro/amateur (slide 0)
            
            success: function (data) {
                // Redirect to final page
                if(data == 'success') {
                    $('.my_slick').slick('slickNext');
                }

                else
                    M.toast({html: "It seems you did not provide us all information.\nPlease, check form once again!", displayLength: '3000', classes: 'rounded'}); //This executes when script.php doesnt return "success"
            },
            
            error: function(x,e) {
                if (x.status==0)
                M.toast({html: "Oops, Please check your network.", displayLength: '3000', classes: 'rounded'});
                else if(x.status==404)
                   M.toast({html: "404: Requested URL not found.", displayLength: '3000', classes: 'rounded'});
                else if(x.status==500)
                   M.toast({html: "500: Internal Server Error. Please try again later", displayLength: '3000', classes: 'rounded'});
                else if(e=='parsererror')
                   M.toast({html: "Error.\nParsing JSON Request failed.", displayLength: '3000', classes: 'rounded'});
                else if(e=='timeout')
                    M.toast({html: "Request timed out.", displayLength: '3000', classes: 'rounded'});
                else
                    M.toast({html: "Unknow Error.\n" + x.responseText, displayLength: '3000', classes: 'rounded'});
            },
            
            complete: function() {
                $('#btnSubmit').removeClass('disabled');
                $('#btnPrev12').removeClass('disabled');
                $('#buffer').removeClass('indeterminate');
                $('#buffer').addClass('determinate');
                $('body').removeClass('cyan');
                $('body').addClass('brown');
                $('h2').removeClass('blue-text text-lighten-4');
                $("#textarea_bio").removeClass('txtarea_loading');
                $("#textarea_bio_label").removeClass('txtarea_label_loading');
                $("#textarea_bio_small").removeClass('txtarea_label_loading');
                
            }
        });
    }



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



// Dynamic years of xp shown
$('input[type=range]').on('input', function () {
    $('#years_of_xp_small').html($('#years_of_xp').val());
});
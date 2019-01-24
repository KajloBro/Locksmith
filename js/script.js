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
        $('.my_slider').slick('slickGoTo', parseInt(purpose), false);
    });



    // Slide 1 navigation
    $('#btnPrev1').click(function() {
        $('.my_slider').slick('slickGoTo', 0, false);
    });

    $('#btnNext1').click(function() {
        // Check if textarea is empty
        if($('#otherA').is(":checked") && !$.trim($("#txtareaA").val()))
            alert("textarea is empty")
        // Check if at least one checkbox is checked
        else if($('#myForm input[type=checkbox]:checked').length == 0)
            alert("one checkbox")
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
        if($('#otherB').is(":checked") && !$.trim($("#txtareaB").val()))
            alert("textarea is empty");
        // Check if at least one checkbox is checked
        else if($('#myForm input[type=checkbox]:checked').length == 0)
            alert("one checkbox");
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
        if(!$.trim($("#textarea_working_on").val()))
            alert("textarea is empty");
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
        if(!$.trim($("#textarea_address").val()))
            alert("textarea is empty");
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
    if(!$.trim($("#name").val())) {
        alert("name field is empty");
        return false;
    }
    else if(!$.trim($("#telephone").val())) {
        alert("telephone field is empty");
        return false;
    }
    else 
        return true;


}
document.addEventListener('DOMContentLoaded', function () {
    $('input[type=radio][name=option]').change(function() {
        if (this.value == 'me') {
            $("#gift-option").removeClass('flex');
            $("#gift-option").addClass('hidden');
        }
        else if (this.value == 'other') {
            $("#gift-option").removeClass('hidden');
            $("#gift-option").addClass('flex');
        }
    });
    $('#see-gift-result').click(function() {
        const message = $('#gift-message').val();
        if(message){
            $('#gift-message-result').text(message)
        }
        
    });
});
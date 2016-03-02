$(function(){
    var $write = $('#write'),

    $('#keyboard li').click(function(){
        var $this = $(this),
            character = $this.html(); // If it's a lowercase letter, nothing happens to this variable

        // Add the character
        $write.html($write.html() + character);
    });
});
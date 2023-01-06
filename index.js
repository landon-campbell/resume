// $('.navbar').hide();
$('.navbar-left').show();

// Mobile View
if ($(window).width() < 900) {

    $('.main').css('margin-right', '0');
    $('.main').css('margin-left', '0');
    $('.main').css('margin-top', '5rem');
    $('.headerinfo').css('padding-left', '0');
    $('.summary').css('margin-left', '0');
    $('body').css('margin-left', '1rem');
    $('body').css('margin-right', '1rem');
    $('.headerinfo').css('text-align', 'center');
    $('.eduheaderinfo ul').css('padding-left', '0');
    $('.moreinfo').css('text-align', 'justify');

    $('.education').css('padding-left', '0');
    $('.experience').css('padding-left', '0');
    $('.HobbiesExtra').css('padding-left', '0');
    $('.csskills').css('padding-left', '0');
    $('.projects').css('padding-left', '0');
    $('.courses').css('padding-left', '0');
    $('.communityService').css('padding-left', '0');
    $('.awards').css('padding-left', '0');

    // Navbar Mobile View
    // $('.navbar').css('position', 'absolute');
    // $('.navbar').css('height', '8rem');
    
    // $('.navbar').css('width', '100%');
    
    $('.navbar-left').hide();
    
}



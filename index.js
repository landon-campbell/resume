$('.topnav').hide();
$('.navbar-desktop').show();

// Mobile View
if ($(window).width() < 500 || /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {

    $('.main').css('margin-right', '0');
    $('.main').css('margin-left', '0');
    $('.main').css('margin-top', '9rem');
    $('.headerinfo').css('padding-left', '0');
    $('.summary').css('margin-left', '0');
    $('.summary').css('font-size', '2rem');
    $('body').css('margin-left', '1rem');
    $('body').css('margin-right', '1rem');
    $('.headerinfo').css('text-align', 'center');
    $('.eduheaderinfo ul').css('padding-left', '0');
    $('.moreinfo').css('text-align', 'justify');
    $('.sectionTitle').css('font-size', '4rem');
    $('.eduheader').css('font-size', '2.9rem');
    $('.eduheaderinfo').css('font-size', '2.35rem');
    $('.date').css('font-size', '2.28rem');
    $('.moreinfo').css('font-size', '2.15rem');


    $('.education').css('padding-left', '0');
    $('.experience').css('padding-left', '0');
    $('.HobbiesExtra').css('padding-left', '0');
    $('.csskills').css('padding-left', '0');
    $('.projects').css('padding-left', '0');
    $('.courses').css('padding-left', '0');
    $('.communityService').css('padding-left', '0');
    $('.awards').css('padding-left', '0');
    $('.sectionTitle').css('margin', 'auto auto auto auto');
    $('.navbar-desktop').hide();


    // Navbar Mobile View
    $('.topnav').show();
    $('.navbar').css('position', 'absolute');
    $('.navbar').css('height', '8rem');
    
    $('.navbar').css('width', '100%');

    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
        x.className += " responsive";
        } else {
        x.className = "topnav";
        }
    }
}



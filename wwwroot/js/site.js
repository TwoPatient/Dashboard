$(function () {

    $(document).on('click', '.navbar-minimalize > a', function () {
        console.log('Clicked');
        $('.navbar-static-side').toggleClass('navbar-static-side-minimized');
        $('.navbar-fixed-top').toggleClass('navbar-static-side-minimized');
        $('.body-content').toggleClass('navbar-static-side-minimized');
    });

});
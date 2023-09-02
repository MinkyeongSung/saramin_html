$(document).ready(function () {
    $('.dropdown-submenu').hover(function () {
        $(this).find('.dropdown-menu').addClass('show');
    }, function () {
        $(this).find('.dropdown-menu').removeClass('show');
    });
});

// join
function UserJoinForm() {
    window.location.href = "./user/UserJoinForm.html";
}
function CompJoinForm() {
    window.location.href = "./company/CompJoinForm.html";
}
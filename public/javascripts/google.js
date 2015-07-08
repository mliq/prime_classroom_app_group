
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    APP.userName = profile.getName();
    APP.userImage = profile.getImageUrl();
    APP.userEmail = profile.getEmail().toLowerCase();

    APP.user.find(APP.userEmail);
    APP.user.adminAuth()
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

$('.signOutButton').on('click', function () {
    signOut();
    $('.g-signin2').removeClass('hidden');
    $('.signOutButton').addClass('hidden');
    $('.userNameDom').empty();
    $('.userImageDom').empty();
});

var person;
var id_token;

function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
        $("#start").load("../index2.html",function(){
        $("#QRscanner").load("../cam.html");

        });
        
        $('#FirstName').text("First Name: " + profile.getGivenName());
        $('#LastName').text("Last Name: " + profile.getFamilyName());
        $('#signIn').remove();
        $('#signin-form').remove();
        $('#sign-container').remove();
        person = profile;
        
        // The ID token you need to pass to your backend:
        id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
};
function settingUp(){
        $('#FirstName').text(person.getGivenName());
}
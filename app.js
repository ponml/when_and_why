console.log("hello");
var clientId = "edd82c8c5505481eb00dc677bf33dd9e";
var redirect = window.location;
if(window.location.hash) {
    alert("HERE'S YA HASH: " + window.location.hash);
} else {
    window.location = "https://api.instagram.com/oauth/authorize/?client_id=" + clientId + "&redirect_uri=" + encodeURI(redirect) + "&response_type=token"
}




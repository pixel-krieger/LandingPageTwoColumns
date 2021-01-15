function checkEmail(smth){
    var wrongEmailSpan = smth.nextElementSibling;
    var email = smth.previousElementSibling;
    var patt = /\S+@\S+\.\S+/;
    var result = patt.test(email.value);
    if(result!==true){
        wrongEmailSpan.textContent = "Please check your email";
        email.style.setProperty('border', '1px solid red');
    } else {
        wrongEmailSpan.textContent = "";
        email.style.setProperty('border', 'initial');
    }
}
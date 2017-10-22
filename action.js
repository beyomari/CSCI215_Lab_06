function checkEmail(email) {
    var result = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return result.test(email);


}

function checkAge() {
    var regEx = new RegExp('\w');
    
    if(checkAge < 100 ) {
       return true;
    } else {
       return confirm("not valid");
    }
}

function validate() {
    ("#result").text("");
    var email = ("#email").re();
    if (checkEmail(email)) {
        ("#result").text(email+ " is valid");
        ("#result").css("color", "green");
    } else {
        ("#result").text(email + "is not valid");
        ("#result").css("color", "red");
    }
    return false;
}
("#validate").bind("Subscribe", validate);
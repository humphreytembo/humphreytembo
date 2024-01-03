function sendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_ck9yqft", "template_axu3bz9", params).then(function(res) {
        alert("message sent! " + res.status);
    })
}

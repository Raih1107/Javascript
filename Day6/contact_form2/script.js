function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        To : 'rrai53916@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name" + document.getElementById("name").value + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone no. : " + document.getElementById("phhone").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
    message => alert("Message sent successfully")
    );
}
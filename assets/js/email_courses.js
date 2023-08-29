
function validateForm() {
    console.log("values added")
    var name = document.forms["form-query"]["name"].value;
    
    var phoneNumber = document.forms["form-query"]["phone"].value;
    var email = document.forms["form-query"]["email-2"].value;
  
    if (name === "") {
      alert("Name must be filled out");
      return false;
    }
  
    if (phoneNumber === "") {
      alert("Phone number must be filled out");
      return false;
    }
    
    if (email === "") {
      alert("Email must be filled out");
      return false;
    }
    
    // Additional validation logic for email addresses can be added here
  console.log("validation failed");
    // Hide the success and failure messages when re-submitting the form
    document.querySelector(".cf-success-message.w-form-done").style.display = "none";
    document.querySelector(".cf-error-message-dark.w-form-fail").style.display = "none";
    console.log("validation done successfully");
    return true;
  }
  
  function showSuccessMessageAndSendMail() {
    // Check if the form is valid before showing the success message
    if (validateForm()) {
 
      console.log("fade out stressed out");
      document.querySelector(".form").classList.add("fade-out");
    console.log("faded out taken out");
      setTimeout(function() {
  document.querySelector(".form").style.display = "none";
  document.querySelector(".cf-success-message.w-form-done").style.display = "block";
}, 500);

      sendmail();

    }
  }
  
  function showFailureMessage() {
    document.querySelector(".cf-error-message-dark.w-form-fail").style.display = "block";
  }
function sendmail(){
var user_name = document.forms["form-query"]["name"].value;

var phoneNumber = document.forms["form-query"]["phone"].value;
var email = document.forms["form-query"]["email-2"].value;
var user_message=document.forms["form-query"]["msg"].value;
// console.log('Name',user_name,phoneNumber,email,user_message);
var msg = `<h3>From: ${user_name}</h3>
       <br><h3>Mob: ${phoneNumber}</h3>
       <br><h3>Email: ${email}</h3>
       <br><h3>Message: ${user_message}</h3>`;
Email.send({
SecureToken : "96a4c7e0-c1ca-4e57-827b-72018e3aea64",
To : 'maestrrofinplanacademy@gmail.com',
From : "srikant@maestrro.in",
Subject : "Inquiry received",
Body : msg
}).then(
message => console.log("email sent")
);

}    
document.addEventListener("DOMContentLoaded", function() {
var form = document.querySelector("#form-query");


if (form) {
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  showSuccessMessageAndSendMail();
});
}
});
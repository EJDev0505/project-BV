function SendEmail() {
    Email.send({
        SecureToken: "c764aae4-b26f-4d1e-8f6a-3c73c8b98a2e",
        To : 'anaingeralden5@gmail.com',
        From : + document.getElementById("Email").value,
        Subject : "New Message From Enquiry",
        Body : "Name:" + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("Email").value
        + "<br> Subject: " + document.getElementById("subject").value
        + "<br> Message: " + document.getElementById("message").value
  }).then(
    message => {
        const doti = document.querySelector('dotlottie-player');
        const submit = document.querySelector('.submit');
        doti.style.display = "flex";
        submit.style.display = "none";

        setTimeout(() => {
            doti.style.display = "none";
            submit.style.display = "flex";
            
            document.getElementById("name").value = "";
            document.getElementById("Email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            }, 4075)
      
        
  },
  error => {
    console.error("ErroR Sent Email", error);
    alert("Error Sending Email, Please try again")
  }
  );
  }

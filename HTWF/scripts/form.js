(function(){
    emailjs.init("GGgW7YvbJbWLGZql5"); 
  })();
  
  function enviarCorreo(e) {
    e.preventDefault();
  
    const params = {
      name:  document.getElementById("name").value,   
      email: document.getElementById("email").value,  
      message: document.getElementById("message").value,
      reply_to: document.getElementById("email").value
    };
  
    emailjs.send("service_kqu4jfl", "template_s0t71mq", params)
      .then(() => {
        document.getElementById("form-messages-success").innerHTML = "Correo enviado correctamente";
        document.getElementById("contact-form").reset();
      })
      .catch(err => document.getElementById("form-messages-wrong").innerHTML = "Error al enviar: " + JSON.stringify(err));
  }
  
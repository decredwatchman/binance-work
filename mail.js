



//mail script
function sendMail() {
    var params = {
    //   message: document.getElementById("message").value,
    user_email: document.getElementById("user_email").value,
    user_name: document.getElementById("user_name").value,
      
    };
  
    const serviceID = "service_1n9oscn";
    const templateID = "template_671jffd";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
        //   document.getElementById("message").value = "";
          document.getElementById("user_email").value = "";
        document.getElementById("user_name").value = "";
          console.log(res);
          window.location.href = "confirm.html";
  
      })
      .catch(err=>console.log(err));
  
  }


let email= document.getElementById("emailInput");
let modal = document.getElementById("myModal");


let users=[];

if (localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"));
  }


 function subscribe(){
 
   let users={
        email:email.value,
       
    }

    if( validEmail(email.value)){

        document.getElementById("emailAlert").classList.replace("d-block", "d-none"),
        email.setAttribute("style", "background-color:white; border-color:white"); 
        modal.style.display = "block";
        document.getElementById('text').innerHTML=`A confirmation email has been sent to  ${email.value}  Please open it and click the button inside to confirm your subscription`;

    }
    else{
        document.getElementById("emailAlert").classList.replace("d-none", "d-block"),
        email.setAttribute("style", "background-color:#FFE8E7; border-color:red");
    
    }      
 }


 function validEmail(email){

    var emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      
    return emailRegex.test(email);
  }

  document.getElementById("buttonn").addEventListener("click", clear);

 function clear(){  
    modal.style.display = "none";
    
 }


document.addEventListener("DOMContentLoaded", (event) => {console.log("Salem")});

let pass=document.querySelector("#password").value;

let confirmpass=document.querySelector("#confirmpassword").value;

error= document.querySelector("#error");

if (pass=="" && confirmpass=="") {
   
        error.innerHTML="*Password couldn't be empty !";
    }
    

else if (pass!=confirmpass) {
    error.innerHTML="*Password dosen't match!";

}

const input_send = document.getElementById("send"),
form_send = document.querySelector(".form_send"),
input_email = form_send.querySelector(".input_email"),
label_error = form_send.querySelector(".error"),
dot_error = form_send.querySelector(".error_ico"),
ok_response = form_send.querySelector(".ok");

var valid= /\S+@\S+\.\S+/;

form_send.onsubmit = (e)=>{
    e.preventDefault();
}
input_send.onclick = (e) =>{
    e.preventDefault();
    if(input_email.value == "" || !valid.test(input_email.value)){
        label_error.classList.add("active");
        dot_error.classList.add("active");
        form_send.classList.add("active");
    }
    else{
        ok_response.classList.add("active");
    }
};

input_email.focus();
input_email.onkeyup = ()=>{

    label_error.classList.remove("active");
    dot_error.classList.remove("active");
    form_send.classList.remove("active");
    ok_response.classList.remove("active");
};
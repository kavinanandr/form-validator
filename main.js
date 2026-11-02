"use strict"

/* global declarations */
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const form = document.getElementById("form");

form.addEventListener("submit", (event)=>{

    event.preventDefault();
    validateForm();

});

const validateForm = (event)=>{

    /* local declarations */
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();

    /* username validation */
    if(usernameValue === ''){
        setError(username, "username is required");
    }
    else{
        setSuccess(username);
    }

    /* email validation */
    if(emailValue === '')
        setError(email, "email is required");
    else if(emailValue.toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )){
            setSuccess(email);
    }
    else{
        setError(email, "enter a valid email");
    }

    /* password validation */
    if(passwordValue === ''){
        setError(password, "password is required");
    }
    else if(passwordValue.length >=8){
        setSuccess(password);
    }
    else{
        setError(password, "password should be atleast 8 characters");
    }

    /* confirm password validation */
    if(cpasswordValue === ''){
        setError(cpassword, "type the password that you typed");
    }
    else if(cpasswordValue !== passwordValue){
        setError(cpassword, "type the correct password that you typed");
    }
    else{
        setSuccess(cpassword);
    }

}

const setError = (element, errorMessaage) => {

    element.value = '';
    element.classList.add("error");
    element.style.border = "1px solid red";
    element.nextElementSibling.innerHTML = errorMessaage;

}

const setSuccess = (element) => {

    element.classList.remove("error");
    element.style.border = "1px solid green";
    element.nextElementSibling.innerHTML = "";

}
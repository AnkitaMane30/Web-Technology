function submitButtonClick(event){
    event.preventDefault();
    //Getting user enterd values using DOM
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;

    //clear old message
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML ="";
    document.getElementById("successMSG").innerHTML = "";

    let isvalid = true;
    if(name == ""){
        document.getElementById("nameError").innerHTML ="Name field is required";
        isvalid = false;
    }
    if(email == "" || !email.includes("@")){
        document.getElementById("emailError").innerHTML = "Enter the Correct email";
        isvalid = false;
    }
    if(password == "" || password.length < 6){
        document.getElementById("passwordError").innerHTML = "Password must be more than 6 digit";
        isvalid = false;
    }
    if(isvalid){
        //alert("Form submitted Successfully");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("pass").value = "";
        document.getElementById("successMSG").innerHTML = "Form submitted successfully";
        document.getElementById("successMSG").style.color ="green";
        return isvalid;
    }
    
}
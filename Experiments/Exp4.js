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

    let isvalid = true;
    if(name.trim() == ""){
        document.getElementById("nameError").innerHTML ="Name field is required";
        isvalid = false;
    }
    if(email.trim() == "" || !email.includes("@")){
        document.getElementById("emailError").innerHTML = "Enter the Correct email";
        isvalid = false;
    }
    if(password.trim() == "" || password.length <= 6){
        document.getElementById("passwordError").innerHTML = "Enter the 6 digit password";
        isvalid = false;
    }
    if(isvalid){
        alert("Form submitted Successfully");
    }
}
function calculateAge(){
    let dob = new Date(document.getElementById("dob").value);
    let today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    let m = today.getMonth() - dob.getMonth();
    if(m < 0 || (m === 0 && today.getDate() < dob.getDate())){
        age--;
    }

    document.getElementById("age").innerHTML = "Your Age is "+age;
}
console.log("connected");

let total = 0;
let virtual = 0;
let inperson = 0;

function collectData(){

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const company = document.getElementById("company").value;

    let attendance = document.querySelector('input[name="type"]:checked');

    let valid = true;

    
    if(!name){
        document.getElementById("nameErr").innerHTML = "Name must be between 6 and 100 characters.";
        valid = false;
    }

    else if(name.length < 6 || name.length > 100){
        document.getElementById("nameErr").innerHTML = "Name must be between 6 and 100 characters.";
        valid = false;
    }

    else{
        document.getElementById("nameErr").innerHTML = "";
    }


    if(!email){
        document.getElementById("emailErr").innerHTML = "Please enter a valid professional email address.";
        valid = false;
    }

    else if(!email.includes("@")){
        document.getElementById("emailErr").innerHTML = "Please enter a valid professional email address.";
        valid = false;
    }

    else{
        document.getElementById("emailErr").innerHTML = "";
    }


    if(!attendance){
        document.getElementById("typeErr").innerHTML = "Please select your attendance type.";
        valid = false;
    }

    else{
        document.getElementById("typeErr").innerHTML = "";
    }


    if(!valid){
        return false;
    }


    total++;

    if(attendance.value == "Virtual"){
        virtual++;
    }
    else{
        inperson++;
    }


    document.getElementById("total").innerHTML = total;
    document.getElementById("virtual").innerHTML = virtual;
    document.getElementById("inperson").innerHTML = inperson;


    alert("Registration Successful");

    return false;
}



function toggleAnalytics(){

    let panel = document.getElementById("analytics");
    let btn = document.getElementById("btn");

    if(panel.style.display == "none"){
        panel.style.display = "block";
        btn.innerHTML = "Hide Event Analytics";
    }
    else{
        panel.style.display = "none";
        btn.innerHTML = "Show Event Analytics";
    }

}
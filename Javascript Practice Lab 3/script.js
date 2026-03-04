console.log("connected")
let wrongSub = 0;

function collectData() {
    // alert("Login form submitted");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let valid = true;

    if(!email) {
        document.getElementById("emailErr").innerHTML = "Email is required!";
        valid = false;
    } 
    
    else if (!email.includes("@")) {
        document.getElementById("emailErr").innerHTML = "Need @";
        valid = false;
    }
    else {
        document.getElementById("emailErr").innerHTML = "";
    }

    if(!password) {
        document.getElementById("passwordErr").innerHTML = "Password is required!";
        valid = false;
    }

    else if(password.length < 6)
    {
        document.getElementById("passwordErr").innerHTML = "Not 6 char.!";
        valid = false;
    }
    else if (password.includes("#")) {
        document.getElementById("passwordErr").innerHTML = "nned #";
        return false;
    }

    else {
        document.getElementById("passwordErr").innerHTML = "";
    }
    
    if (!valid){
        wrongSub++;
        document.getElementById(wrongSub).innerHTML = "Count=" + wrongSub;
        return false;
    }

    alert ("Successful");

    return true;

}


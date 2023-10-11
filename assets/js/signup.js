const input = document.querySelector(".input");

document.getElementById("subscribe").onmousedown = function() {
    const userEmail = input.value.toString().toLowerCase();
    const reEmail = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$");
    if (reEmail.test(userEmail)) {
        signUp(userEmail);
        console.log("Success");
        return;
    } else if (userEmail != "") {
        document.getElementById("emailerror").style.display = "block";
        input.setAttribute("id", "errorstate");
        console.log("Valid email required");
        return;
    } else {
        return;
    }
}

document.getElementById("dismiss").onmousedown = function() {
    document.querySelector(".component2").style.display = "none";
    document.querySelector(".component1").style.display = "flex";
    document.querySelector(".input").value = "";
}

input.onmousedown = function() {
    document.getElementById("emailerror").style.display = "none";
    input.removeAttribute("id");
}

function signUp(email) {
    document.querySelector(".component1").style.display = "none";
    document.querySelector(".component2").style.display = "flex";
    document.getElementById("emailinsert").innerText = email;
    return;
}


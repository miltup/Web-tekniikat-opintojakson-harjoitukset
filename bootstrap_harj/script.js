// Tapahtuman käsittelijä painikkeelle

document.getElementById("button1").onclick = function() {
    
    let input1 = document.getElementById("input1").value;
    
    if (input1.length > 0) {
        document.getElementById("success").style.display = "block";
        document.getElementById("danger").style.display = "none";
    } else {
       document.getElementById("danger").style.display = "block";
       document.getElementById("success").style.display = "none";
    }
}
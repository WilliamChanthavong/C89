function send()
{
    playernumber1 = document.getElementById("number_1").value;
    playernumber2 = document.getElementById("number_2").value;
    localStorage.setItem("NumberOne", playernumber1);
    localStorage.setItem("NumberTwo", playernumber2);
    // next part below
    // window.location = "nextpage.html";
}